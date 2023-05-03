import React, { useState, useSWR } from "react";
import userData from "@constants/data";
import Link from "next/dist/client/link";
import ContainerBlock from "./ContainerBlock";

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

export default function Page404() {
  const [pageIndex, setPageIndex] = useState(0);

  paginator(userData.projects, 1, 6);

  return (
    <ContainerBlock>
      <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          404
        </h1>
      </div>
      {/* Grid starts here */}
      <div className="bg-[#F1F1F1] dark:bg-gray-900">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 py-20 pb-40">
          Sorry, that page doesn't exist.
        </div>
        {/* <div className="flex justify-center">
          <button className="font-bold" onClick={() => setPageIndex(pageIndex - 1)}>Previous</button>
          <button className="font-bold" onClick={() => setPageIndex(pageIndex + 1)}>Next</button>
        </div> */}
      </div>
    </section>
    </ContainerBlock>
  );
}

// const ArticleCard = ({ title, route, imgUrl, number, description, tags }) => {
//   return (
//     <>
//     <div>
//       <Link href={route} className="w-full block shadow-2xl">
//         <div className="relative overflow-hidden">
//           <div className="h-72 object-cover">
//             <img
//               src={imgUrl}
//               alt="portfolio"
//               className="transform hover:scale-125 transition duration-2000 ease-out object-cover h-full w-full"
//             />
//           </div>
//           <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
//             {title}
//           </h1>
//           <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
//             {number.length === 1 ? "0" + number : number}
//           </h1>
//         </div>
//       </Link>
//       {/* <div>
//         <p className="font-bold p-2">{description}</p>
//       </div> */}
//     </div>
//     </>
//   );
// };