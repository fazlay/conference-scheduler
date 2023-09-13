import React from "react";

const SingleBlog = () => {
  return (
    <div className=" p-2 border-2 mx-3 mt-6 flex flex-col  sm:shrink-0 sm:grow sm:basis-0">
      <a href="#!">
        <img
          className="rounded-t-lg"
          src="https://tecdn.b-cdn.net/img/new/standard/city/041.webp"
          alt="Hollywood Sign on The Hill"
        />
      </a>
      <div className="p-6 text-left ">
        <h5 className="mb-2 text-xl font-bold leading-tight text-neutral-800 ">
          Card title
        </h5>
        <p className="text-base font-medium text-neutral-600 ">This longer.</p>
        <p className="mb-4 text-base font-bold text-neutral-600 ">
          August 21st, 2021
        </p>
        <p className="mb-4 text-base text-neutral-600 ">
          This is a longer card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </p>
      </div>
    </div>
  );
};

export default SingleBlog;
