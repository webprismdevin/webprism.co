import MultiText from "@/lib/MultiText";
import { imageBuilder, sanity } from "@/lib/sanity";
import {
  Box,
  BoxProps,
  Button,
  Container,
  Heading,
  HStack,
  IconButton,
  Stack,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import dynamic from "next/dynamic";
import NextImage from "next/image";
import { Suspense, useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import CaseStudies from "@/components/Home/CaseStudies";

const CostModal = dynamic(() => import("@/components/Home/CostModal"), {
  suspense: true,
});

const InfiniteScroll = dynamic(
  () => import("@/components/Home/InfiniteScroll"),
  {
    suspense: true,
  }
);

const MotionBox = motion(Box);

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;

const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export default function Index({ page }: any) {
  const [[item, direction], setPage] = useState([0, 0]);

  const caseStudyIndex = wrap(0, page.caseStudies.length, item);

  const paginate = (newDirection: number) => {
    setPage([item + newDirection, newDirection]);
  };

  return (
    <Box>
      <Head>
        <title>{page.pageTitle}</title>
        <meta name="description" content={page.pageDescription} />
      </Head>
      <Box pos="relative" overflow={"hidden"} h={"100vh"} mt={-16}>
        <Container py={40} pos={"relative"} zIndex={1} maxW={"container.lg"}>
          <Stack>
            <Heading
              maxW={800}
              color="white"
              size="3xl"
              textShadow={"2px 2px 8px rgba(0,0,0, 0.25)"}
            >
              {page.hero.title}
            </Heading>
            <Text
              maxW={540}
              fontSize="3xl"
              color="white"
              textShadow={"2px 2px 8px rgba(0,0,0, 0.25)"}
            >
              Grow with a partner who knows your business like it&apos;s their
              own.
            </Text>
            <Button alignSelf="flex-start" bgColor="brand.brightPink">
              Schedule A Strategy Session
            </Button>
          </Stack>
        </Container>
        <Box
          pos="absolute"
          top={0}
          left={0}
          zIndex={0}
          w={"100%"}
          h={"100%"}
          bgColor={"blackAlpha.600"}
        />
        <video
          autoPlay
          muted
          loop
          style={{
            width: "100%",
            height: "auto",
            position: "absolute",
            top: -80,
            left: 0,
            zIndex: -1,
          }}
        >
          <source src={"/video/webprism-opening-video.mp4"} type="video/mp4" />
        </video>
      </Box>
      {/* <Container py={20} maxW="container.xl">
        <Stack direction={["column-reverse", "row"]}>
          <Stack spacing={6} align="flex-start">
            <Heading size="3xl" lineHeight={1.3}>
              {page.hero.title}
            </Heading>
            <Text fontSize="xl">{page.hero.subtitle}</Text>
            <NextLink href={"/booknow"}>
              <Button size="lg">{page.hero.cta}</Button>
            </NextLink>
          </Stack>
          <Box maxW={["full", "50%"]}>
            <NextImage src={imageBuilder(page.hero.image).height(531).width(830).url()} width={830} height={531} />
          </Box>
        </Stack>
      </Container> */}
      <Box pos="relative" overflow={"hidden"} h={"100vh"} mt={-16}>
        <Container py={40} pos={"relative"} zIndex={1} maxW={"container.lg"}>
          <Stack>
            <Heading
              maxW={800}
              color="white"
              size="3xl"
              textShadow={"2px 2px 8px rgba(0,0,0, 0.25)"}
            >
              Expand Your Ecommerce Business Marketing
            </Heading>
            <Text
              maxW={540}
              fontSize="3xl"
              color="white"
              textShadow={"2px 2px 8px rgba(0,0,0, 0.25)"}
            >
              Grow with a partner who knows your business like it&apos;s their
              own.
            </Text>
            <Button alignSelf="flex-start" bgColor="brand.brightPink">
              Schedule A Strategy Session
            </Button>
          </Stack>
        </Container>
        <Box
          pos="absolute"
          top={0}
          left={0}
          zIndex={0}
          w={"100%"}
          h={"100%"}
          bgColor={"blackAlpha.600"}
        />
        <video
          autoPlay
          muted
          loop
          style={{
            width: "100%",
            height: "auto",
            position: "absolute",
            top: -80,
            left: 0,
            zIndex: -1,
          }}
        >
          <source src={"/video/webprism-opening-video.mp4"} type="video/mp4" />
        </video>
      </Box>
      <Container py={[0]}>
        <Box bgColor={"white"} shadow="lg" borderRadius={6} p={6}>
          <Stack>
            <Text textTransform={"uppercase"}>{page.testimonial.client}</Text>
            <MultiText text={page.testimonial.text} mapKey={"index_test_1"} />
            <Text fontStyle={"italic"}>- {page.testimonial.name}</Text>
          </Stack>
        </Box>
      </Container>
      <Container py={[20]}>
        <Stack spacing={4}>
          <Heading>{page.belowTheFold.title}</Heading>
          <Text>{page.belowTheFold.text}</Text>
          <Suspense fallback={`Loading...`}>
            <CostModal buttonText={page.belowTheFold.cta} />
          </Suspense>
        </Stack>
      </Container>
      <Container>
        <Stack>
          <Text textTransform={"uppercase"}>{page.about.superText}</Text>
          <Heading>{page.about.title}</Heading>
          <MultiText text={page.about.text} mapKey={"index_about"} />
        </Stack>
      </Container>
      <Box py={10} bgColor={"brand.dark"} color={"brand.light"} my={20}>
        <Suspense fallback={`Loading...`}>
          <InfiniteScroll data={page.about} />
        </Suspense>
      </Box>
      <Container>
        <Suspense fallback={`Loading...`}>
          <CaseStudies data={page.caseStudies} />
        </Suspense>
      </Container>
      <Container py={20} maxW="container.xl">
        <Heading mb={6} fontStyle={"italic"}>
          from our clients...
        </Heading>
        <Stack spacing={6} direction={["column", "row"]}>
          {page.testimonials.map((t: any) => (
            <Stack shadow="lg" key={t._key} p={4} borderRadius={6} bg="white">
              <Text fontSize="2xl">{t.client}</Text>
              <MultiText text={t.text} mapKey={t._key + "text"} />
              <Text fontStyle="italic">- {t.name}</Text>
            </Stack>
          ))}
        </Stack>
      </Container>
      <Container pb={20}>
        <Stack spacing={6}>
          <Heading>{page.getStarted.title}</Heading>
          <NextLink href={page.getStarted.button.link}>
            <Button size="lg">{page.getStarted.button.text}</Button>
          </NextLink>
        </Stack>
      </Container>
    </Box>
  );
}

export const getStaticProps = async () => {
  const query = `*[_type == "homepage" ][0]`;

  const result = await sanity.fetch(query);

  return {
    props: {
      page: result,
      revalidate: 10,
    },
  };
};
