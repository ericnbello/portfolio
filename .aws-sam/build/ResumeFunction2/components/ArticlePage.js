import React from "react";
import { useRouter } from "next/router";
import ContainerBlock from "./ContainerBlock";
import userData from '../constants/data';
import Page404 from "./Page404";

const ArticlePage = () => {
    const router = useRouter();
    const { pid } = router.query;
    const article = userData.articles.find((item) => item.pid === pid);
  
    if (!article) {
      return <Page404 />;
    }
  
    return (
      <div>
        <ContainerBlock>
            <section className="bg-white dark:bg-gray-800">
                <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
                    <h1 className="text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
                    Blog
                    </h1>
                    {/* <h2 className="text-3xl font-bold text-center md:text-left">{article.title}</h2> */}
                </div>
                <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
                    <div className="text-container max-w-6xl mx-auto pt-20">
                    <p
                        className="leading-loose text-2xl md:text-4xl font-semibold  mx-4"
                        style={{ lineHeight: "3rem" }}
                    >
                        {article.title}
                    </p>
                    </div>
                </div>
                <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
                    <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
                    {/* Social Buttons */}
                    <div className="inline-flex flex-col">
                        <div>
                            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                                Overview
                            </h2>
                            <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                                {article.overview}
                            </p>
                            {/* <h2 className="text-xl font-semibold text-gray-500 mt-4 dark:text-gray-300">
                                Technologies used: 
                            </h2> */}
                            <p className="text-lg text-gray-500 mt-4 dark:text-gray-300"> 
                            {/* {article.tags.map((tag) => {
                                return (
                                    <span><a> {tag} </a></span>
                                )
                            })} */}
                                <a>{article.tags.join(", ")}</a>
                            </p>
                        </div>
                    </div>

                    {/* Text area */}
                    <div className="col-span-1 md:col-span-2">
                        {/* <img src={article.imgUrl} alt="article cover photo"> </img> */}
                        <p className="text-xl text-gray-700 mb-4 dark:text-gray-300">{article.description[0].intro}</p>
                        <div>
                            {
                            article.description[0].headlines.map((headline, idx) => {
                                return (
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-700 mb-4 dark:text-gray-300">    {headline}
                                        </h3>
                                        <p className="text-xl text-gray-700 mb-4 dark:text-gray-300">
                                            {article.description[0].content[idx]}
                                        </p>
                                        {article.description[0].tips[idx] == ('' || null) ? <p></p> : 
                                        <div className="relative z-10 p-8 mb-10 overflow-hidden rounded-md bg-blue-500 bg-opacity-10 md:p-9 lg:p-8 xl:p-9">
                                            <p className="text-base italic font-medium text-center text-body-color">
                                            {article.description[0].tips[idx]}
                                            </p>
                                            <span className="absolute left-0 top-0 z-[-1]">
                                            <svg
                                                width="132"
                                                height="109"
                                                viewBox="0 0 132 109"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                opacity="0.5"
                                                d="M33.0354 90.11C19.9851 102.723 -3.75916 101.834 -14 99.8125V-15H132C131.456 -12.4396 127.759 -2.95278 117.318 14.5117C104.268 36.3422 78.7114 31.8952 63.2141 41.1934C47.7169 50.4916 49.3482 74.3435 33.0354 90.11Z"
                                                fill="url(#paint0_linear_111:606)"
                                                />
                                                <path
                                                opacity="0.5"
                                                d="M33.3654 85.0768C24.1476 98.7862 1.19876 106.079 -9.12343 108.011L-38.876 22.9988L100.816 -25.8905C100.959 -23.8126 99.8798 -15.5499 94.4164 0.87754C87.5871 21.4119 61.9822 26.677 49.5641 38.7512C37.146 50.8253 44.8877 67.9401 33.3654 85.0768Z"
                                                fill="url(#paint1_linear_111:606)"
                                                />
                                                <defs>
                                                <linearGradient
                                                    id="paint0_linear_111:606"
                                                    x1="94.7523"
                                                    y1="82.0246"
                                                    x2="8.40951"
                                                    y2="52.0609"
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop stopColor="white" stopOpacity="0.06" />
                                                    <stop
                                                    offset="1"
                                                    stopColor="white"
                                                    stopOpacity="0"
                                                    />
                                                </linearGradient>
                                                <linearGradient
                                                    id="paint1_linear_111:606"
                                                    x1="90.3206"
                                                    y1="58.4236"
                                                    x2="1.16149"
                                                    y2="50.8365"
                                                    gradientUnits="userSpaceOnUse"
                                                >
                                                    <stop stopColor="white" stopOpacity="0.06" />
                                                    <stop
                                                    offset="1"
                                                    stopColor="white"
                                                    stopOpacity="0"
                                                    />
                                                </linearGradient>
                                                </defs>
                                            </svg>
                                            </span>
                                            <span className="absolute bottom-0 right-0 z-[-1]">
                                            <svg
                                                width="53"
                                                height="30"
                                                viewBox="0 0 53 30"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <circle
                                                opacity="0.8"
                                                cx="37.5"
                                                cy="37.5"
                                                r="37.5"
                                                fill="#4A6CF7"
                                                />
                                                <mask
                                                id="mask0_111:596"
                                                style={{ maskType: "alpha" }}
                                                maskUnits="userSpaceOnUse"
                                                x="0"
                                                y="0"
                                                width="75"
                                                height="75"
                                                >
                                                <circle
                                                    opacity="0.8"
                                                    cx="37.5"
                                                    cy="37.5"
                                                    r="37.5"
                                                    fill="#4A6CF7"
                                                />
                                                </mask>
                                                <g mask="url(#mask0_111:596)">
                                                <circle
                                                    opacity="0.8"
                                                    cx="37.5"
                                                    cy="37.5"
                                                    r="37.5"
                                                    fill="url(#paint0_radial_111:596)"
                                                />
                                                <g opacity="0.8" filter="url(#filter0_f_111:596)">
                                                    <circle
                                                    cx="40.8089"
                                                    cy="19.853"
                                                    r="15.4412"
                                                    fill="white"
                                                    />
                                                </g>
                                                </g>
                                                <defs>
                                                <filter
                                                    id="filter0_f_111:596"
                                                    x="4.36768"
                                                    y="-16.5881"
                                                    width="72.8823"
                                                    height="72.8823"
                                                    filterUnits="userSpaceOnUse"
                                                    colorInterpolationFilters="sRGB"
                                                >
                                                    <feFlood
                                                    floodOpacity="0"
                                                    result="BackgroundImageFix"
                                                    />
                                                    <feBlend
                                                    mode="normal"
                                                    in="SourceGraphic"
                                                    in2="BackgroundImageFix"
                                                    result="shape"
                                                    />
                                                    <feGaussianBlur
                                                    stdDeviation="10.5"
                                                    result="effect1_foregroundBlur_111:596"
                                                    />
                                                </filter>
                                                <radialGradient
                                                    id="paint0_radial_111:596"
                                                    cx="0"
                                                    cy="0"
                                                    r="1"
                                                    gradientUnits="userSpaceOnUse"
                                                    gradientTransform="translate(37.5 37.5) rotate(90) scale(40.2574)"
                                                >
                                                    <stop stopOpacity="0.47" />
                                                    <stop offset="1" stopOpacity="0" />
                                                </radialGradient>
                                                </defs>
                                            </svg>
                                            </span>
                                        </div>
                                        }
                                    </div>
                                )
                            })
                            }
                        </div>

                        {article.description[0].conclusion == ('' || null) ? <p></p> : <p className="text-xl text-gray-700 mb-4 dark:text-gray-300">{article.description[0].conclusion}</p>}

                        {article.description[0].endingBox == ('' || null) ? <p></p> : 
                        <div className="relative z-10 p-8 mb-10 overflow-hidden rounded-md bg-blue-500 bg-opacity-10 md:p-9 lg:p-8 xl:p-9">
                            <p className="text-base font-medium text-center text-body-color">
                            {article.description[0].endingBox}
                            </p>
                            <span className="absolute left-0 top-0 z-[-1]">
                            <svg
                                width="132"
                                height="109"
                                viewBox="0 0 132 109"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                opacity="0.5"
                                d="M33.0354 90.11C19.9851 102.723 -3.75916 101.834 -14 99.8125V-15H132C131.456 -12.4396 127.759 -2.95278 117.318 14.5117C104.268 36.3422 78.7114 31.8952 63.2141 41.1934C47.7169 50.4916 49.3482 74.3435 33.0354 90.11Z"
                                fill="url(#paint0_linear_111:606)"
                                />
                                <path
                                opacity="0.5"
                                d="M33.3654 85.0768C24.1476 98.7862 1.19876 106.079 -9.12343 108.011L-38.876 22.9988L100.816 -25.8905C100.959 -23.8126 99.8798 -15.5499 94.4164 0.87754C87.5871 21.4119 61.9822 26.677 49.5641 38.7512C37.146 50.8253 44.8877 67.9401 33.3654 85.0768Z"
                                fill="url(#paint1_linear_111:606)"
                                />
                                <defs>
                                <linearGradient
                                    id="paint0_linear_111:606"
                                    x1="94.7523"
                                    y1="82.0246"
                                    x2="8.40951"
                                    y2="52.0609"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="white" stopOpacity="0.06" />
                                    <stop
                                    offset="1"
                                    stopColor="white"
                                    stopOpacity="0"
                                    />
                                </linearGradient>
                                <linearGradient
                                    id="paint1_linear_111:606"
                                    x1="90.3206"
                                    y1="58.4236"
                                    x2="1.16149"
                                    y2="50.8365"
                                    gradientUnits="userSpaceOnUse"
                                >
                                    <stop stopColor="white" stopOpacity="0.06" />
                                    <stop
                                    offset="1"
                                    stopColor="white"
                                    stopOpacity="0"
                                    />
                                </linearGradient>
                                </defs>
                            </svg>
                            </span>
                            <span className="absolute bottom-0 right-0 z-[-1]">
                            <svg
                                width="53"
                                height="30"
                                viewBox="0 0 53 30"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <circle
                                opacity="0.8"
                                cx="37.5"
                                cy="37.5"
                                r="37.5"
                                fill="#4A6CF7"
                                />
                                <mask
                                id="mask0_111:596"
                                style={{ maskType: "alpha" }}
                                maskUnits="userSpaceOnUse"
                                x="0"
                                y="0"
                                width="75"
                                height="75"
                                >
                                <circle
                                    opacity="0.8"
                                    cx="37.5"
                                    cy="37.5"
                                    r="37.5"
                                    fill="#4A6CF7"
                                />
                                </mask>
                                <g mask="url(#mask0_111:596)">
                                <circle
                                    opacity="0.8"
                                    cx="37.5"
                                    cy="37.5"
                                    r="37.5"
                                    fill="url(#paint0_radial_111:596)"
                                />
                                <g opacity="0.8" filter="url(#filter0_f_111:596)">
                                    <circle
                                    cx="40.8089"
                                    cy="19.853"
                                    r="15.4412"
                                    fill="white"
                                    />
                                </g>
                                </g>
                                <defs>
                                <filter
                                    id="filter0_f_111:596"
                                    x="4.36768"
                                    y="-16.5881"
                                    width="72.8823"
                                    height="72.8823"
                                    filterUnits="userSpaceOnUse"
                                    colorInterpolationFilters="sRGB"
                                >
                                    <feFlood
                                    floodOpacity="0"
                                    result="BackgroundImageFix"
                                    />
                                    <feBlend
                                    mode="normal"
                                    in="SourceGraphic"
                                    in2="BackgroundImageFix"
                                    result="shape"
                                    />
                                    <feGaussianBlur
                                    stdDeviation="10.5"
                                    result="effect1_foregroundBlur_111:596"
                                    />
                                </filter>
                                <radialGradient
                                    id="paint0_radial_111:596"
                                    cx="0"
                                    cy="0"
                                    r="1"
                                    gradientUnits="userSpaceOnUse"
                                    gradientTransform="translate(37.5 37.5) rotate(90) scale(40.2574)"
                                >
                                    <stop stopOpacity="0.47" />
                                    <stop offset="1" stopOpacity="0" />
                                </radialGradient>
                                </defs>
                            </svg>
                            </span>
                        </div>
                        }

                        {article.description[0].affiliateLinks != 'yes' ? <p></p> : <p className="text-sm italic text-gray-700 mb-4 dark:text-gray-300">Affiliate Disclaimer:
                            This post may contain affiliate links, meaning I may earn a small commission at no extra cost to you if you make a purchase through these links. I only recommend products and services that I have personally used or believe will provide value to my readers. Your support helps keep things running, and I genuinely appreciate it! </p>}

                    </div>
                    </div>
                </div>
            </section>
        </ContainerBlock>
    </div>
    );
  };
  
export default ArticlePage;