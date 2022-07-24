import { imageBuilder, sanity } from "@/lib/sanity";
import {
  Box,
  Button,
  Divider,
  Heading,
  Stack,
  Text,
  useColorMode,
} from "@chakra-ui/react";
import NextLink from "next/link";
import NextImage from "next/image";
import Head from "next/head";
import gradient from "../public/mesh-gradient.png";

export default function Index({ page }: any) {
  const { colorMode } = useColorMode();

  return (
    <>
      <Head>
        <title>{page.pageTitle}</title>
        <meta name="description" content={page.pageDescription} />
      </Head>
      <Box pos="fixed" top={0} left={0} zIndex={-1} w="100vw" h="100vh">
        <NextImage
          layout="fill"
          objectFit="cover"
          alt="background gradient"
          src={gradient}
          placeholder="blur"
        />
      </Box>
      <Stack
        py={[8]}
        px={[4, 8]}
        spacing={[6]}
        w="full"
        minH={["auto", "100vh"]}
        direction={["column-reverse", "row"]}
        align={["center"]}
      >
        <Stack minW={["full", "50%"]} minH={["50vh", "auto"]} justify={["center", "stretch"]} align="center">
          <Stack maxW={["full", 480]} minW={["full", 320]} maxH={"50vh"}>
            <NextLink href={page.buttons.button1.link}>
              <Button size="xl" w="full" variant="outline">
                {page.buttons.button2.text}
              </Button>
            </NextLink>
            <NextLink href={page.buttons.button2.link}>
              <Button size="xl" w="full" bgColor={"brand.brightPink"}>
              {page.buttons.button2.text}
              </Button>
            </NextLink>
          </Stack>
        </Stack>
        <Stack minW="50%">
          <Stack align="flex-start" maxW={["100%", "500px"]}>
            <NextImage
              priority
              src={imageBuilder(page.definition.logo)
                .height(72)
                .width(72)
                .url()}
              height={36}
              width={36}
              quality={100}
              style={{
                filter: colorMode === "dark" ? "invert(100%)" : "invert(0%)",
              }}
            />
            <Stack direction={["row"]} align="center">
              <Heading>WEBPRISM</Heading>
              <Text
                fontSize="2xl"
                color={
                  colorMode === "light" ? "blackAlpha.600" : "whiteAlpha.600"
                }
              >
                [web-priz-<em>uhm</em>]
              </Text>
            </Stack>
            <Divider />
            {page.definition.definitions.map((def: string, i: number) => (
              <Stack key={1} direction={"row"}>
                <Text
                  color={
                    colorMode === "light" ? "blackAlpha.600" : "whiteAlpha.600"
                  }
                >
                  {i + 1}
                </Text>
                <Text fontSize={"xl"}>{def}</Text>
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}

export const getStaticProps = async () => {
  const query = `*[_type == "homepage" ][0]`;

  const result = await sanity.fetch(query);

  return {
    props: {
      page: result,
      revalidate: 10,
    },
  };
};
