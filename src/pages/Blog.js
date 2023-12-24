import React from "react";
import { useState, useEffect } from "react";
import client from "../client";
import { Link } from "react-router-dom";

export const Blog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] {
        title,
        slug,
        body,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        }
      }`
      )
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  return (
    <>
      <section className="px-5 exl:max-w-7xl">
        <h1 className="font-bold text-4xl mt-5 mb-10 tracking-widest text-center md:text-6xl lg:text-8xl">
          Blog page
        </h1>
        {/* <h2 className="text-xl text-center mb-10">You are viewing {posts.length} blog posts</h2> */}

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.slug.current}>
              <img
                src={post.mainImage.asset.url}
                alt={post.title}
                // style={{ height: "200px", width: "100%" }}
              />
              <h4 className="text-xl mt-2">{post.title}</h4>
              <button className="mt-5 mb-10">
                <Link
                  className="py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-black"
                  to={`/blog/${post.slug.current}`}
                >
                  Read Full Article
                </Link>
              </button>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};
