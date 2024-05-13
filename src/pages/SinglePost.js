import React from "react";
import { useState, useEffect } from "react";
import client from "../client";
import { Link, useParams } from "react-router-dom";
import BlockContent from "@sanity/block-content-to-react";

export const SinglePost = () => {
  const [singlePost, setSinglePost] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"] {
        title,
        body,
        mainImage {
          asset -> {
            _id,
            url
          },
          alt
        },
        "name": author->name,
      }`
      )
      .then((data) => setSinglePost(data[0]));
    setIsLoading(false);
  }, [slug]);

  return (
    <>
      {isLoading ? (
        <h1>Loading</h1>
      ) : (
        <section className="px-5 xl:max-w-6xl xl:mx-auto pb-10">
          <h1 className="uppercase font-bold text-4xl tracking-wide mb-10 md:text-6xl lg:text-8xl text-center mt-5">
            {singlePost.title}
          </h1>
          {singlePost.mainImage && singlePost.mainImage.asset && (
            <img
              src={singlePost.mainImage.asset.url}
              alt={singlePost.title}
              title={singlePost.title}
              className="blog__image rounded-md"
            />
          )}

          <p>By {singlePost.name}</p>

          <div className="block__content">
            <BlockContent
              blocks={singlePost.body}
              projectId="txxgjm84"
              dataset="production"
            />
          </div>

          <Link
            to="/blog"
            className="py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-black"
          >
            Read my blog posts
          </Link>
        </section>
      )}
    </>
  );
};
