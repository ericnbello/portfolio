import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import userData from "@constants/data";

export default function Hero() {
  // const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
  return (
    <div className="flex flex-col md:flex-row justify-center items-start overflow-hidden pb-56 max-w-8xl mx-auto">
      {/* Text container */}
      <div className="w-full md:w-1/2 mx-auto text-center md:text-left my-auto">
        <p className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200"><span>Hi, I'm </span>
          <RoughNotation type="highlight" show={true} color={"#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")}>
            <span> Eric.</span>
          </RoughNotation>
        </p>
        {/*<RoughNotationGroup show={true}>
          <RainbowHighlight color={"#" + ((1 << 24) * Math.random() | 0).toString(16).padStart(6, "0")}>
            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
            Hi, I'm Eric.
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[0]}>
            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Developer.
            </h1>
          </RainbowHighlight>
        </RoughNotationGroup>*/}

          <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 pt-12 px-4 md:px-0"> 
          {userData.homepageDescription}
          </p>
        </div>

      {/* Image container */}
      <div className="hidden lg:block relative w-full md:w-1/3 md:-mr-40">
        <div className="w-1/2">
          <img src={userData.avatarUrl} alt="avatar" className=" shadow rounded-full " />
          <div className="flex flex-row justify-between mt-4">
            <div className="flex flex-row space-x-4">
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-90deg-up"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
                />
              </svg>
              <p className="font-mono">That's me</p> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
