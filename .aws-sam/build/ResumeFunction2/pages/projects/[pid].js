import React from "react";
import { useRouter } from "next/router";
// import data from "../components/ProjectDataFetcher";
import ContainerBlock from "../../components/ContainerBlock";
import userData from '../../constants/data';
import Page404 from "../../components/Page404";

const ProjectPage = () => {
    const router = useRouter();
    const { pid } = router.query;

    const findProjectByPid = (pid) => {
        return userData.projects.find((item) => item.pid === pid);
      };
    
      let project = null;
    
      if (pid) {
        // If pid is an object, extract the actual pid value
        const actualPid = typeof pid === 'object' ? pid.pid : pid;
        project = findProjectByPid(actualPid);
      }

    if (!project) {
      return <Page404 />;
    }
  
    return (
      <div>
        <ContainerBlock>
        <section className="bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
            <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
            {project.title}
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
            
                {/* Sidebar */}
                <div className="inline-flex flex-col">
                    <div>
                        <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                            Overview
                        </h2>
                        <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                            {project.overview}
                        </p>
                        <h2 className="text-xl font-semibold text-gray-500 mt-4 dark:text-gray-300">
                            Technologies used: 
                        </h2>
                        <p className="text-lg text-gray-500 mt-4 dark:text-gray-300"> 
                        {/* {project.tags.map((tag) => {
                            return (
                                <span><a> {tag} </a></span>
                            )
                        })} */}
                        <a>{project.tags.join(", ")}</a>
                        </p>
                    </div>
                
                {/* Project Links */}
                <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">
                Links
                </h1>
                <div className="mt-4 ml-4">
                <div className="flex flex-row justify-start items-center">
                    <a
                    href={project.demoUrl}
                    className="flex flex-row items-center space-x-4 group"
                    >
                    <div className="my-4">&rarr;</div>
                    <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                        <span className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></span>
                        Live Demo
                    </p>
                    </a>
                </div>
                <div className="flex flex-row justify-start items-center">
                    <a
                    href={project.githubUrl}
                    className="flex flex-row items-center space-x-4 group"
                    >
                    <div className="my-4">&rarr;</div>
                    <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                        <span className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></span>
                        GitHub Repo
                    </p>
                    </a>
                </div>
                </div>
            </div>

            {/* Text area */}
            <div className="col-span-1 md:col-span-2">
                <img src={project.imgUrl} alt="project screenshot">

                </img>
                {project.description.map((desc, idx) => (
                <p
                    key={idx}
                    className="text-xl text-gray-700 mb-4 dark:text-gray-300 "
                >
                    {desc}
                </p>
                ))}
                {/* {project.description} */}
            </div>
            </div>
        </div>
        </section>
        </ContainerBlock>
    </div>
    );
  };
  
export default ProjectPage;