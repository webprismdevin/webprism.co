import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Content from "../components/content";
import BlockContent from "@sanity/block-content-to-react";
import markdownStyles from "@/styles/portfolio-markdown-styles.module.scss";
import Footer from "@/components/footer";
import styles from "@/styles/portfolio.module.scss";
import { Container, Heading, Flex, Box, AspectRatio, Stack } from "@chakra-ui/react";

export interface ProjectProps {
  _id: string;
  title: string;
  body: any;
  tags: [];
  url: string;
}

export interface PortfolioProps {
  projects: [];
}

const Portfolio = ({ projects }: PortfolioProps) => {
  return (
    <>
      <Head>
        <title>Portfolio | WEBPRISM | A web design + development agency</title>
        <meta
          name="description"
          content="Our portfolio showcases our recent work and favorite projects."
        />
      </Head>
      <Container py={20} centerContent maxW="container.xl">
        <Heading textAlign={"center"}>Portfolio</Heading>
            {projects.map((p: ProjectProps) => (
                <Box key={p._id} w="full" py={20} id={encodeURIComponent(p.title)}>
                    <AspectRatio ratio={1440/900}>
                        <iframe src={p.url} style={{backgroundColor: 'white'}}/>
                    </AspectRatio>
                </Box>
                  ))}
      </Container>
    </>
  );
};

export default Portfolio;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = encodeURIComponent(`*[ _type == "project" ] {
        _id, mainImage, tags, title, body, url
    }`);

  const url = `https://0ggffobx.api.sanity.io/v1/data/query/production?query=${query}`;
  const result = await fetch(url).then((res) => res.json());
  const allProjects = result.result;

  return {
    props: {
      projects: allProjects,
    },
    revalidate: 60,
  };
};
