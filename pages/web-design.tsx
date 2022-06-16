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

const TestimonialCard = chakra(TC)

const WebDesign = ({ page }: any) => {
  const { colorMode } = useColorMode();

  return (
    <>
      <Head>
        <title>{page.pageTitle}</title>
      </Head>
      <Container maxW="container.xl" pt={60} pb={20}>
        <Stack direction={["column-reverse", "row"]}>
          <Stack maxW={["full", "60%"]} spacing={6}>
            <Box>
              <Text mb={2} className="supertext">
                {page.hero.supertext}
              </Text>
              <Heading size="2xl">{page.hero.title}</Heading>
            </Box>
            {page.hero.subtitle && <Text>{page.hero?.subtitle}</Text>}
            <NextLink href={page.hero.cta.link} passHref>
              <Button alignSelf={"flex-start"}>{page.hero.cta.text}</Button>
            </NextLink>
          </Stack>
        </Stack>
      </Container>
      <Box bgColor={colorMode === "dark" ? "brand.light" : "none"}>
        <Container pt={20} pb={20} maxW="container.xl">
          <Stack
            w="full"
            direction={["column", "row"]}
            align={"center"}
            justify={"space-between"}
            spacing={8}
          >
            {page.logos.map((l: { _key: string; url: string; image: any }) => (
              <Link href={l.url} key={l._key} target="_blank">
                <Image
                  borderRadius={3}
                  maxH={"100px"}
                  maxW={["200px", "350px"]}
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
      </Box>
      <Container maxW="container.lg" pt={40} pb={20}>
        <Stack align="center" spacing={8}>
          <Box textAlign={"center"}>
            <Text mb={2}>{page.belowTheFold.supertext}</Text>
            <Heading as="h2">{page.belowTheFold.title}</Heading>
          </Box>
          <Stack direction={["column", "row"]} justify={"space-between"} w="full" spacing={[8, null]}>
            {page.belowTheFold.features.map(
              (feature: { text: string; icon: string; _key: string }) => (
                <Stack key={feature._key} direction="row" align="center" justify={"center"} >
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
                  <Text fontSize="xl">{feature.text}</Text>
                </Stack>
              )
            )}
          </Stack>
        </Stack>
      </Container>
      <Container maxW="container.lg" py={20}>
        <Stack direction={["column-reverse", "row"]} justify={"space-between"} spacing={[12, 0]}>
          <Stack maxW={400}>
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
          <Stack maxW={400} p={8} borderRadius={6} backgroundColor={"white"} className="realistic_shadow">
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
        </Stack>
      </Container>
      <Container maxW="container.lg" py={20} centerContent>
        <Stack direction={["column", "row"]} spacing={12}>
          <Box flexGrow={1}>
            <Heading size="2xl" py={6}>
              Ready to stand out online?
            </Heading>
            <Button>Schedule A Consultation</Button>
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
