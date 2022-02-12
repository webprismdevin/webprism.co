import { GetStaticProps } from "next";
import {
  Box,
  Container,
  Heading,
  Link,
  Stack,
  AspectRatio,
  Flex,
  Text,
  Divider,
  SimpleGrid,
  GridItem,
  Image,
  Icon,
  useColorMode,
} from "@chakra-ui/react";
import BlockContent from "@sanity/block-content-to-react";
import { imageBuilder } from "@/lib/sanity";
import NextLink from "next/link";
import { BsChevronDoubleDown } from "react-icons/bs";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { isBrowser } from "react-device-detect";
import Head from "next/head";
import { format } from "path/posix";

const MotionBox = motion(Box);

export default function Project({ project, projectList }: any) {
  const { colorMode } = useColorMode();
  const { ref, inView } = useInView({
    threshold: 1,
  });
  const controls = useAnimation();

  const currentIndex = projectList?.findIndex((proj: any, index: number) => {
    if (proj.slug.current === project.slug.current) {
      return true;
    }
  });

  useEffect(() => {
    if (inView) controls.start("animate");
    else controls.start("rest");
  }, [inView]);

  return (
    <Box>
      <Head>
        <title>{project.title} | Portfolio | WEBPRISM </title>
        <meta name="description" content={`${project.metaDesc}`} />
      </Head>
      <Container maxW="container.xl" centerContent py={20}>
        <Stack spacing={8} textAlign={"center"}>
          <Heading
            as="h1"
            textTransform={"uppercase"}
            fontWeight={300}
            size="3xl"
          >
            {project.title}
          </Heading>
          <Link href={project.url} target="_blank">
            VIEW FULL SITE
          </Link>
        </Stack>
        {isBrowser && (
          <AspectRatio mt={8} ratio={16 / 9} w="full">
            <motion.iframe
              style={{ backgroundColor: "white" }}
              className="project_embed"
              src={project.url}
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: 1
              }}
              exit={{
                opacity: 0
              }}
            />
          </AspectRatio>
        )}
      </Container>
      <Container maxW={"container.md"}>
        <Stack spacing={8}>
          <Heading textAlign={"center"} textTransform={"uppercase"} size="xl">
            {project.subtitle}
          </Heading>
          <Flex h={4} gap={4} justifyContent={"center"} alignItems={"center"}>
            {project.tags.map((tag: string, index: number) => (
              <>
                <Text textTransform={"uppercase"} key={index}>{tag}</Text>
                {index < project.tags?.length - 1 && (
                  <Divider orientation="vertical" />
                )}
              </>
            ))}
          </Flex>
          <Text>
            <BlockContent blocks={project.body} />
          </Text>
          {project.testimonial && project.name && (
            <>
              <Divider />
              <Text fontStyle={"italic"}>
                &quot;{project.testimonial}&quot;
              </Text>
              <Text
                alignSelf={"flex-end"}
                fontStyle={"italic"}
                textTransform={"uppercase"}
              >
                {project.name}
              </Text>
            </>
          )}
        </Stack>
      </Container>
      {project.detailShots && project.detailShots?.length >= 4 && (
        <Container maxW="container.xl" py={40}>
          <SimpleGrid
            templateColumns={"repeat(4, 1fr)"}
            templateRows={"repeat(4, 1fr)"}
            columnGap={4}
            rowGap={4}
          >
            <GridItem shadow={"xl"} colSpan={[4, 1]} rowSpan={[4, 2]}>
              <AspectRatio ratio={1 / 1} minH="100%">
                <Image
                  src={imageBuilder(project.detailShots[0]).format('webp').url() as string}
                  objectFit="cover"
                  alt="project shot"
                />
              </AspectRatio>
            </GridItem>
            <GridItem shadow={"xl"} colSpan={[4, 1]} rowSpan={[4, 2]}>
              <AspectRatio ratio={1 / 1} minH="100%">
                <Image
                  src={imageBuilder(project.detailShots[1]).format('webp').url() as string}
                  objectFit="cover"
                  alt="project shot"
                />
              </AspectRatio>
            </GridItem>
            <GridItem shadow={"xl"} colSpan={[4, 2]} rowSpan={[4, 4]}>
              <AspectRatio ratio={1 / 1} minH="full">
                <Image
                  src={imageBuilder(project.detailShots[2]).format('webp').url() as string}
                  objectFit="cover"
                  alt="project shot"
                />
              </AspectRatio>
            </GridItem>
            <GridItem shadow={"xl"} colSpan={[4, 2]} rowSpan={[4, 2]}>
              <AspectRatio ratio={2 / 1} minH="100%">
                <Image
                  src={imageBuilder(project.detailShots[3]).format('webp').url() as string}
                  objectFit="cover"
                  alt="project shot"
                />
              </AspectRatio>
            </GridItem>
          </SimpleGrid>
        </Container>
      )}
      <Box
        pos="sticky"
        bottom={-1}
        left={0}
        w="full"
        py={8}
        px={8}
        bg={colorMode === "dark" ? "brand.dark" : "brand.light"}
        ref={ref}
      >
        <Flex w="full" justifyContent={"space-between"} alignItems={"center"}>
          <Box w="125px">
            {currentIndex > 0 && (
              <NextLink
                href={`/portfolio/${
                  projectList[currentIndex - 1].slug.current
                }`}
                passHref
              >
                <Link color={colorMode === "dark" ? "white" : "brand.dark"}>
                  PREVIOUS
                </Link>
              </NextLink>
            )}
          </Box>
          <MotionBox
            animate={controls}
            variants={{
              rest: {
                rotate: 0,
              },
              animate: {
                rotate: 180,
              },
            }}
          >
            <Icon
              as={BsChevronDoubleDown}
              h={6}
              w={8}
              color={colorMode === "dark" ? "white" : "brand.dark"}
            />
          </MotionBox>
          <Box w="125px" textAlign={"right"}>
            {currentIndex !== projectList?.length - 1 && (
              <NextLink
                href={`/portfolio/${
                  projectList[currentIndex + 1].slug.current
                }`}
                passHref
              >
                <Link color={colorMode === "dark" ? "white" : "brand.dark"}>
                  NEXT
                </Link>
              </NextLink>
            )}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const pageSlug = params?.slug;
  const query = encodeURIComponent(
    `*[ _type == "project" && slug.current == "${pageSlug}"]`
  );

  const url = `https://0ggffobx.api.sanity.io/v1/data/query/production?query=${query}`;
  const result = await fetch(url).then((res) => res.json());
  const data = result.result[0];

  const projectsQuery = encodeURIComponent(
    `*[ _type == "project"]{ slug } | order(_createdAt desc)`
  );
  const projectUrl = `https://0ggffobx.api.sanity.io/v1/data/query/production?query=${projectsQuery}`;
  const result2 = await fetch(projectUrl).then((res) => res.json());
  const data2 = result2.result;

  return {
    props: {
      project: data,
      projectList: data2,
    },
    revalidate: 60,
  };
};

export async function getStaticPaths() {
  const query = encodeURIComponent(`*[ _type == "project"] { slug }`);

  const url = `https://0ggffobx.api.sanity.io/v1/data/query/production?query=${query}`;
  const result = await fetch(url).then((res) => res.json());
  const projects = result.result;

  return {
    paths: projects.map((project: any) => ({
      params: {
        slug: project.slug.current,
      },
    })),
    fallback: false,
  };
}
