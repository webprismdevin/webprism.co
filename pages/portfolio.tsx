import { GetStaticProps } from "next";
import Head from "next/head";
import NextLink from "next/link";
import {
  Stack,
  Text,
  Icon,
  Heading,
  Tag,
  Link
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

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
  mainImage: any;
}

export interface PortfolioProps {
  projects: [];
}

export default function Portfolio({ page }: any) {
  return (
    <>
      <Head>
        <title>{page.basicSEO.title}</title>
        <meta name="description" content={page.basicSEO.description} />
      </Head>
      <Stack spacing={0} mt={10}>
        {page.projects.map((project: any, index: number) => (
          <Stack
            key={project._key}
            spacing={8}
            px={16}
            py={16}
            borderBottom={
              index !== page.projects.length - 1 ? "4px solid white" : "none"
            }
          >
            <Tag alignSelf="flex-start" size="md" textTransform={"capitalize"}>
              {project._type.replace(/([a-z])([A-Z])/g, "$1 $2")}
            </Tag>
            <NextLink href={`projects/${project.slug}`}>
              <Link>
                <Heading>{project.title}</Heading>
              </Link>
            </NextLink>
            <Stack w="full" direction="row" justify="space-between" align="center" spacing={8}>
              <Text>{project.portfolioDescription}</Text>
              <NextLink href={`/${project._type === "project" ? "project" : "case-study"}/${project.slug.current}`}>
                <Icon cursor={"pointer"} as={FaArrowRight} />
              </NextLink>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = encodeURIComponent(
    `*[ _type == "portfolio" ][0]{..., projects[]->}`
  );

  const url = `https://0ggffobx.api.sanity.io/v1/data/query/production?query=${query}`;
  const result = await fetch(url).then((res) => res.json());
  const pageData = result.result;

  return {
    props: {
      page: pageData,
    },
    revalidate: 60,
  };
};
