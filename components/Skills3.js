import React from "react";
import userData from "@constants/data";
import Nextjs from "./icons/Nextjs";
import Image from "next/image";
import Certifications from "./Certifications";
import TechStack from "./TechStack";
import SkillsList from "./SkillsList";

export default function Skills3() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          Skills
        </h1>
      </div>
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            // className="leading-loose text-2xl md:text-4xl font-semibold  mx-4"
            className="leading-loose text-xl md:text-2xl font-semibold  mx-4"
            style={{ lineHeight: "3rem" }}
          >
            {userData.skillsDesc}
          </p>
        </div>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="pt-6 max-w-6xl mx-auto gap-y-20 gap-x-20">
          

          {/* Text area */}
          <div className="col-span-1 md:col-span-2 mt-8">
            
            <SkillsList />
            {/* <TechStack /> */}
            {/* <Certifications /> */}
          </div>
        </div>
      </div>
    </section>
  );
}