import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import userData from "@constants/data";

export default function Hero() {
  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
  return (
    <div className="flex flex-col md:flex-row justify-center items-start overflow-hidden">
      {/* Text container */}

      <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
        <RoughNotationGroup show={true}>
          <RainbowHighlight color={colors[0]}>
            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Developer.
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[1]}>
            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Engineer.
            </h1>
          </RainbowHighlight>
          {/* <RainbowHighlight color={colors[2]}>
            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Programmer.
            </h1>
          </RainbowHighlight> */}
          <RainbowHighlight color={colors[3]}>
            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Adventurer.
            </h1>
          </RainbowHighlight>
        </RoughNotationGroup>

        {/* <p className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">Hi, I'm 
          <span>
            <RoughNotation type="highlight" show={true} color={colors[0]}>
                <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
                  Eric Bello.
                </h1>
            </RoughNotation>
          </span>
        </p> */}
      </div>
      {/* Image container */}
      <div className="hidden lg:block relative w-full md:w-1/2 md:-mr-40 md:mt-20">
        <div className="w-3/4">
          <img src={userData.avatarUrl} alt="avatar" className=" shadow" />
          <div className="flex flex-row justify-between mt-4">
            <div className="flex flex-row space-x-4">
              <svg
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
              <p className="font-mono">That's me</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// import React from "react";
// import Link from "next/link";
// // import { Link as ScrollLink } from "react-scroll";

// function Hero() {
//   return (
//     <>
//       <div
//         className="relative heroElem w-full pt-20 pb-40 m-auto flex justify-center text-center flex-col items-center z-1"
//         style={{ maxWidth: "1200px" }}
//       >
//         <p className="text-5xl mb-5">Hey, I'm Eric.</p>
//         <h1 className="heroTitle inline-block max-w-2xl lg:max-w-4xl  w-auto relative text-2xl md:text-3xl lg:text-3xl tracking-tighter mb-10 font-bold heroShinyBg">
//           I enjoy <span className="heroShiny1 text-fun-pink">building</span> and{" "}
//           <span className="heroShiny2 text-fun-pink">designing</span> for the
//           web.
//           <img
//             className="sqD squiggle-hero-html w-16 top-[-90px] right-[5%] sm:top-[-90px] sm:right-[170px]"
//             style={{ animationDelay: "0.1s" }}
//             src="/static/doodles/hero/html.svg"
//           />
//           <img
//             className="sqD squiggle-hero-nextjs hidden top-[75px] right-0 w-11"
//             style={{ animationDelay: "0.2s" }}
//             src="/static/doodles/hero/nextjs.svg"
//           />
//           <img
//             className="sqD bottom-[-300px] -right-1/4 sm:right-[-20%] lg:bottom-[-310px] lg:right-[-120px] w-[400px]"
//             style={{ animationDelay: "0.3s" }}
//             src="/static/doodles/hero/brayden.svg"
//           />
//           <img
//             className="sqD hidden sm:block bottom-[-340px] left-[-180px]"
//             style={{ animationDelay: "0.4s" }}
//             src="/static/doodles/hero/coder.svg"
//           />
//           <img
//             className="sqD hidden sm:block left-[100px] lg:left-[160px] bottom-[-150px]"
//             style={{ animationDelay: "0.5s" }}
//             src="/static/doodles/hero/js.svg"
//           />
//           <img
//             className="sqD bottom-[-320px] right-[65%] sm:right-[45%]"
//             style={{ animationDelay: "0.6s" }}
//             src="/static/doodles/hero/dino.svg"
//           />
//           <img
//             className="sqD right-[-60px] sm:right-0 bottom-[-180px] lg:[5%]"
//             style={{ animationDelay: "0.7s" }}
//             src="/static/doodles/hero/paintbrush.svg"
//           />
//           <img
//             className="sqD squiggle-hero-pop1 hidden sm:block sm:top-[-130px] sm:left-[15%] lg:top-[-130px] lg:left-[120px]"
//             src="/static/doodles/hero/pop1.svg"
//           />
//           <img
//             className="sqD left-[-35px] bottom-[-85px] sm:bottom-[-100px] sm:left-5 opacity-40"
//             style={{ animationDelay: "0.9s" }}
//             src="/static/doodles/hero/code.svg"
//           />
//         </h1>
//         {/* <Link
//           activeClass="active"
//           to="learnmore"
//           spy={true}
//           offset={-30}
//           smooth={true}
//           duration={500}
//         >
//           <div className="cursor-pointer font-bold whitespace-nowrap px-10 py-4 text-fun-white border-2 text-xl rounded-full border-fun-white bg-bg hover:bg-fun-pink hover:text-white hover:border-fun-pink transition-colors">
//             Tell me more
//           </div>
//         </Link> */}
//       </div>
//     </>
//   );
// }

// export default Hero;
