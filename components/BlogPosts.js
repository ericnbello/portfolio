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
        <div className="flex justify-center">
          <button className="font-bold" onClick={() => setPageIndex(pageIndex - 1)}>Previous</button>
          <button className="font-bold" onClick={() => setPageIndex(pageIndex + 1)}>Next</button>
        </div>
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
