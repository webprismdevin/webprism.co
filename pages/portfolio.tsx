import { GetStaticProps } from "next";
import Head from "next/head";
import NextLink from "next/link";
import Image from "next/image";
import BlockContent from "@sanity/block-content-to-react";
import markdownStyles from "@/styles/portfolio-markdown-styles.module.scss";
import {
  Container,
  Heading,
  Flex,
  Box,
  AspectRatio,
  Stack,
  Link,
} from "@chakra-ui/react";

export interface ProjectProps {
  _id: string;
  title: string;
  body: any;
  tags: [];
  url: string;
  slug: {
    current: string;
    id: string;
  };
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
        {projects.map((p: ProjectProps) => (
          <NextLink href={`/projects/${p.slug.current}`} key={p._id} passHref>
            <Link>{p.title}</Link>
          </NextLink>
        ))}
      </Container>
    </>
  );
};

export default Portfolio;

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = encodeURIComponent(`*[ _type == "project" ] {
        _id, mainImage, tags, title, body, url, slug
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
