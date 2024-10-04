import React from "react";
import userData from "@constants/data";

export default function TechStack() {
    return (
        <>
            <h1 className="bg-red-500 dark:bg-white dark:text-gray-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">
              Tech Stack
            </h1>
            <div className="flex flex-row flex-wrap mt-8 pb-6">
                {userData.technologies.map((tech, idx) => {
                    return (
                        <img
                            key={idx}
                            src={tech.imgUrl}
                            className="h-20 w-20 mx-4 my-4"
                        />
                    )
                })}
            </div>
        </>
    )
}