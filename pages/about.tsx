import { Box, Text, Heading, Container, Stack } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Head from "next/head";

const MotionContainer = motion(Container);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

export default function About() {
  return (
    <Box>
      <Head>
        <title>
          About Us | WEBPRISM | Crafted Websites for Authentic Brands
        </title>
      </Head>
      <MotionContainer
        py={40}
        maxW="container.xl"
        initial={{
          y: -800,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
      >
        <MotionHeading>we&apos;re</MotionHeading>
        <MotionHeading 
            size="3xl" 
            letterSpacing={["0.1em","0.5em"]}
            mt={8}
        >
          WEBPRISM
        </MotionHeading>
        <MotionText
            mt={8}
        >
          Exploring the depths of our creativity, and crafting better
          experiences for our clients &amp; their customers.
        </MotionText>
      </MotionContainer>
      <Container>
        
      </Container>
    </Box>
  );
}
