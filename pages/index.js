import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import Hero from "../components/Hero";
import FavoriteProjects from "../components/FavoriteProjects";
import LatestCode from "../components/LatestCode";
import BlogPosts from "@components/BlogPosts";
import Testimonials from "@components/Testimonials";
import Skills from "@components/Skills";
import Experience from "@components/Experience";
import ContactHome from "@components/ContactHome";
import SkillsHome from "@components/SkillsHome";

export default function Home() {
  return (
    <ContainerBlock
      title="Eric Bello | Professional Web Development Services"
      description="Transform your ideas into stunning websites with custom web development, eCommerce solutions, and responsive designs to help your business grow online."
    >
      <Hero />
      <FavoriteProjects />
      {/* <Skills /> */}
      {/* <Experience /> */}
      {/* <LatestCode /> */}
      <SkillsHome />
      {/* <Testimonials /> */}
      <BlogPosts />
      <ContactHome />
    </ContainerBlock>
  );
}