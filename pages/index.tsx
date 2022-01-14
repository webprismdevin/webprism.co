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
} from "@chakra-ui/react";
import Link from "next/link";
import { Parallax } from "react-parallax";
import { useInView } from "react-intersection-observer";
import dynamic from "next/dynamic";
import { FAQ } from "@/components/FAQ";
import Head from "next/head";

const DynamicLordIcon = dynamic(() => import("../components/LordIcon"), {
  ssr: false,
});

const OurProcess = dynamic(() => import("../components/OurProcess"));

export default function ReHome({ blogPosts }: { blogPosts: [] }) {
  const { colorMode } = useColorMode();

  return (
    <>
      <Head>
        <title>Crafted Websites for Authentic Brands | WEBPRISM</title>
      </Head>
      {/* Hero */}
      <Parallax
        renderLayer={(percentage) => {
          const top = percentage * 100 - 100;
          return (
            <>
              <iframe
                src={
                  colorMode === "dark"
                    ? "https://my.spline.design/shapesdarkmode-6d0ed103eb7820d52a67213a7835db2c/"
                    : "https://my.spline.design/shapeslightmode-382f8e27efafd96f224a93830b6debcb/"
                }
                frameBorder="0"
                width="100%"
                height={900}
                style={{
                  position: "absolute",
                  top: -top * 4,
                  left: 0,
                  zIndex: 0,
                }}
              ></iframe>
              <Box
                pos="absolute"
                bg={colorMode === "dark" ? "gray.800" : "#F7F4EE"}
                bottom={0 + top * 4}
                right={0}
                p={8}
                h={300}
                zIndex={1}
              />
            </>
          );
        }}
        strength={-100}
        bgImageAlt="NEEDS UPDATE WHEN FINAL SETTLED"
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
              Unlock new digital marketing opportunities with a custom-tailored
              website designed to showcase your brand.
            </Heading>
            <Link href="/contact" passHref>
              <Button>Contact Us →</Button>
            </Link>
          </Stack>
        </Container>
      </Parallax>
      {/* PAS */}
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
      {/* Site Types */}
      <Container py={20} maxW="container.lg">
        <Stack spacing={16}>
          <Heading size="2xl" textAlign={"center"}>
            What We Build
          </Heading>
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
              height={128}
              width={128}
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
              <Link href="https://mvp.webprism.co" passHref>
                <Text textDecor={"underline"} cursor={"pointer"}>
                  We built an app to help anyone define their mission, vision
                  &amp; purpose.
                </Text>
              </Link>
            </Stack>
          </Flex>
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
                Sell your products online with a custom shopping experience that
                allows ultimate flexibility for your content strategy. Go
                further than a blog with guides, video series and courses,
                podcasts and more!
              </Text>
              <Link href="https://supershops.webprism.xyz" passHref>
                <Button>Learn More →</Button>
              </Link>
            </Stack>
          </Flex>
        </Stack>
      </Container>
      <ProjectFeature
        dir="left"
        name="Strong Ox"
        portLink={"Strong%20Ox"}
        bgImage={"/projects/strongox.webp"}
      />
      <ProjectFeature
        dir="right"
        name="Le Marche Reverie"
        portLink={"La%20Marche%20Reverie"}
        bgImage={"projects/le-marche.png"}
      />
      {/* Our Process */}
      <Container maxW={["container.xl"]} centerContent py={40}>
        <Heading size="2xl">Our Process</Heading>
        <Heading size="md" mb={8}>
          What you can expect
        </Heading>
        <OurProcess />
      </Container>
      {/* Cut out Statement 1 */}
      <Box
        py={40}
        bg={colorMode === "dark" ? "gray.600" : "gray.900"}
        color="white"
      >
        <Container maxW="container.lg" centerContent>
          <Text fontSize="2xl" textAlign={"center"}>
            We work together to understand your brand goals and create a
            strategy to get the most out of your new website and marketing
            platform so that you can grow your audience and your business.
          </Text>
        </Container>
      </Box>
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
              <Text fontStyle={"italic"} fontWeight={600}>Damen - Strong Ox</Text>
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
              <Text fontStyle={"italic"} fontWeight={600}>Brooke &amp; Kristi - StudioLife</Text>
            </Stack>
          </GridItem>
          <GridItem colSpan={[3, 1]}>
            <Stack spacing={4} alignItems={"flex-start"}>
              <Text>
                Devin and Ashley of @webprism.co redesigned and reworked my
                website, and I couldn’t be more thrilled. If you’ve been waiting
                for the right person to do your website rebuild, I cannot
                recommend @webprism.co enough. It’s a fabulous way to start a
                new year, and it&apos;s been such a nice gift to myself and my
                business!
              </Text>
              <Text fontStyle={"italic"} fontWeight={600}>Sarah - The Mint Gardener</Text>
            </Stack>
          </GridItem>
        </SimpleGrid>
        <Link href="/portfolio" passHref>
          <Button>See Our Portfolio</Button>
        </Link>
      </Container>
      {/* We're WEBPRISM */}
      <Parallax
        blur={{ min: -5, max: 15 }}
        bgImage={
          colorMode === "dark" ? "logos/logo-bg-dark.jpg" : "/logos/logo-bg.jpg"
        }
        strength={-100}
        bgImageAlt="WEBPRISM logo repeated background"
      >
        <Container maxW="container.xl" py={40}>
          <Heading size="lg">we&apos;re</Heading>
          <Heading size={"3xl"}>WEBPRISM</Heading>
          <Text mt={8} maxW={["full", "60%"]}>
            We build websites that unlock online marketing for our customers.
            We&apos;ll also help our customers support and market their website
            after launch with SEO, a content strategy, and social advertising.
            We&apos;ve worked with small teams so far, becoming a marketing
            partner and digital advisor to our clients.
          </Text>
          <Button mt={8}>About Us →</Button>
        </Container>
      </Parallax>
      {/* Cut out Statement 2 */}
      <Box
        py={40}
        bg={colorMode === "dark" ? "gray.600" : "gray.900"}
        color="white"
      >
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
                  <Link href={`/posts/${post.slug.current}`} passHref>
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
          <FAQ />
        </Container>
      </Box>
    </>
  );
}

