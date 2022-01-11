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

import dynamic from "next/dynamic";
const DynamicLordIcon = dynamic(() => import("../components/LordIcon"), {
  ssr: false,
});

export default function ReHome({ data }: { data: {} }) {
  return (
    <>
      <Parallax
        bgImage={"/photos/drawn-mountain.jpg"}
        strength={-100}
        bgImageAlt="NEEDS UPDATE WHEN FINAL SETTLED"
      >
        <Container maxW="container.xl" color="white">
          <Stack spacing={8} py={80} alignItems={"flex-start"} maxW={["60%"]}>
            <Heading size="3xl" fontWeight="800">
              Crafted Websites for Authentic Brands
            </Heading>
            <Heading size="md">
              Unlock new digital marketing opportunities with a custom-tailored
              website designed to showcase your brand.
            </Heading>
            <Button
              // variant="outline"
              color={"gray.800"}
              _hover={{ color: "gray.800", bg: "gray.200" }}
            >
              Contact Us →
            </Button>
          </Stack>
        </Container>
      </Parallax>
      <Box py={40}>
        <Container maxW="container.md" pos={"relative"}>
          <Stack spacing={16}>
            <Text fontSize="xl">
              Your website is one of the most important marketing tools your
              business has. Not only is it the face of your business, but
              it&apos;s also the heart of your marketing engine.
            </Text>
            <Text fontSize="xl">
              We create a custom-tailored websites that showcases our clients&apos;
              personality and unlock digital marketing opportunities - like SEO
              and social advertising.
            </Text>
          </Stack>
          <Image alt="" />
        </Container>
      </Box>
      {/* Site Types 1 */}
      <Container py={20} maxW="container.lg">
        <Stack spacing={16}>
          <Heading size="2xl" textAlign={"center"}>
            What We&apos;ll Build You
          </Heading>
          <Divider />
          <Flex gap={6} className="mktg_sites">
            <DynamicLordIcon
              trigger="hover"
              src="https://cdn.lordicon.com/lupuorrc.json"
              target="div.mktg_sites"
            />
            <Stack spacing={8}>
              <Heading size="lg">Marketing Sites</Heading>
              <Text>
                Your business&apos;s digital marketing home base. Everything
                from your services &amp; offerings, to your story, to resources
                for your potential and current clients live on your marketing
                site.
              </Text>
            </Stack>
          </Flex>
          <Flex gap={6} className="micro-sites">
            <DynamicLordIcon
              trigger="hover"
              src="https://cdn.lordicon.com/uukerzzv.json"
              target="div.micro-sites"
            />
            <Stack spacing={8}>
              <Heading size="lg">Micro-sites &amp; Landing Pages</Heading>
              <Text>
                A specifically designed, usually single page, websites for a
                specific event, function, or marketing purpose, like gathering
                leads for a webinar.
              </Text>
            </Stack>
          </Flex>
        </Stack>
      </Container>
      <ProjectFeature dir="right" />
      {/* Site Types 2 */}
      <Container py={20} maxW="container.lg">
        <Stack spacing={16}>
          <Flex gap={6} className="web-apps">
            <DynamicLordIcon
              trigger="hover"
              src="https://cdn.lordicon.com/fqrjldna.json"
              target="div.web-apps"
            />
            <Stack spacing={8}>
              <Heading size="lg">Web Applications</Heading>
              <Text>
                Turn an idea into a full-fledged application online for your
                business. We can even turn your new web application into a
                mobile app!
              </Text>
            </Stack>
          </Flex>
          <Flex gap={6} className="ecomm-sites">
            <DynamicLordIcon
              trigger="hover"
              src="https://cdn.lordicon.com/nlzvfogq.json"
              target="div.ecomm-sites"
            />
            <Stack spacing={8}>
              <Heading size="lg">E-Commerce Sites</Heading>
              <Text>
                Sell your products online with a custom shopping experience that
                allows ultimate flexibility for your content strategy. Go
                further than a blog with guides, video series and courses,
                podcasts and more!
              </Text>
            </Stack>
          </Flex>
        </Stack>
      </Container>
      <ProjectFeature dir="left" />
      {/* Our Process */}
      <Container maxW="container.xl" centerContent py={40}>
        <Stack spacing={8} textAlign={"center"} mb={8}>
          <Heading size="2xl">Our Process</Heading>
          <Heading size="md">What you can expect</Heading>
          <Divider />
        </Stack>
        <Stack direction={["column", "row"]} alignItems={"center"}>
          <Box>
            <DynamicLordIcon
              target=""
              src="https://cdn.lordicon.com/zpxybbhl.json"
              trigger="loop"
            />
            <Text>Consultation</Text>
          </Box>
          <Text fontSize="6xl">→</Text>
          <Box>
            <DynamicLordIcon
              target=""
              src="https://cdn.lordicon.com/iltqorsz.json"
              trigger="loop"
            />
            <Text>Brand Discovery</Text>
          </Box>
          <Text fontSize="6xl">→</Text>
          <Box>
            <DynamicLordIcon
              target=""
              src="https://cdn.lordicon.com/puvaffet.json"
              trigger="loop"
            />
            <Text>Copy Writing</Text>
          </Box>
          <Text fontSize="6xl">→</Text>
          <Box>
            <DynamicLordIcon
              target=""
              src="https://cdn.lordicon.com/wloilxuq.json"
              trigger="loop"
            />
            <Text>Site Design</Text>
          </Box>
          <Text fontSize="6xl">→</Text>
          <Box>
            <DynamicLordIcon
              target=""
              src="https://cdn.lordicon.com/ybfcwnqv.json"
              trigger="loop"
            />
            <Text>Development</Text>
          </Box>
          <Text fontSize="6xl">→</Text>
          <Box>
            <DynamicLordIcon
              target=""
              src="https://cdn.lordicon.com/zpxybbhl.json"
              trigger="loop"
            />
            <Text>Launch</Text>
          </Box>
          <Text fontSize="6xl">→</Text>
          <Box>
            <DynamicLordIcon
              target=""
              src="https://cdn.lordicon.com/gqdnbnwt.json"
              trigger="loop"
            />
            <Text>SEO &amp; Maintenance</Text>
          </Box>
        </Stack>
      </Container>
      {/* Cut out Statement 1 */}
      <Box py={40} bg="gray.800" color="white">
        <Container maxW="container.lg" centerContent>
          <Text fontSize="2xl" textAlign={"center"}>
            We work together to understand your brand goals and create a
            strategy to get the most out of your new website and marketing
            platform so that you can grow your audience and your business.
          </Text>
        </Container>
      </Box>
      <Parallax
        blur={{ min: -5, max: 15 }}
        bgImage={"/logos/logo-bg.jpg"}
        strength={-200}
        bgImageAlt="WEBPRISM logo repeated background"
      >
        <Container maxW="container.xl" py={40}>
          <Heading size="lg">we&apos;re</Heading>
          <Heading size="4xl">WEBPRISM</Heading>
          <Text mt={8} maxW={"60%"}>
            We build websites that unlock online marketing for our customers.
            We&apos;ll also help our customers support and market their website
            after launch with SEO, a content strategy, and social advertising.
            We&apos;ve worked with small teams so far, becoming a marketing
            partner and digital advisor to our clients.
          </Text>
        </Container>
      </Parallax>
      {/* Cut out Statement 2 */}
      <Box py={40} bg="gray.900" color="white">
        <Container maxW="container.lg" centerContent>
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
      <ContactForm />
            {/* FAQ */}
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
    </>
  );
}

function ProjectFeature({ dir }: { dir: "left" | "right" }) {
  const [feature, featureInView, entry] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const animationDirection = dir === "left" ? "Left" : "Right";
  const animationFlex = dir === "left" ? "flex-start" : "flex-end";

  return (
    <Flex justifyContent={animationFlex} py={16}>
      <Stack
        spacing={8}
        p={20}
        maxW={["100%", "60%"]}
        bg="gray.200"
        ref={feature}
        pos={"relative"}
        zIndex={1}
        className={`animate__animated ${
          featureInView
            ? `animate__slideIn${animationDirection}`
            : "pre_animated"
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

function ContactForm() {
  return (
    <Box py={40}>
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
            <GridItem>
              <Button>Submit ✓</Button>
            </GridItem>
          </SimpleGrid>
        </Stack>
      </Container>
    </Box>
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
