import {
  Container,
  Stack,
  Heading,
  SimpleGrid,
  GridItem,
  Text,
  Button,
  useColorMode,
  chakra,
  Image,
  Box
} from "@chakra-ui/react";
import NextLink from "next/link";
import dynamic from "next/dynamic";
import Head from "next/head";
import { useRouter } from "next/router";
import MultiText from "@/lib/MultiText";
import { imageBuilder } from "@/lib/sanity";
import { wrap } from "@popmotion/popcorn";
import { useEffect, useRef, useState } from "react";


const ProjectFeature = dynamic<any>(
  () =>
    import("https://framer.com/m/Project-Feature-IfqO.js@z9Y8WFDj6iHSatuDXn4g"),
  {
    ssr: false,
  }
);

const BeforeAfter = dynamic<any>(
  () =>
    import("https://framer.com/m/Before-After-PYZr.js@27gr1C5Tw4ZWajkEScEk"),
  {
    ssr: false,
  }
);

const BeforeAfterChakra = chakra(BeforeAfter);

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
        <title>{homepage.seo.pageTitle}</title>
        <meta name="description" content={homepage.seo.metaDesc} />
      </Head>
      <Container maxW="container.xl">
        <Stack direction={["column", "row"]}>
          <Stack
            maxW={["full", "70%"]}
            spacing={8}
            alignItems={"flex-start"}
            pos="relative"
            zIndex={1}
            pt={60}
            pb={40}
          >
            <Heading
              textTransform={"uppercase"}
              fontWeight={300}
              as="h1"
              size="3xl"
            >
              {homepage.hero.title}
            </Heading>
            <Heading maxW={["full", "680px"]} size="md">
              {homepage.hero.subtitle}
            </Heading>
            <NextLink href="/booknow" passHref>
              <Button>{homepage.hero.cta}</Button>
            </NextLink>
          </Stack>
        </Stack>
      </Container>
      <Box bg={colorMode === "dark" ? "white" : "brand.dark"} color={colorMode === "dark" ? "brand.dark" : "brand.light"}>
        <Container maxW="container.lg" py={20}>
          <Stack w="full" textAlign={"center"} spacing={6}>
            <Heading>Being part of a small team is awesome.</Heading>
            <Text fontSize="lg">It can also be hard. Managing all of your marketing while running your business and taking care of your clients can become too much. The bottom line is you&apos;re on a mission, creating an impact, and all of these things need to get done.</Text>
            <Text fontSize="lg">At WEBPRISM, we love working with people like you. We partner with small teams to help them scale up their marketing efforts and deliver on their goals like never before.</Text>
          </Stack>
        </Container>
      </Box>
      {homepage.sections.map((section: any, index: number) => (
        <Container key={section._key} maxW="container.xl" py={20}>
          <Stack direction={["column", index % 2 === 0 ? "row": "row-reverse"]} align="center" spacing={[12]}>
            {section.image && <Image maxW={["full", "50%"]} src={imageBuilder(colorMode === "dark" && section.imageDark ? section.imageDark : section.image).url()} alt={section.title} />}
            <Stack spacing={[6]} maxW={["full", "50%"]}>
              <Heading size="3xl">
                {section.title}
              </Heading>
              <Text fontSize="xl">{section.text}</Text>
              {/* <NextLink href={section.cta.link} passHref><Button alignSelf="flex-start">{section.cta.text}</Button></NextLink> */}
            </Stack>
          </Stack>
        </Container>
      ))}
      <Container maxW="container.xl" py={20}>
        <Stack direction={["column", "row"]} spacing={20}>
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
            <MultiText fontSize="lg" text={homepage.caseStudy.description} mapKey="csdesc" />
            <Button variant={"outline"} alignSelf={"flex-start"}>Read the case study →</Button>
          </Stack>
        </Stack>
      </Container>
      <Container maxW="container.xl" py={20}>
        <Heading mb={6} textTransform={"uppercase"}>More of our work</Heading>
        <SimpleGrid templateColumns={"repeat(3, 1fr)"} gap={12}>
          {homepage.caseStudies.map((feature: any, index: number) => (
            <GridItem colSpan={[3, 1]} key={feature._key}>
              <ProjectFeature
                key={`feat_${feature._key}`}
                supertext={feature.supertext}
                title={feature.title}
                image={feature.image ? imageBuilder(feature.image).url() : null}
                titleColor={colorMode === "dark" ? "#F7F4EE" : "#161718"}
                tap={() =>
                  router.push(`/portfolio/${feature.project.slug.current}`)
                }
                fontSize={22}
                style={{ maxWidth: "600px", width: "100%", cursor: "default" }}
              />
            </GridItem>
          ))}
        </SimpleGrid>
      </Container>
      <Container maxW="container.xl" py={20}>
        {/* should we mix-blend these? */}
        <SimpleGrid templateColumns={"repeat(2, 1fr)"} gap={10}>
          {homepage.faqs.map((faq: any) => (
            <GridItem
              bg={colorMode === "dark" ? "gray.700" : "white"}
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
                <MultiText fontSize="lg" text={faq.answer} mapKey={"faq_answer"} />
              </Stack>
            </GridItem>
          ))}
        </SimpleGrid>
      </Container>
      <Container maxW="container.lg" centerContent py={20}>
        <Stack spacing={6} align="center">
          <Heading lineHeight={1.2} textAlign={"center"} size="3xl">
            {homepage.getStarted.title}
          </Heading>
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
      'homepage': *[_type == "homepage"][0]{..., sections[]->, caseStudies[]{ ..., project->} },
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
