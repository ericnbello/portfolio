import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import Hero from "../components/Hero";
import FavoriteProjects from "../components/FavoriteProjects";
import LatestCode from "../components/LatestCode";

export default function Home() {
  return (
    <ContainerBlock
      title="Eric Bello"
      description="Portfolio site built using AWS, Next.js and Tailwind."
    >
      <Hero />
      <FavoriteProjects />
      <LatestCode />
    </ContainerBlock>
  );
}