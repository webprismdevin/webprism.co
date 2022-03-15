import {
  Box,
  Container,
  Stack,
  Flex,
  Heading,
  SimpleGrid,
  GridItem,
  Text,
  Button,
  Image,
  useColorMode,
  Icon,
  Link,
  Divider,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { Parallax } from "react-parallax";
import dynamic from "next/dynamic";
import { FAQ } from "@/components/FAQ";
import Head from "next/head";
import PainPoints from "@/components/PainPoints";
import { FaArrowRight } from "react-icons/fa";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { ShapesProps } from "@/components/ShapesProps";
import Testimonials from "@/components/Testimonials";

const MotionText = motion(Text);

const DynamicLordIcon = dynamic(() => import("../components/LordIcon"), {
  ssr: false,
});

const OurProcess = dynamic(() => import("../components/OurProcess"!), {
  ssr: false,
});

const ProjectFeature = dynamic(() => import("@/components/ProjectFeature"), {
  ssr: false,
});

const LetterGather = dynamic(() => import("@/components/LetterGather"));

const Shapes = dynamic<ShapesProps>(() => import("@/components/Shapes"!));

export default function ReHome({ blogPosts }: { blogPosts: [] }) {
  const { colorMode } = useColorMode();
  const [c1Ref, c1InView] = useInView({
    threshold: 1,
  });

  const [c2Ref, c2InView] = useInView({
    threshold: 1,
  });

  const controls = useAnimation();
  const controls2 = useAnimation();

  useEffect(() => {
    window.scrollTo(0,0)
  }, [])

  useEffect(() => {
    if (c1InView) controls.start("animate");
    else controls.start("rest");
  }, [c1InView]);

  useEffect(() => {
    if (c2InView) controls2.start("animate");
    else controls2.start("rest");
  }, [c2InView]);

  return (
    <>
      <Head>
        <title>Crafted Websites for Authentic Brands | WEBPRISM</title>
        <meta
          name="description"
          content="WEBPRISM is a digital creative agency that specializes in website design and e-commerce solutions. Our team of experts will work with you to create a website that showcases your personality and unlocks your digital marketing potential."
        />
      </Head>
      {/* Hero */}
      <Box overflow={"visible"} w="full">
        <Parallax
          renderLayer={(percentage) => {
            const top = percentage * 100 - 100;
            return (
              <Box
                style={{
                  position: "absolute",
                  top: -top * 4,
                  left: 0,
                  zIndex: 0,
                  overflow: "visible",
                }}
              >
                <Shapes colorMode={colorMode} />
              </Box>
            );
          }}
          strength={-120}
        >
          <Container maxW="container.xl">
            <Stack
              spacing={8}
              my={80}
              alignItems={"flex-start"}
              maxW={["full", "80%"]}
              pos="relative"
              zIndex={1}
            >
              <Heading
                textTransform={"uppercase"}
                fontWeight={300}
                as="h1"
                size="3xl"
              >
                Crafted Websites for Authentic Brands
              </Heading>
              <Heading maxW={["full", "50%"]} as="h2" size="md">
                Unlock new digital marketing opportunities with a
                custom-tailored website designed to showcase your brand.
              </Heading>
              <NextLink href="/contact" passHref>
                <Button rightIcon={<Icon as={FaArrowRight} />}>
                  Let&apos;s Talk
                </Button>
              </NextLink>
            </Stack>
          </Container>
        </Parallax>
      </Box>
      {/* PAS */}
      <Box py={40}>
        <Container maxW="container.md" pos={"relative"}>
          <Stack spacing={16}>
            <Text fontSize="xl" textAlign={"center"}>
              We create custom-tailored websites that showcase personality and
              unlock digital marketing.
            </Text>
          </Stack>
        </Container>
      </Box>
      <PainPoints />
      {/* Site Types */}
      <Container py={40} maxW="container.xl">
        <Stack spacing={16}>
          <Heading
            textTransform={"uppercase"}
            fontWeight={300}
            size="2xl"
            textAlign={"center"}
            as="h2"
          >
            What We Build
          </Heading>
          <SimpleGrid
            templateColumns={"repeat(2, 1fr)"}
            templateRows={"repeat(2, 1fr)"}
            gap={8}
          >
            <GridItem colSpan={[2, 1]}>
              <Flex gap={6} className="mktg_sites">
                <DynamicLordIcon
                  trigger="hover"
                  src="https://cdn.lordicon.com/lupuorrc.json"
                  target="div.mktg_sites"
                  height={128}
                  width={128}
                />
                <Stack spacing={8}>
                  <Heading size="lg">Marketing Sites</Heading>
                  <Text>
                    Your business&apos;s digital marketing home base. Everything
                    from your services &amp; offerings, to your story, to
                    resources for your potential and current clients live on
                    your marketing site.
                  </Text>
                </Stack>
              </Flex>
            </GridItem>
            <GridItem colSpan={[2, 1]}>
              <Flex gap={6} className="micro-sites">
                <DynamicLordIcon
                  trigger="hover"
                  src="https://cdn.lordicon.com/uukerzzv.json"
                  target="div.micro-sites"
                  height={128}
                  width={128}
                />
                <Stack spacing={8}>
                  <Heading size="lg">Micro-sites &amp; Landing Pages</Heading>
                  <Text>
                    A specifically designed, usually single page, websites for a
                    specific event, function, or marketing purpose, like
                    gathering leads for a webinar.
                  </Text>
                </Stack>
              </Flex>
            </GridItem>
            <GridItem colSpan={[2, 1]}>
              <Flex gap={6} className="web-apps">
                <DynamicLordIcon
                  trigger="hover"
                  src="https://cdn.lordicon.com/fqrjldna.json"
                  target="div.web-apps"
                  height={128}
                  width={128}
                />
                <Stack spacing={8} alignItems={"flex-start"}>
                  <Heading size="lg">Web Applications</Heading>
                  <Text>
                    Turn an idea into a full-fledged application online for your
                    business. We can even turn your new web application into a
                    mobile app!
                  </Text>
                  <Link href="https://mvp.webprism.co" target="_blank">
                    Check out the app we built to help everyone define their
                    purpose.
                  </Link>
                </Stack>
              </Flex>
            </GridItem>
            <GridItem colSpan={[2, 1]}>
              <Flex gap={6} className="ecomm-sites">
                <DynamicLordIcon
                  trigger="hover"
                  src="https://cdn.lordicon.com/nlzvfogq.json"
                  target="div.ecomm-sites"
                  height={128}
                  width={128}
                />
                <Stack spacing={8} alignItems={"flex-start"}>
                  <Heading size="lg">E-Commerce Sites</Heading>
                  <Text>
                    Sell your products online with a custom shopping experience
                    that allows ultimate flexibility for your content strategy.
                  </Text>
                  <Link href="https://supershops.webprism.xyz" target="_blank">
                    Check out SuperShops →
                  </Link>
                </Stack>
              </Flex>
            </GridItem>
          </SimpleGrid>
        </Stack>
      </Container>
      {/* Project Feature 1 */}
      <Box py={40}>
        <Container
          maxW="container.xl"
          minH={["700px", "630px"]}
          pos="relative"
          overflow={["hidden"]}
        >
          <Box mt={20} mb={8}>
            <ProjectFeature />
          </Box>
          <Image
            src={"/photos/le-marche.webp"}
            alt=""
            pos="absolute"
            h={["600px", "800px"]}
            top={-20}
            right={-20}
            zIndex={-1}
          />
        </Container>
      </Box>
      {/* Our Process */}
      <Container maxW={["container.xl"]} centerContent py={40}>
        <Stack spacing={8} alignItems={"center"} mb={12}>
          <Heading
            textTransform={"uppercase"}
            fontWeight={300}
            size="2xl"
            as="h2"
          >
            Our Process
          </Heading>
          <Heading size="md">What you can expect when working with us</Heading>
        </Stack>
        <OurProcess />
      </Container>
      {/* Cut out Statement 1 */}
      <Container maxW="sm">
        <Divider />
      </Container>
      <Box py={40}>
        <Container maxW="container.lg" centerContent ref={c1Ref}>
          <MotionText
            variants={{
              rest: { y: -300, opacity: 0 },
              animate: { y: 0, opacity: 1 },
            }}
            initial="rest"
            animate={controls}
            transition={{
              x: { type: "tween", duration: 0.4 },
              opacity: { type: "spring", duration: 0.4 },
            }}
            fontSize="2xl"
            textAlign={"center"}
          >
            We work together to understand your brand goals and create a
            strategy to get the most out of your new website and marketing
            platform so that you can grow your audience and your business.
          </MotionText>
        </Container>
      </Box>
      <Container maxW="sm">
        <Divider />
      </Container>
      {/* Testimonials */}
      <Container pt={40} pb={80} centerContent maxW="container.xl">
        <Stack spacing={6} textAlign={"center"}>
          <Heading
            textTransform={"uppercase"}
            fontWeight={300}
            size="2xl"
            as="h2"
          >
            What Our Clients Say
          </Heading>
          <Text fontWeight={600} fontSize={"lg"}>We might be biased, but we think they like us.</Text>
          <Testimonials />
          <NextLink href="/portfolio" passHref>
            <Button alignSelf={"center"}>See Our Portfolio</Button>
          </NextLink>
        </Stack>
      </Container>
      {/* We're WEBPRISM */}
      <Flex py={20} justifyContent={"flex-start"}>
        <LetterGather />
      </Flex>
      {/* Cut out Statement 2 */}
      <Container maxW="sm">
        <Divider />
      </Container>
      <Box py={40}>
        <Container ref={c2Ref} maxW="container.lg" centerContent>
          <MotionText
            variants={{
              rest: {
                y: 300,
                opacity: 0,
              },
              animate: {
                y: 0,
                opacity: 1,
              },
            }}
            initial="rest"
            animate={controls2}
            transition={{
              x: { type: "tween", duration: 0.4 },
              opacity: { type: "spring", duration: 0.4 },
            }}
            fontSize="2xl"
            textAlign={"center"}
          >
            We&apos;re exploring the depths of our creativity, and creating
            better experiences for our clients and their customers with
            everything we discover.
          </MotionText>
        </Container>
      </Box>
      <Container maxW="sm">
        <Divider />
      </Container>
      {/* Blog Posts */}
      <Box pt={40} pb={20}>
        <Container maxW="container.md">
          <Stack spacing={8}>
            <Box pt={4}>
              <Heading as="h3" textTransform={"uppercase"} fontWeight={300}>
                Latest Writing
              </Heading>
              <Text>
                We write things, about stuff. Come stand around our soap box.
              </Text>
            </Box>
            <Stack dir={"column"} spacing={12}>
              {blogPosts.map((post: any) => (
                <Stack spacing={4} alignItems={"flex-start"} key={post._id}>
                  <Heading
                    textTransform={"uppercase"}
                    size="md"
                    fontWeight={300}
                  >
                    {post.title}
                  </Heading>
                  <Text>{post.metaDesc}</Text>
                  <NextLink href={`/posts/${post.slug.current}`} passHref>
                    <Button>Read →</Button>
                  </NextLink>
                </Stack>
              ))}
            </Stack>
          </Stack>
        </Container>
      </Box>
      {/* FAQ */}
      <Box pb={40} pt={20}>
        <Container maxW="container.md">
          <FAQ />
        </Container>
      </Box>
    </>
  );
}

export async function getStaticProps() {
  const query = encodeURIComponent(
    `*[ _type == "post" ] | order (_createdAt desc) [0..2]`
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
