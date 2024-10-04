import React from "react";
import ContainerBlock from "../components/ContainerBlock";
import Articles from "../components/Articles";

export default function blog() {
  return (
    <ContainerBlock
      title="Blog | Eric Bello | Professional Web Development Services"
      description="Stay updated with the latest web development trends, tips, and best practices. Explore articles to learn more about creating and optimizing your online presence."
    >
      <Articles />
    </ContainerBlock>
  );
}
