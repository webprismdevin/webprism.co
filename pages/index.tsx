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
import { AnimatePresence, motion } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";

const CostModal = dynamic(() => import("@/components/Home/CostModal"), {
  suspense: true,
});

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
      <Container py={20} maxW="container.xl">
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
          {/* <Box maxW={["full", "50%"]}>
            <NextImage src={imageBuilder(page.hero.image).height(531).width(830).url()} width={830} height={531} />
          </Box> */}
        </Stack>
      </Container>
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
        <Box maxW="full" overflow={"hidden"} position={"relative"} h={"36px"}>
          <MotionBox
            position={"absolute"}
            whiteSpace="nowrap"
            animate={{
              x: [0, -904],
              transition: {
                x: {
                  repeat: Infinity,
                  repeatType: "loop",
                  duration: 16,
                  ease: "linear",
                },
              },
            }}
          >
            {page.about.features.map((feature: string) => (
              <span style={{ fontSize: 24 }} key={feature}>
                {feature} |{" "}
              </span>
            ))}
            {page.about.features.map((feature: string) => (
              <span style={{ fontSize: 24 }} key={feature}>
                {feature} |{" "}
              </span>
            ))}
            {page.about.features.map((feature: string) => (
              <span style={{ fontSize: 24 }} key={feature}>
                {feature} |{" "}
              </span>
            ))}
            {page.about.features.map((feature: string) => (
              <span style={{ fontSize: 24 }} key={feature}>
                {feature} |{" "}
              </span>
            ))}
          </MotionBox>
        </Box>
      </Box>
      <Container>
        <Box overflow={"hidden"}>
          <AnimatePresence initial={false} custom={direction} exitBeforeEnter>
            <MotionBox
              key={item}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e: any, { offset, velocity }: any) => {
                const swipe = swipePower(offset.x, velocity.x);

                if (swipe < -swipeConfidenceThreshold) {
                  paginate(1);
                } else if (swipe > swipeConfidenceThreshold) {
                  paginate(-1);
                }
              }}
            >
              <Stack spacing={3}>
                <NextImage
                  src={imageBuilder(page.caseStudies[caseStudyIndex].image)
                    .height(600)
                    .width(600)
                    .url()}
                  width={600}
                  height={600}
                  layout="responsive"
                  style={{
                    pointerEvents: "none",
                  }}
                />
                <Heading>{page.caseStudies[caseStudyIndex].title}</Heading>
                <MultiText
                  text={page.caseStudies[caseStudyIndex].description}
                  mapKey={"case_study_desc"}
                />
              </Stack>
            </MotionBox>
          </AnimatePresence>
          <Stack direction="row" align="center" justify="space-between" py={5}>
            <IconButton
              onClick={() => paginate(-1)}
              variant="ghost"
              boxSize={6}
              as={HiChevronDoubleLeft}
              aria-label="Last case study"
            />
            <Text opacity={0.4} display={["inherit", "none"]}>swipe</Text>
            <IconButton
              onClick={() => paginate(1)}
              variant="ghost"
              boxSize={6}
              as={HiChevronDoubleRight}
              aria-label="Next case study"
            />
          </Stack>
        </Box>
      </Container>
      <Container py={20} maxW="container.xl">
        <Heading mb={6} fontStyle={"italic"}>from our clients...</Heading>
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