function ProjectFeature({
  dir,
  name,
  portLink,
  bgImage,
}: {
  dir: "left" | "right";
  name: string;
  portLink: string;
  bgImage: string;
}) {
  const { colorMode } = useColorMode();
  const [feature, featureInView, entry] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const animationDirection = dir === "left" ? "Left" : "Right";
  const animationFlex = dir === "left" ? "flex-start" : "flex-end";

  return (
    <Flex justifyContent={animationFlex} py={16}>
      <Link href={`/portfolio#${portLink}`} passHref>
        <Stack
          spacing={8}
          p={20}
          maxW={["100%", "60%"]}
          ref={feature}
          pos={"relative"}
          zIndex={1}
          className={`animate__animated ${
            featureInView
              ? `animate__slideIn${animationDirection}`
              : "pre_animated"
          }`}
          alignItems={"flex-start"}
          bgImage={bgImage}
          bgPos={"left center"}
          outline="none"
          color="white"
          transition={"opacity 200ms ease"}
          // opacity={0.7}
          // _hover={{
          //   opacity: 1,
          // }}
          cursor={"pointer"}
        >
          <Heading size="lg">Project Feature - {name}</Heading>
          <Stack direction={["column"]} spacing={8}>
            <Text fontWeight={800}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
              sequi maiores molestias beatae aspernatur sunt assumenda esse
              optio repellendus, voluptate ut praesentium dolore et neque
              commodi ipsum placeat facilis consequatur.
            </Text>
            <Text fontStyle={"italic"}>
              quote from the customer about our awesomeness...
            </Text>
          </Stack>
        </Stack>
      </Link>
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
