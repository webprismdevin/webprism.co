import { Box, Text, Heading, Container, Stack, HeadingProps, TextProps, ContainerProps, AspectRatio, Image, Divider } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Head from "next/head";

const MotionContainer = motion<ContainerProps>(Container);
const MotionHeading = motion<HeadingProps>(Heading);
const MotionText = motion<TextProps>(Text);

export default function About() {
  return (
    <Box>
      <Head>
        <title>
          About Us | WEBPRISM | Crafted Websites for Authentic Brands
        </title>
      </Head>
      <MotionContainer
        py={60}
        maxW="container.xl"
        initial={{
          y: -800,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        centerContent
      >
        <MotionHeading size="">WE&apos;RE WEBPRISM</MotionHeading>
        <MotionHeading 
            size="3xl" 
            // letterSpacing={["0.1em","0.5em"]}
            mt={4}
        >
          Freedom. Family. Creativity.
        </MotionHeading>
        <MotionText
            mt={4}
            maxW={600}
            textAlign="center"
        >
          We started as a family business (still are). We&apos;re freedom for our customers, ourselves, while embracing creativity.
        </MotionText>
      </MotionContainer>
      <Container maxW="container.lg" py={20}>
        <Stack direction={["column-reverse",'row']} spacing={8}>
          <Stack>
            <Heading>Origin Story</Heading>
            <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque dolorem ipsum optio voluptate harum deserunt id delectus vero temporibus hic eum quaerat placeat eligendi quas, animi accusantium quis illum cumque.</Text>
          </Stack>
          <AspectRatio ratio={4/3} w={500} flexShrink={0}>
            <Image src={"/photos/forest.jpeg"} alt="Devin and his son, in the woods, sitting on a large tree stump" />
          </AspectRatio>
        </Stack>
      </Container>
      <Container maxW="container.lg" py={20} centerContent>
        <Stack spacing={4}>
          <Heading>The Team</Heading>
          <Divider maxW="200px" />
        </Stack>
      </Container>
    </Box>
  );
}
