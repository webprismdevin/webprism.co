import {
  Box,
  Container,
  Stack,
  Flex,
  Heading,
  SimpleGrid,
  GridItem,
  Text,
  AspectRatio,
  Button,
  Divider,
  Image,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { Parallax } from "react-parallax";
import { useInView } from "react-intersection-observer";

export default function ReHome({ data }: { data: {} }) {

  return (
    <>
      <Parallax
        bgImage={"/photos/budding-plant.jpg"}
        strength={-200}
        bgImageAlt="budding plant"
      >
        <Container maxW="container.xl" color="white">
          <Stack spacing={6} py={60} alignItems={"flex-start"}>
            <Box>
              <Heading size="lg">we create</Heading>
              <Heading size="3xl">websites that</Heading>
              <Heading size="3xl">enable growth</Heading>
            </Box>
            <Button
              variant="outline"
              color={"gray.200"}
              _hover={{ color: "gray.800", bg: "gray.200" }}
            >
              Contact Us →
            </Button>
          </Stack>
        </Container>
      </Parallax>
      <Box py={40}>
        <Container maxW="container.md">
          <Text>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus sapiente totam, dolorem saepe praesentium asperiores
            provident inventore, itaque cupiditate placeat ducimus eveniet rerum
            deserunt, facilis recusandae sit quos voluptas facere.
          </Text>
        </Container>
      </Box>
      <ProjectFeature />
      <Box py={40} bg="gray.700" color="white">
        <Container maxW="container.md" centerContent>
          <Text fontSize="3xl" textAlign={"center"}>
            We work with people that are ready to step out of
            &quot;do-it-yourself&quot; and into their authentic digital vision.
          </Text>
        </Container>
      </Box>
      <Parallax>
        <Container maxW="container.xl" py={40}>
          <Heading size="lg">we&apos;re</Heading>
          <Heading size="4xl">WEBPRISM</Heading>
        </Container>
      </Parallax>
      <Box py={40}>
        <Container maxW="container.md">
          <Stack spacing={8}>
            <Heading size="xl">Frequently Asked Questions</Heading>
            <Accordion allowMultiple allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Section 1 title
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box flex="1" textAlign="left">
                      Section 2 title
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </Stack>
        </Container>
      </Box>
      <Box py={40} bg="gray.900" color="white">
        <Container maxW="container.md" centerContent>
          <Stack spacing={8}>
            <Text fontSize="2xl" textAlign={"center"}>
              We believe the free market of ideas allows every person to do
              something to improve their corner of the world. We believe the
              most successful businesses exist to serve others.
            </Text>
            <Text fontSize="2xl" textAlign={"center"}>
              Who would we be if we didn&apos;t use our talents to help improve
              the world around us, in whatever way we can?
            </Text>
          </Stack>
        </Container>
      </Box>
      <Box py={20}>
        <Container maxW="container.md">
          <Stack spacing={8}>
            <Heading as="h2" size="xl">
              Contact Us
            </Heading>
            <SimpleGrid templateColumns={`repeat(2, 1fr)`} gap={6} w="full">
              <GridItem colSpan={[2, 1]}>
                <Input placeholder="first name" />
              </GridItem>
              <GridItem colSpan={[2, 1]}>
                <Input placeholder="last name" />
              </GridItem>
              <GridItem colSpan={[2]}>
                <Input placeholder="phone number" />
              </GridItem>
              <GridItem colSpan={[2]}>
                <Input placeholder="email address" />
              </GridItem>
              <GridItem colSpan={[2]}>
                <Textarea placeholder="your message" rows={5} />
              </GridItem>
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>
    </>
  );
}

function ProjectFeature() {
  const [feature, featureInView, entry] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <Flex justifyContent={"flex-end"} py={40}>
      <Stack
        spacing={8}
        p={20}
        maxW={["100%", "60%"]}
        bg="gray.200"
        ref={feature}
        className={`animate__animated ${
          featureInView ? "animate__slideInRight" : "pre_animated"
        }`}
      >
        <Heading size="lg">Project Feature - [Name]</Heading>
        <Stack direction={["column"]} spacing={8}>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
            sequi maiores molestias beatae aspernatur sunt assumenda esse optio
            repellendus, voluptate ut praesentium dolore et neque commodi ipsum
            placeat facilis consequatur.
          </Text>
          <Text fontStyle={"italic"}>
            quote from the customer about our awesomeness...
          </Text>
        </Stack>
      </Stack>
    </Flex>
  );
}

export async function getStaticProps() {
  const query = encodeURIComponent(
    `*[ _type == "post" ][0..2] | order (publishedAt desc)`
  );

  const url = `https://0ggffobx.api.sanity.io/v1/data/query/production?query=${query}`;
  const result = await fetch(url).then((res) => res.json());
  const data = result.result;

  return {
    props: {
      data: data,
    },
  };
}
