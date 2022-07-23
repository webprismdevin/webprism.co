import {
  Box,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

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
