import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import FavoriteProjects from "../components/FavoriteProjects";
import LatestCode from "../components/LatestCode";
import Hero from "../components/Hero";
import getLatestRepos from "@lib/getLatestRepos";
import userData from "@constants/data";

export default function Home({ repositories }) {
  return (
    <ContainerBlock
      title="Eric Bello - Developer, Engineer, Programmer, and Adventurer"
      description="Portfolio built using Next.js and TailwindCSS."
    >
      <Hero />
      <FavoriteProjects />
      <LatestCode />
      {/* // repositories={repositories} /> */}
    </ContainerBlock>
  );
}

// export const getServerSideProps = async () => {
//   // console.log(process.env.GITHUB_AUTH_TOKEN);
//   let token = process.env.GITHUB_AUTH_TOKEN;

//   const repositories = await getLatestRepos(userData, token);
//   // console.log("REPOSITORIES", repositories);

//   return {
//     props: {
//       repositories,
//     },
//   };
// };
