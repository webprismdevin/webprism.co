import { imageBuilder } from "@/lib/sanity";
import {
  Button,
  Container,
  Heading,
  Stack,
  Text,
  Box,
  Image,
  Link,
  useColorMode,
  chakra,
  AspectRatio,
  Flex,
} from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";
import dynamic from "next/dynamic";

const TC = dynamic(
  () =>
    import(
      "https://framer.com/m/Testimonial-Card-dedj.js@g9H8PQMHcf05tjiKnafl"
    ),
  { ssr: false }
);

const E = dynamic(
  () => import("https://framer.com/m/Slider-5nCj.js@Qo8wKbynA5oC7L4DnTNQ"),
  { ssr: false }
);

const TestimonialCard = chakra(TC);
const Examples = chakra(E);

const WebDesign = ({ page }: any) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Head>
        <title>{page.pageTitle}</title>
      </Head>

      <Box overflow={"hidden"} position={"relative"}>
        <Box
          bgColor={"brand.dark"}
          width={"full"}
          height={"full"}
          position={"absolute"}
          top={0}
          left={0}
          zIndex={-2}
        />
        <chakra.video
          autoPlay
          muted
          loop
          position={"absolute"}
          top={-10}
          left={0}
          zIndex={-1}
          width={"full"}
          opacity={0.5}
        >
          <source src="/webprism-cut-reel.mp4" type="video/mp4" />
        </chakra.video>
        <Container maxW="container.xl" pt={40} pb={40} color={"white"}>
          <Stack direction={["column-reverse", "row"]} align="center">
            <Stack maxW={["full", "50%"]} spacing={6}>
              <Box>
                <Text mb={2} className="supertext" color={"white"}>
                  {page.hero.supertext}
                </Text>
                <Heading
                  textTransform={"uppercase"}
                  lineHeight={1.2}
                  fontWeight={300}
                  as="h1"
                  size="3xl"
                >
                  {page.hero.title}
                </Heading>
              </Box>
              {page.hero.subtitle && <Text>{page.hero?.subtitle}</Text>}
              <NextLink href={page.hero.cta.link} passHref>
                <Button size="lg" alignSelf={"flex-start"}>
                  {page.hero.cta.text}
                </Button>
              </NextLink>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Container pt={10} pb={20} maxW="container.lg" borderRadius={6}>
        <Stack
          w="full"
          direction={["column", "row"]}
          align={["center", "stretch"]}
          justify={"space-between"}
          spacing={8}
        >
          {page.logos.map((l: { _key: string; url: string; image: any }) => (
            <Link
              href={l.url}
              key={l._key}
              target="_blank"
              bgColor={"brand.light"}
              p={4}
              borderRadius={6}
            >
              <Image
                borderRadius={3}
                maxH={"65px"}
                maxW={["200px", "320px"]}
                src={imageBuilder(l.image).width(350).url()}
                alt=""
                transition={"opacity 200ms ease"}
                _hover={{
                  cursor: "pointer",
                  opacity: 0.6,
                }}
              />
            </Link>
          ))}
        </Stack>
      </Container>
      <Container maxW="container.lg" py={[0, 20]}>
        <Stack align="center" spacing={8}>
          <Box textAlign={"center"}>
            <Text mb={2}>{page.belowTheFold.supertext}</Text>
            <Heading as="h2">{page.belowTheFold.title}</Heading>
          </Box>
          <Stack
            direction={["column", "row"]}
            justify={"space-between"}
            w="full"
            spacing={[8, null]}
          >
            {page.belowTheFold.features.map(
              (feature: { text: string; icon: string; _key: string }) => (
                <Stack
                  key={feature._key}
                  direction="row"
                  align="center"
                  justify={"center"}
                >
                  <Image
                    style={{
                      filter:
                        colorMode === "dark" ? "invert(100%)" : "invert(0%)",
                    }}
                    src={imageBuilder(feature.icon).url()}
                    alt={feature.text}
                    h={8}
                    w={10}
                  />
                  <Text fontSize="lg">{feature.text}</Text>
                </Stack>
              )
            )}
          </Stack>
        </Stack>
      </Container>
      <Flex
        justify={"center"}
        maxW={["full", null]}
        maxH={[250, "none"]}
        overflow="hidden"
      >
        <Examples mt={[0, 10]} />
      </Flex>
      <Container maxW="container.lg" py={40}>
        <Stack
          direction={["column-reverse", "row"]}
          justify={"space-between"}
          spacing={[12, 0]}
        >
          <Stack maxW={400} spacing={8} py={[0, 10]}>
            <Heading as="h3">Our Process</Heading>
            {page.process.map(
              (step: { name: string; description: string; _key: string }) => (
                <Box key={step._key}>
                  <Text fontWeight={600}>{step.name}</Text>
                  <Text>{step.description}</Text>
                </Box>
              )
            )}
          </Stack>
          <Box pos="relative">
            <Box
              pos="absolute"
              top={0}
              left={0}
              h={"full"}
              w={"1200px"}
              zIndex={0}
              backgroundColor={"white"}
              className="realistic_shadow"
              borderRadius={6}

            />
            <Stack
              maxW={420}
              p={10}
              color={"brand.dark"}
              pos="relative"
              zIndex={1}
              spacing={8}
            >
              <Heading as="h2">FAQs</Heading>
              {page.faqs?.map(
                (faq: { question: string; answer: string; _key: string }) => (
                  <Box key={faq._key}>
                    <Text fontWeight={600}>{faq.question}</Text>
                    <Text>{faq.answer}</Text>
                  </Box>
                )
              )}
            </Stack>
          </Box>
        </Stack>
      </Container>
      <Container maxW="container.lg" py={20} centerContent>
        <Stack direction={["column", "row"]} spacing={12}>
          <Box flexGrow={1}>
            <Heading size="2xl" py={6}>
              {page.getStarted.title}
            </Heading>
            <NextLink href={page.getStarted.button.link}>
              <Button size="lg">{page.getStarted.button.text}</Button>
            </NextLink>
          </Box>
          <Box>
            <TestimonialCard maxW={[360, "none"]} />
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default WebDesign;

export async function getStaticProps() {
  const query = encodeURIComponent(`*[_type == "web-design"][0]`);

  const url = `https://0ggffobx.api.sanity.io/v1/data/query/production?query=${query}`;
  const data = await fetch(url).then((res) => res.json());

  return {
    props: {
      page: data.result,
    },
    revalidate: 10,
  };
}
