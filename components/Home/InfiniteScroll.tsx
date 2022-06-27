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

const MotionBox = motion(Box);

export default function InfiniteScroll({ data }: any) {
  return (
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
        {data.features.map((feature: string) => (
          <span style={{ fontSize: 24 }} key={feature}>
            {feature} |{" "}
          </span>
        ))}
        {data.features.map((feature: string) => (
          <span style={{ fontSize: 24 }} key={feature}>
            {feature} |{" "}
          </span>
        ))}
        {data.features.map((feature: string) => (
          <span style={{ fontSize: 24 }} key={feature}>
            {feature} |{" "}
          </span>
        ))}
        {data.features.map((feature: string) => (
          <span style={{ fontSize: 24 }} key={feature}>
            {feature} |{" "}
          </span>
        ))}
      </MotionBox>
    </Box>
  );
}
