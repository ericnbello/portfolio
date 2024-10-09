import React from "react";
import userData from "@constants/data";

export default function SkillsList() {
  return (
    <section className="">
      {/* <hr /> */}
      {userData.skills.map((skill) => (
        <>
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-col md:flex-row justify-between py-6 md:items-center w-full md:w-1/3 ">
            <h1 className="flex flex-row bg-red-500 dark:bg-white dark:text-gray-500 text-3xl rounded-md px-2 p-2 font-bold text-gray-50 w-full md:w-2/3 justify-center">
                {skill.category}
            </h1>
          </div>
          
          <div className="flex flex-row flex-wrap w-full md:w-2/3 md:mt-8 pb-6">
            {skill.tech.map((t, idx) => {
              return (
                <div>
                  {t.siteUrl == (null || '') ? (
                    <div className="flex flex-row items-center space-x-4 group">
                      <p className="text-lg text-gray-500 relative overflow-hidden dark:text-gray-300 mx-2">
                      <div className="absolute w-full bg-gray-400"></div>
                    {t.name}
                    </p>
                    </div> 
                   ) : 
                   ( <a
                      href={t.siteUrl}
                      key={idx}
                      className="flex flex-row items-center space-x-4 group"
                    >
                      <p className="text-lg text-gray-500 relative overflow-hidden dark:text-gray-300 mx-2">
                        <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-0 group-hover:translate-x-full transition duration-300"></div>
                          {t.name}
                      </p>
                    </a>
            )}
                </div>
              )
            })}
          </div>
          {/* </div> */}
        </div>
        <hr className="hidden md:block"/>
        </>
      ))}
    </section>
  )
}