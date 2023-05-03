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
                    <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
                    {article.title}
                    </h1>
                </div>
                <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
                    <div className="text-container max-w-6xl mx-auto pt-20">
                    <p
                        className="leading-loose text-2xl md:text-4xl font-semibold  mx-4"
                        style={{ lineHeight: "3rem" }}
                    >
                        {/* {project.overview} */}
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
                            <h2 className="text-xl font-semibold text-gray-500 mt-4 dark:text-gray-300">
                                Technologies used: 
                            </h2>
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
                                    </div>
                                )
                            })
                            }
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </ContainerBlock>
    </div>
    );
  };
  
export default ArticlePage;