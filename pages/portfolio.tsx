import { GetStaticProps } from "next";
import Head from "next/head";
import NextLink from "next/link";
import {
  AspectRatio,
  Container,
  Image,
  Stack,
  Box,
  Text,
  Flex,
  useColorMode,
  Icon,
  Heading,
  Divider
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { imageBuilder } from "@/lib/sanity";
import { useState } from "react";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";
import { isMobile } from "react-device-detect";

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

const MotionBox = motion(Box);

const Portfolio = ({ projects }: PortfolioProps) => {
  const { colorMode } = useColorMode();
  const [index, setIndex] = useState(0);

  function handleNext() {
    setIndex(index + 3);
    if(isMobile) window.scrollTo(0, 0)
  }

  function handlePrev() {
    setIndex(index - 3);
    if(isMobile) window.scrollTo(0, 0)
  }

  return (
    <>
      <Head>
        <title>
          Portfolio | WEBPRISM | Crafted Websites for Authentic Brands
        </title>
        <meta
          name="description"
          content="Our portfolio showcases our recent work and favorite projects."
        />
      </Head>
      <Container pt={24} centerContent maxW="container.xl">
        <Heading
          as="h1"
          mb={12}
          size="3xl"
          textTransform={"uppercase"}
          fontWeight={300}
        >
          Portfolio
        </Heading>
        <Stack
          direction={["column", "row"]}
          w="full"
        >
          {projects[index + 0] && (
            <Item key={projects[index + 0]} project={projects[index + 0]} order={0} />
          )}
          {projects[index + 1] && (
            <Item key={projects[index + 0]} project={projects[index + 1]} order={1} />
          )}
          {projects[index + 2] && (
            <Item key={projects[index + 0]} project={projects[index + 2]} order={2} />
          )}
        </Stack>
        <Flex w="full" justifyContent={"center"} mt={8}>
          {index !== 0 && (
            <Icon
              onClick={handlePrev}
              as={BsChevronDoubleLeft}
              h={6}
              w={8}
              color={colorMode === "dark" ? "white" : "brand.dark"}
            />
          )}
          {index + 3 < projects.length - 1 && (
            <Icon
              onClick={handleNext}
              as={BsChevronDoubleRight}
              h={6}
              w={8}
              color={colorMode === "dark" ? "white" : "brand.dark"}
            />
          )}
        </Flex>
      </Container>
    </>
  );
};

export default Portfolio;

function Item({
  project,
  order,
}: {
  project: { tags: [], slug: { current: string }; mainImage: any; title: string };
  order: number;
}) {
  return (
    <AnimatePresence exitBeforeEnter={true}>
      <NextLink href={`/portfolio/${project.slug.current}`}>
          <MotionBox
            cursor={"pointer"}
            minW="33%"
            pos="relative"
            key={project.slug.current}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              delay: 0.1 * order,
              type: "tween",
            }}
            whileHover={{
              scale: 1.02,
              transition: { 
                duration: 0.2
              }
            }}
          >
            <AspectRatio minW="100%" minH={[600, 600]}>
              <Image
                src={imageBuilder(project.mainImage).url() as string}
                alt={project.title}
              />
            </AspectRatio>
            <Flex mt={6} h={4} gap={4} justifyContent={"flex-start"} alignItems={"center"}>
            {project.tags.map((tag: string, index: number) => (
              <>
                <Text fontWeight={600} fontSize={12} textTransform={"uppercase"} key={index}>{tag}</Text>
                {index < project.tags?.length - 1 && (
                  <Divider orientation="vertical" />
                )}
              </>
            ))}
          </Flex>
            <Text fontSize={20} textTransform={"uppercase"} fontWeight={600} mt={2}>{project.title}</Text>
          </MotionBox>
      </NextLink>
    </AnimatePresence>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = encodeURIComponent(`*[ _type == "project" ] {
        _id, mainImage, tags, title, body, url, slug
    } | order(title desc)`);

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
