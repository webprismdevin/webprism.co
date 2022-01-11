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
  screenshot: string;
  title: string;
  mainImage: {
    width: number;
    height: number;
  };
  body: any;
  tags: [];
  url: string;
}

const ProjectComponent = ({
  screenshot,
  mainImage,
  title,
  body,
  tags,
  url,
}: ProjectProps) => {
  return (
    <section>
      <Content>
        <div
          className={`is-flex is-justify-content-space-between ${styles.mobile_container} ${styles.container_spacing}`}
        >
          <div className={styles.fullpage_screenshot}>
          </div>
          <div
            className={`${styles.spacing} ${styles.project_details} is-flex is-flex-direction-column is-justify-flex-start`}
            style={{ minWidth: 300, maxWidth: 300 }}
          >
            <p className="title is-2">{title}</p>
            <Link href={url} passHref>
              <a className="is-size-5 mb-3" target="_blank" rel="noreferrer">
                Live Site
              </a>
            </Link>
            <BlockContent blocks={body} className={markdownStyles.markdown} />
            <div className="tagOuter mt-auto">
              {tags &&
                tags.map((t, i) => (
                  <div
                    key={i}
                    className="tag has-text-black mr-2 mb-2 is-size-6"
                  >
                    {t}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </Content>
    </section>
  );
};

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
                <Box key={p._id} w="full" py={20}>
                    <AspectRatio ratio={1440/900}>
                        <iframe src={p.url}/>
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
        _id, mainImage, "screenshot": mainImage.asset->url, tags, title, body, url
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
