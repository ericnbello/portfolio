import React, { useState, useSWR } from "react";
import userData from "@constants/data";
import Link from "next/link";

const starIcon = (
    <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
      <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
    </svg>
  );

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

export default function Testimonials() {
  const [pageIndex, setPageIndex] = useState(0);

  paginator(userData.testimonials, 1, 6);

  return (
    <section className="bg-[#F1F1F1] -mt-40 dark:bg-gray-900 pb-40">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:pt-40 mx-10">
          <h1 className="text-6xl lg:text-9xl max-w-lg font-bold text-gray-500 my-20 md:my-0 dark:text-gray-600 text-center lg:text-left">
            Testimonials
          </h1>
        </div>
      {/* Grid starts here */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-10 lg:-mt-0 gap-y-20">
          {userData.testimonials.map((test, idx) => (
            <SingleTestimonial
              key={idx}
              pid={test.idx}
              author={test.author}
              imgUrl={test.imgUrl}
              number={`${idx + 1}`}
              content={test.content}
              authorDesignation={test.authorDesignation}
              star={test.star}
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

const SingleTestimonial = ({ author,  authorDesignation, imgUrl, number, star, content }) => {
//   const testName = title.replace(/-/g, " "); 
//   const titleCase = (str) => str.replace(/\b\S/g, t => t.toUpperCase());

let ratingIcons = [];
for (let index = 0; index < star; index++) {
  ratingIcons.push(
    <span key={index} className="text-yellow-500">
      {starIcon}
    </span>,
  );
}

  return (
    <>
    <div className="blog-post relative experience-card  p-4 rounded-md shadow-xl bg-white dark:bg-gray-800 text-black dark:text-white 00 z-10 mx-4">
        <h1 className="font-semibold text-xl dark:text-white text-gray-700">
          {/* {ratingIcons} */}
        </h1>
        <div className="flex items-center mb-5 space-x-1">{ratingIcons}</div>
        <p className="text-base font-normal my-4 text-gray-500 dark:text-white">
          {content}
        </p>

        <div className="group flex flex-row space-x-2 w-full items-center">
        <div className="relative mr-4 h-[50px] w-full max-w-[50px] overflow-hidden rounded-full">
            <img className="rounded-full h-12" src={imgUrl} />
            </div>
            <div className="w-full">
            <h3 className="mb-1 text-lg font-semibold text-dark dark:text-white lg:text-base xl:text-lg">
              {author}
            </h3>
            <p className="text-sm text-body-color">{authorDesignation}</p>
          </div>
        </div>
      </div>
    </>
  );
};
