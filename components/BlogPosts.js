import React, { useState, useSWR } from "react";
import userData from "@constants/data";
import Link from "next/link";

function paginator(items, current_page, per_page_items) {
	let page = current_page || 1,
	per_page = per_page_items || 10,
	offset = (page - 1) * per_page,

	paginatedItems = items.slice(offset).slice(0, per_page_items),
	total_pages = Math.ceil(items.length / per_page);

  return {
		page: page,
		per_page: per_page,
		pre_page: page - 1 ? page - 1 : null,
		next_page: (total_pages > page) ? page + 1 : null,
		total: items.length,
		total_pages: total_pages,
		data: paginatedItems
	};
}

export default function Articles() {
  const [pageIndex, setPageIndex] = useState(0);

  paginator(userData.articles, 1, 6);

  return (
    <section className="bg-[#F1F1F1] -mt-40 dark:bg-gray-900 pb-40">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:pt-40 mx-10">
          <h1 className="text-6xl lg:text-9xl max-w-lg font-bold text-gray-500 my-20 md:my-0 dark:text-gray-600 text-center lg:text-left">
            Blog
          </h1>
          <a href="/blog">
            <a className="flex flex-row items-center px-8 py-4 mb-20 space-x-4 text-xl font-semibold bg-white rounded-md shadow-lg md:mb-0 dark:text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-up-right-square"
                stroke="4"
                strokeWidth="4"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
                />
              </svg>
              <p>View all</p>
            </a>
          </a>
      </div>
      {/* Grid starts here */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-10 lg:-mt-0 gap-y-20">
          {userData.articles.map((post, idx) => (
            <ArticleCard
              key={idx}
              pid={post.idx}
              route={post.route}
              title={post.title}
              link={post.link}
              imgUrl={post.imgUrl}
              number={`${idx + 1}`}
              description={post.description}
              tags={post.tags}
              overview={post.overview}
            />
          ))}
        </div>
        {/* <div className="flex justify-center">
          <button className="font-bold" onClick={() => setPageIndex(pageIndex - 1)}>Previous</button>
          <button className="font-bold" onClick={() => setPageIndex(pageIndex + 1)}>Next</button>
        </div> */}
      </div>
    </section>
  );
}

const ArticleCard = ({ title, route, imgUrl, number, description, tags, overview }) => {
  const postName = title.replace(/-/g, " "); 
  const titleCase = (str) => str.replace(/\b\S/g, t => t.toUpperCase());

  return (
    <>
    <div className="blog-post">
        <h1 className="font-semibold text-xl dark:text-gray-200 text-gray-700">
          {titleCase(postName)}
        </h1>
        <p className="text-base font-normal my-4 text-gray-500">
          {overview}
        </p>

        <div className="font-semibold group flex flex-row space-x-2 w-full items-center">
            <Link href={route}>
                View Article
                {/* <span className="transform group-hover:translate-x-2 transition duration-300">
          &rarr;
        </span> */}
            </Link>
        </div>
      </div>
    </>
  );
};
