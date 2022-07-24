import { Box, Text, BoxProps } from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { wrap } from "@popmotion/popcorn";

const MotionBox = motion<BoxProps>(Box);

export default function Banner({ data }: any) {
  const [[page, direction], setPage] = useState([0, 0]);
  const index = wrap(0, data?.banner?.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  useEffect(() => {
    let interval:any;

    if (data?.banner?.length > 1) {
      interval = setInterval(() => {
        paginate(1);
      }, 2900);
    }

    return () => clearInterval(interval);
  }, [page]);

  if (!data?.banner) return null;

  return (
    <MotionBox py={2} bg="gray.400" color="white" pos="fixed" top={0} left={0} w="full">
      <AnimatePresence initial={true} custom={direction} exitBeforeEnter={true}>
        <MotionBox
          custom={direction}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: { duration: 0.2 },
          }}
          exit={{
            opacity: 0,
          }}
          key={page}
        >
          <Text textAlign={"center"}>{data?.banner[index].text}</Text>
        </MotionBox>
      </AnimatePresence>
    </MotionBox>
  );
}
