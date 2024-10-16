import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";
// import { Metadata } from 'next';

// export const Metadata = {
//   title: 'Eric Bello Cloud Resume',
//   description: 'Serverless website created using AWS services.',
// }
export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter();

  const meta = {
    title: "Eric Bello Developer Portfolio",
    description: `Portfolio built using Next.js and TailwindCSS.`,
    image: "/avatar.png",
    type: "website",
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://dev.ericnbello.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://dev.ericnbello.com${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Eric Bello's Developer Site" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@ericnbello" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <main className="dark:bg-gray-800 w-full max-h-screen">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}
