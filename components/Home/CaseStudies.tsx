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

export default function CaseStudies({ data }: any) {
  const [[item, direction], setPage] = useState([0, 0]);

  const caseStudyIndex = wrap(0, data.length, item);

  const paginate = (newDirection: number) => {
    setPage([item + newDirection, newDirection]);
  };

  return (
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
              src={imageBuilder(data[caseStudyIndex].image)
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
            <Heading>{data[caseStudyIndex].title}</Heading>
            <MultiText
              text={data[caseStudyIndex].description}
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
        <Text opacity={0.4} display={["inherit", "none"]}>
          swipe
        </Text>
        <IconButton
          onClick={() => paginate(1)}
          variant="ghost"
          boxSize={6}
          as={HiChevronDoubleRight}
          aria-label="Next case study"
        />
      </Stack>
    </Box>
  );
}
