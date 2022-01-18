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
  Divider
} from "@chakra-ui/react";
import NextLink from "next/link";
import { Parallax } from "react-parallax";
import dynamic from "next/dynamic";
import { FAQ } from "@/components/FAQ";
import Head from "next/head";
import PainPoints from "@/components/PainPoints";
import { FaArrowRight } from "react-icons/fa";
import ProjectFeature from "@/components/ProjectFeature";
import { ShapesProps } from "@/components/shapes";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const MotionText = motion(Text);

const DynamicLordIcon = dynamic(() => import("../components/LordIcon"), {
  ssr: false,
});

const OurProcess = dynamic(() => import("../components/OurProcess"!), {
  ssr: false,
});

const LetterGather = dynamic(() => import("@/components/LetterGather"));

const Shapes = dynamic<ShapesProps>(() => import("@/components/Shapes"!));

export default function ReHome({ blogPosts }: { blogPosts: [] }) {
  const { colorMode } = useColorMode();
  const [c1Ref, c1InView] = useInView({
    threshold: 1,
  });

  const controls = useAnimation();

  useEffect(() => {
    console.log(c1InView);

    if (c1InView) controls.start("animate");
    else controls.start("rest");
  }, [c1InView]);

  return (
    <>
      <Head>
        <title>Crafted Websites for Authentic Brands | WEBPRISM</title>
      </Head>
      {/* Hero */}
      <Box>
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
              maxW={["full", "60%"]}
              px={"18px"}
              pos="relative"
              zIndex={1}
            >
              <Heading size="3xl" fontWeight="800">
                Crafted Websites for Authentic Brands
              </Heading>
              <Heading size="md">
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
              We create{" "}
              <strong style={{ fontSize: "1.2em" }}>
                custom-tailored websites
              </strong>{" "}
              that <em style={{ fontSize: "1.4em" }}>showcase personality</em>{" "}
              and <u style={{ fontSize: "1.2em" }}>unlock digital marketin</u>g.
            </Text>
          </Stack>
          {/* <Image alt="" /> */}
        </Container>
      </Box>
      <PainPoints />
      {/* Site Types */}
      <Container py={40} maxW="container.xl">
        <Stack spacing={16}>
          <Heading size="2xl" textAlign={"center"}>
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
                      We built an app to help anyone define their mission.
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
            src={"/projects/le-marche.png"}
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
          <Heading size="2xl">Our Process</Heading>
          <Heading size="md">What you can expect</Heading>
        </Stack>
        <OurProcess />
      </Container>
      {/* Cut out Statement 1 */}
      <Container maxW="sm">
          <Divider />
        </Container>
      <Box
        py={40}
      >
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
          <Heading size="2xl">What Our Clients Say</Heading>
          <Text>We might be biased, but we think they like us.</Text>
        </Stack>
        <SimpleGrid templateColumns={"repeat(3, 1fr)"} gap={8} my={20}>
          <GridItem colSpan={[3, 1]}>
            <Stack spacing={4} alignItems={"flex-start"}>
              <Text>
                Working with WEBPRISM was a great decision - they were able to
                build my website quickly, help me define my branding and showed
                the personality I wanted to show for the Strong Ox brand. They
                helped me with everything from getting Shopify set up to
                building the site and creating graphics for longer term
                marketing.
              </Text>
              <Text fontStyle={"italic"} fontWeight={600}>
                Damen - Strong Ox
              </Text>
            </Stack>
          </GridItem>
          <GridItem colSpan={[3, 1]}>
            <Stack spacing={4} alignItems={"flex-start"}>
              <Text>
                Deciding to work with Devin and Ashley was a pivotal moment for
                our business. Their expertise, creativity and productivity (not
                to mention their adaptability and great personalities) are
                brilliant.
              </Text>
              <Text>
                Their ability to conceptualize our business allows us to trust
                their insights and guidance. Redoing our website felt like a
                major undertaking and vulnerable step, but their design
                competence and workflow made it so positive. Check out our
                website, it&apos;s awesome!
              </Text>
              <Text fontStyle={"italic"} fontWeight={600}>
                Brooke &amp; Kristi - StudioLife
              </Text>
            </Stack>
          </GridItem>
          <GridItem colSpan={[3, 1]}>
            <Stack spacing={4} alignItems={"flex-start"}>
              <Text>
                Devin and Ashley of @webprism.co redesigned and reworked my
                website, and I couldn&apos;t be more thrilled. If you&apos;ve
                been waiting for the right person to do your website rebuild, I
                cannot recommend @webprism.co enough. It&apos;s a fabulous way
                to start a new year, and it&apos;s been such a nice gift to
                myself and my business!
              </Text>
              <Text fontStyle={"italic"} fontWeight={600}>
                Sarah - The Mint Gardener
              </Text>
            </Stack>
          </GridItem>
        </SimpleGrid>
        <NextLink href="/portfolio" passHref>
          <Button>See Our Portfolio</Button>
        </NextLink>
      </Container>
      {/* We're WEBPRISM */}
      <Flex py={20} justifyContent={"flex-start"}>
        <LetterGather />
      </Flex>
      {/* Cut out Statement 2 */}
      <Container maxW="sm">
          <Divider />
        </Container>
      <Box
        py={40}
      >
        <Container maxW="container.lg" centerContent>
          <Stack spacing={8}>
            <Text fontSize="2xl" textAlign={"center"}>
              We believe the free market of ideas allows every person to do
              something to improve their corner of the world. We believe the
              most successful businesses exist to serve others.
            </Text>
          </Stack>
        </Container>
      </Box>
      <Container maxW="sm">
          <Divider />
        </Container>
      {/* Blog Posts */}
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
