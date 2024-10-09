import React from "react";
import userData from "@constants/data";
import Nextjs from "./icons/Nextjs";
import Image from "next/image";
import Certifications from "./Certifications";
import TechStack from "./TechStack";
import SkillsList from "./SkillsList";

export default function SkillsHome() {
  return (
    <section className="bg-[#F1F1F1] -mt-40 dark:bg-gray-900 pb-40">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:pt-40 mx-10">
          <h1 className="text-6xl lg:text-9xl max-w-lg font-bold text-gray-500 my-20 md:my-0 dark:text-gray-600 text-center lg:text-left">
            Skills
          </h1>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 mx-10">
        {/* <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20"> */}

          {/* Skills Area */}
          <div className="col-span-1 md:col-span-2 ">
            <SkillsList />
            {/* <Certifications /> */}
          </div>
        {/* </div> */}
      </div>
      </div>
    </section>
  );
}