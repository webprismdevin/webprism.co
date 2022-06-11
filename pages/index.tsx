import {
  Box,
  Container,
  Stack,
  Flex,
  Heading,
  SimpleGrid,
  GridItem,
  Text,
  Button,
  useColorMode,
  Icon,
  Divider,
  chakra,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { Parallax } from "react-parallax";
import dynamic from "next/dynamic";
import { FAQ } from "@/components/FAQ";
import Head from "next/head";
import { FaArrowRight } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import Testimonials from "@/components/Testimonials";
import { useRouter } from "next/router";
import Spline from "@splinetool/react-spline";
import MultiText from "@/lib/MultiText";
import { imageBuilder } from "@/lib/sanity";

const ProjectFeature = dynamic<any>(
  () =>
    import("https://framer.com/m/Project-Feature-IfqO.js@VolPPMLAyBOXo9qpa56v"),
  {
    ssr: false,
  }
);

const BeforeAfter = dynamic<any>(
  () =>
    import("https://framer.com/m/Before-After-PYZr.js@F7CRyMr6h8qe6MbcdJmw"),
  {
    ssr: false,
  }
);

const BeforeAfterChakra = chakra(BeforeAfter)

export default function Home({
  blogPosts,
  homepage,
}: {
  blogPosts: [];
  homepage: any;
}) {
  const router = useRouter();
  const { colorMode } = useColorMode();

  return (
    <>
      <Head>
        <title>Crafted Websites for Authentic Brands | WEBPRISM</title>
        <meta
          name="description"
          content="WEBPRISM is a digital creative agency that specializes in website design and e-commerce solutions. Our team of experts will work with you to create a website that showcases your personality and unlocks your digital marketing potential."
        />
      </Head>
      <Container maxW="container.xl" py={40}>
        <Stack spacing={8} alignItems={"flex-start"} pos="relative" zIndex={1}>
          <Heading
            textTransform={"uppercase"}
            fontWeight={300}
            as="h1"
            size="3xl"
          >
            {homepage.hero.title}
          </Heading>
          <Heading as="h2" size="md">
            {homepage.hero.subtitle}
          </Heading>
          <NextLink href="/contact" passHref>
            <Button rightIcon={<Icon as={FaArrowRight} />}>
              {homepage.hero.cta}
            </Button>
          </NextLink>
        </Stack>
      </Container>
      <Container maxW="container.xl">
        <SimpleGrid templateColumns={"repeat(3, 1fr)"}>
          {homepage.caseStudies.map((feature: any) => (
            <GridItem colSpan={[3, 1]} key={feature._key}>
              <ProjectFeature
                supertext={feature.supertext}
                title={feature.title}
                titleColor={colorMode === "dark" ? "#F7F4EE" : "#161718"}
                tap={() =>
                  router.push(`/portfolio/${feature.project.slug.current}`)
                }
                style={{ maxWidth: "600px", width: "100%", cursor: "default" }}
              />
            </GridItem>
          ))}
        </SimpleGrid>
      </Container>
      <Container maxW="container.xl" py={40}>
        <Stack direction={["column", "row"]} align="center" spacing={[12]}>
          <Stack spacing={[6]}>
            <Heading size="3xl" maxW="400px">
              Digital Experiences
            </Heading>
            <Text fontSize="2xl">{homepage.experiencesText}</Text>
            <Button alignSelf="flex-start">More on experiences →</Button>
          </Stack>
          <Divider orientation={"vertical"} height={[0,400]} />
          <Stack spacing={6}>
            <Heading size="3xl" maxW="400px">
              Unified Marketing
            </Heading>
            <Text fontSize="2xl">{homepage.marketingText}</Text>
            <Button alignSelf="flex-start">More on marketing →</Button>
          </Stack>
        </Stack>
      </Container>
      <Container maxW="container.xl" py={20}>
        <Stack direction={["column", "row"]} spacing={10}>
          <BeforeAfterChakra
            style={{
              flexGrow: 0,
              flexShrink: 0,
            }}
            minWidth={[320, 544]}
            maxWidth={[360, "auto"]}
            minHeight={[241, 368]}
            maxHeight={[250, 368]}
            fontColor={colorMode === "dark" ? "#F7F4EE" : "#161718"}
            beforeImage={imageBuilder(homepage.caseStudy.beforeImage).url()}
            afterImage={imageBuilder(homepage.caseStudy.afterImage).url()}
          />
          <Stack maxW={640}>
            <Text className="supertext">CASE STUDY</Text>
            <Heading size="3xl" fontWeight={700}>
              {homepage.caseStudy.title}
            </Heading>
            <MultiText text={homepage.caseStudy.description} mapKey="csdesc" />
            <Button alignSelf={"flex-start"}>Read the case study →</Button>
          </Stack>
        </Stack>
      </Container>
      <Container maxW="container.xl" py={20}>
        <SimpleGrid templateColumns={"repeat(2, 1fr)"} gap={10}>
          {homepage.faqs.map((faq: any) => (
            <GridItem
              bg={colorMode === "dark" ? "brand.dark" : "white"}
              shadow="md"
              borderRadius={6}
              p={8}
              colSpan={[2, 1]}
              key={faq._key}
            >
              <Stack spacing={4}>
                <Text fontWeight={600} fontSize="2xl">
                  {faq.question}
                </Text>
                <MultiText text={faq.answer} mapKey={"faq_answer"} />
              </Stack>
            </GridItem>
          ))}
        </SimpleGrid>
      </Container>
      <Container maxW="container.lg" centerContent py={20}>
        <Stack spacing={6} align="center">
          <Heading textAlign={"center"} size="3xl">{homepage.getStarted.title}</Heading>
          <NextLink href={homepage.getStarted.button.link} passHref>
            <Button>{homepage.getStarted.button.text}</Button>
          </NextLink>
        </Stack>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const query = encodeURIComponent(
    `{
      'homepage': *[_type == "homepage"][0]{..., caseStudies[]{ ..., project-> }},
      'posts': *[ _type == "post" ] | order (_createdAt desc) [0..2]
    }`
  );

  const url = `https://0ggffobx.api.sanity.io/v1/data/query/production?query=${query}`;
  const data = await fetch(url).then((res) => res.json());

  return {
    props: {
      blogPosts: data.result.posts,
      homepage: data.result.homepage,
    },
  };
}
