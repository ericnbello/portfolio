import React from "react";
import userData from "@constants/data";

export default function Certifications() {
    return (
        <>
            <h1 className="bg-red-500 dark:bg-white dark:text-gray-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50 mt-8">
                Certifications
            </h1>
            <div className="flex flex-row flex-wrap mt-8">
                {userData.certifications.map((cert, idx) => {
                    return (
                        <a key={idx} href={cert.link}>
                        <img
                            src={cert.imgUrl}
                            className="h-36 w-36 mx-4 my-4"
                        />
                        </a>
                    )
                })}
            </div>
        </>
    )
}