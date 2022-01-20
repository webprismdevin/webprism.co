import { motion, useAnimation } from "framer-motion";
import {
  Heading,
  Container,
  Box,
  Text,
  Button,
  Icon,
  useColorMode,
  Image,
} from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { isBrowser } from "react-device-detect";
import NextLink from 'next/link'

const MotionHeading = motion<any>(Heading);
const MotionContainer = motion<any>(Container);
const MotionText = motion<any>(Text);
const MotionButton = motion<any>(Button);
const MotionImage = motion<any>(Image);

export default function LetterGather() {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: isBrowser ? 1 : 0.7,
  });
  const { colorMode } = useColorMode();

  useEffect(() => {
    if (inView) controls.start("hover");
    if (!inView) controls.start("rest");
  }, [inView]);

  const WMotion = {
    rest: {
      x: 200,
      y: 0,
    },
    hover: {
      x: 0,
      y: 0
    },
  };

  const hoverMotion = {
    x: 0,
    y: 0,
  };

  const opacityMotion = {
    rest: {
      opacity: 0,
    },
    hover: {
      opacity: 1,
      transition: { delay: 0.3}
    },
  };

  const transition = { 
    type: 'tween',
    duration: 0.3
  }

  return (
    <MotionContainer
      maxW="container.xl"
      initial="rest"
      animate={controls}
      py={40}
      ref={ref}
      pos={"relative"}
    >
      <MotionHeading size="lg" variants={opacityMotion}>
        we&apos;re
      </MotionHeading>
      <Box w="full" mt={8}>
        <MotionHeading
          size="3xl"
          transition={transition}
          display={"inline-block"}
          variants={{
            rest: isBrowser
              ? {
                  x: 500,
                  y: -280,
                }
              : {
                  x: 80,
                  y: -180,
                },
            hover: hoverMotion,
          }}
        >
          W
        </MotionHeading>
        <MotionHeading
          size="3xl"
          transition={transition}
          display={"inline-block"}
          marginLeft={['0em','0.5em']}
          variants={{
            rest: isBrowser
              ? {
                  x: 200,
                  y: 0,
                }
              : {
                  x: 200,
                  y: -123,
                },
            hover: hoverMotion,
          }}
        >
          E
        </MotionHeading>
        <MotionHeading
          size="3xl"
          transition={transition}
          display={"inline-block"}
          marginLeft={['0em','0.5em']}
          variants={{
            rest: isBrowser
              ? {
                  x: 300,
                  y: -80,
                }
              : {
                  x: 100,
                  y: -80,
                },
            hover: hoverMotion,
          }}
        >
          B
        </MotionHeading>
        <MotionHeading
          size="3xl"
          transition={transition}
          display={"inline-block"}
          marginLeft={['0em','0.5em']}
          variants={{
            rest: isBrowser
              ? {
                  x: 400,
                  y: 123,
                }
              : {
                  x: -46,
                  y: 123,
                },
            hover: hoverMotion,
          }}
        >
          P
        </MotionHeading>
        <MotionHeading
          size="3xl"
          transition={transition}
          display={"inline-block"}
          marginLeft={['0em','0.5em']}
          variants={{
            rest: isBrowser
              ? {
                  x: 456,
                  y: 65,
                }
              : {
                  x: 120,
                  y: 65,
                },
            hover: hoverMotion,
          }}
        >
          R
        </MotionHeading>
        <MotionHeading
          size="3xl"
          transition={transition}
          display={"inline-block"}
          marginLeft={['0em','0.5em']}
          variants={{
            rest: isBrowser
              ? {
                  x: 690,
                  y: -100,
                }
              : {
                  x: 0,
                  y: 100,
                },
            hover: hoverMotion,
          }}
        >
          I
        </MotionHeading>
        <MotionHeading
          size="3xl"
          transition={transition}
          display={"inline-block"}
          marginLeft={['0em','0.5em']}
          variants={{
            rest: isBrowser
              ? {
                  x: 600,
                  y: 120,
                }
              : {
                  x: 0,
                  y: 160,
                },
            hover: hoverMotion,
          }}
        >
          S
        </MotionHeading>
        <MotionHeading
          size="3xl"
          transition={transition}
          display={"inline-block"}
          marginLeft={['0em','0.5em']}
          variants={{
            rest: {
              x: -80,
              y: -240,
            },
            hover: hoverMotion,
          }}
        >
          M
        </MotionHeading>
      </Box>
      <MotionText mt={8} w={["full", "60%"]} variants={opacityMotion}>
        We build websites that unlock online marketing for our customers.
        We&apos;ll also help our customers support and market their website
        after launch with SEO, a content strategy, and social advertising.
        We&apos;ve worked with small teams, and multi-million dollar firms, becoming their marketing partner
        and digital advisor.
      </MotionText>
      <NextLink
        href="/about"
        passHref
      >
        <MotionButton
          mt={8}
          variants={opacityMotion}
          rightIcon={<Icon as={FaArrowRight} />}
        >
          About Us
        </MotionButton>
      </NextLink>
      <MotionImage
        variants={{
          rest: {
            opacity: 0,
            scale: 0
          },
          hover: {
            opacity: 1,
            scale: 1,
            transition: { delay: 0.5 }
          }
        }}
        pos="absolute"
        right={[2, 0]}
        top={[0, 200]}
        src={
          colorMode === "dark"
            ? "/logos/webprism_diamond_white.svg"
            : "/logos/webprism_diamond.svg"
        }
        h={48}
        w={48}
        alt="WEBPRISM diamond"
      />
    </MotionContainer>
  );
}
