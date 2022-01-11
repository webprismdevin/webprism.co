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
  useColorMode,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Parallax } from "react-parallax";
import { useInView } from "react-intersection-observer";

import dynamic from "next/dynamic";
const DynamicLordIcon = dynamic(() => import("../components/LordIcon"), {
  ssr: false,
});

export default function ReHome({ blogPosts }: { blogPosts: [] }) {
  const [step, setStep] = useState(0);
  const { colorMode } = useColorMode();

  function returnStatement(){
    switch(step){
      case 0:
        return "hover over a step to learn more!"
      case 7:
        return "we write a bunch of shit for reasons"
      default:
        return "something has gone horribly wrong!"
    }
  }

  return (
    <>
      <Parallax
        bgImage={colorMode === "dark" ? "/photos/craft_black.jpg" : "/photos/drawn-mountain.jpg"}
        strength={-100}
        bgImageAlt="NEEDS UPDATE WHEN FINAL SETTLED"
      >
        <Container maxW="container.xl">
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
              // color={"gray.800"}
              // _hover={{ color: "gray.800", bg: "gray.200" }}
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
              We create a custom-tailored websites that showcases our
              clients&apos; personality and unlock digital marketing
              opportunities - like SEO and social advertising.
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
            <Stack spacing={8} alignItems={"flex-start"}>
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
            <Stack spacing={8} alignItems={"flex-start"}>
              <Heading size="lg">E-Commerce Sites</Heading>
              <Text>
                Sell your products online with a custom shopping experience that
                allows ultimate flexibility for your content strategy. Go
                further than a blog with guides, video series and courses,
                podcasts and more!
              </Text>
              <Button>Learn More About SuperShops →</Button>
            </Stack>
          </Flex>
        </Stack>
      </Container>
      <ProjectFeature dir="left" />
      {/* Our Process */}
      <Container maxW="container.xl" centerContent py={40}>
        <Stack spacing={8} textAlign={"center"}>
          <Heading size="2xl">Our Process</Heading>
          <Heading size="md">What you can expect</Heading>
          <Divider />
          <Stack direction={["column", "row"]} alignItems={"center"}>
            <Box onMouseLeave={() => setStep(0)} onMouseEnter={() => setStep(1)} >
              <DynamicLordIcon
                target=""
                src="https://cdn.lordicon.com/zpxybbhl.json"
                trigger="hover"
              />
              <Text>Consultation</Text>
            </Box>
            <Text fontSize="6xl">→</Text>
            <Box onMouseLeave={() => setStep(0)} onMouseEnter={() => setStep(2)}>
              <DynamicLordIcon
                target=""
                src="https://cdn.lordicon.com/iltqorsz.json"
                trigger="hover"
              />
              <Text>Brand Discovery</Text>
            </Box>
            <Text fontSize="6xl">→</Text>
            <Box onMouseLeave={() => setStep(0)} onMouseEnter={() => setStep(3)}>
              <DynamicLordIcon
                target=""
                src="https://cdn.lordicon.com/puvaffet.json"
                trigger="hover"
              />
              <Text>Copy Writing</Text>
            </Box>
            <Text fontSize="6xl">→</Text>
            <Box onMouseLeave={() => setStep(0)} onMouseEnter={() => setStep(4)}>
              <DynamicLordIcon
                target=""
                src="https://cdn.lordicon.com/wloilxuq.json"
                trigger="hover"
              />
              <Text>Site Design</Text>
            </Box>
            <Text fontSize="6xl">→</Text>
            <Box onMouseLeave={() => setStep(0)} onMouseEnter={() => setStep(5)}>
              <DynamicLordIcon
                target=""
                src="https://cdn.lordicon.com/ybfcwnqv.json"
                trigger="hover"
              />
              <Text>Development</Text>
            </Box>
            <Text fontSize="6xl">→</Text>
            <Box onMouseLeave={() => setStep(0)} onMouseEnter={() => setStep(6)}>
              <DynamicLordIcon
                target=""
                src="https://cdn.lordicon.com/zpxybbhl.json"
                trigger="hover"
              />
              <Text>Launch</Text>
            </Box>
            <Text fontSize="6xl">→</Text>
            <Box onMouseLeave={() => setStep(0)} onMouseEnter={() => setStep(7)}>
              <DynamicLordIcon
                target=""
                src="https://cdn.lordicon.com/gqdnbnwt.json"
                trigger="hover"
              />
              <Text>SEO &amp; Maintenance</Text>
            </Box>
          </Stack>
          <Text>{returnStatement()}</Text>
        </Stack>
      </Container>
      {/* Cut out Statement 1 */}
      <Box py={40} bg="gray.900" color="white">
        <Container maxW="container.lg" centerContent>
          <Text fontSize="2xl" textAlign={"center"}>
            We work together to understand your brand goals and create a
            strategy to get the most out of your new website and marketing
            platform so that you can grow your audience and your business.
          </Text>
        </Container>
      </Box>
      {/* We're WEBPRISM */}
      <Parallax
        blur={{ min: -5, max: 15 }}
        bgImage={colorMode === 'dark' ? "logos/logo-bg-dark.jpg" : "/logos/logo-bg.jpg"}
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
      <Box pt={40} pb={20}>
        <Container maxW="container.md">
          <Stack spacing={8}>
            <Heading>Latest Writing</Heading>
            <Text>
              We write things, about stuff. Come stand around our soap box.
            </Text>

            <Stack dir={"column"} spacing={8}>
              {blogPosts.map((post: any) => (
                <Stack spacing={4} alignItems={"flex-start"} key={post._id}>
                  <Heading size="md">{post.title}</Heading>
                  <Text>{post.metaDesc}</Text>
                  <Link href={`/posts/${post.slug}`} passHref>
                    <Button>Read →</Button>
                  </Link>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Container>
      </Box>
      {/* FAQ */}
      <Box pb={40} pt={20}>
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
  const { colorMode } = useColorMode();
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
        bg={colorMode === 'dark' ? "gray.400" : "gray.200"}
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

export async function getStaticProps() {
  const query = encodeURIComponent(
    `*[ _type == "post" ][0..2] | order (publishedAt desc)`
  );

  const url = `https://0ggffobx.api.sanity.io/v1/data/query/production?query=${query}`;
  const result = await fetch(url).then((res) => res.json());
  const data = result.result;

  return {
    props: {
      blogPosts: data,
    },
  };
}
