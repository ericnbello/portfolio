import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import Hero from "../components/Hero";
import FavoriteProjects from "../components/FavoriteProjects";
import LatestCode from "../components/LatestCode";
import BlogPosts from "@components/BlogPosts";
import Articles from "@components/Articles";

export default function Home() {
  return (
    <ContainerBlock
      title="Eric Bello Portfolio"
      description="Portfolio site built using AWS, Next.js & Tailwind."
    >
      <Hero />
      <FavoriteProjects />
      <LatestCode />
      <BlogPosts />
    </ContainerBlock>
  );
}