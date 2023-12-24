import React from "react";
import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="uppercase font-bold text-4xl tracking-wide m-5 md:text-6xl">
        Error 404 | Page Not Found
      </h1>
      <Link
        to="/"
        className="py-2 px-6 rounded shadow text-white bg-black hover:bg-transparent border-2 border-black transition-all duration-500 hover:text-black"
      >
        Back to homepage
      </Link>
    </div>
  );
};
