import React from "react";
import ContainerBlock from "./ContainerBlock";
import Link from "next/dist/client/link";

export default function Page404() {
  return (
    <ContainerBlock>
      <section className="bg-white dark:bg-gray-800">
        <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
          <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          404
          </h1>
        </div>
        <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
          <div className="text-container max-w-6xl mx-auto pt-20">
            <p
              className="leading-loose flex justify-center md:justify-start text-2xl md:text-4xl font-semibold mx-4"
              style={{ lineHeight: "3rem" }}
            >
              Sorry, that page doesn't exist.
            </p>
          </div>
        </div>
      </section>
    </ContainerBlock>
  );
}