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
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";

export default function ReHome({ data }: { data: {} }) {
  function returnWindowWidth() {
    if (process.browser) return window.innerWidth;

    return 1000;
  }

  return (
    <>
      <Container pt={60} pb={40} maxW="container.xl">
        <Stack direction={["row"]} w="full">
          <Stack spacing={8} maxW={["100%", "40%"]} alignItems={"flex-start"}>
            <Heading size="4xl">
              It&apos;s Time To Unlock Your Potential Online
            </Heading>
            <Button>Here&apos;s How →</Button>
          </Stack>
          <Box />
        </Stack>
      </Container>
      <Container maxW="container.xl" py={40}>
        <SimpleGrid templateColumns={"repeat(3, 1fr)"} gap={8}>
          <GridItem colSpan={1} p={20}>
            <Heading textAlign={"center"} size="lg">
              Professional Services
            </Heading>
            <Divider my={4} />
            <Text textAlign={"center"}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </Text>
          </GridItem>
          <GridItem colSpan={1} p={20}>
            <Heading textAlign={"center"} size="lg">
              Artists &amp; Craftspeople
            </Heading>
            <Divider my={4} />
            <Text textAlign={"center"}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </Text>
          </GridItem>
          <GridItem colSpan={1} p={20}>
            <Heading textAlign={"center"} size="lg">
              Retail &amp; E-Commerce
            </Heading>
            <Divider my={4} />
            <Text textAlign={"center"}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </Text>
          </GridItem>
        </SimpleGrid>
      </Container>
      <Flex justifyContent={"flex-end"}>
        <Stack spacing={4} p={20} maxW={["100%", "60%"]} bg="gray.200">
          <Heading size="2xl">
            You&apos;re a professional. You deserve to look like one.
          </Heading>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
            sequi maiores molestias beatae aspernatur sunt assumenda esse optio
            repellendus, voluptate ut praesentium dolore et neque commodi ipsum
            placeat facilis consequatur.
          </Text>
        </Stack>
      </Flex>
      <AnimatedCircle />
      <Box h={200} />
    </>
  );
}

function AnimatedCircle() {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });
  const [size, setSize] = useState(0);

  useEffect(() => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  useEffect(() => {
    const ftg = document.getElementById("ftg")!.offsetTop;

    window.addEventListener("scroll", () => {
      console.log(window.pageYOffset - ftg);
      setSize(window.pageYOffset - ftg);
    });

    return () => window.removeEventListener("scroll", () => {});
  }, []);

  function returnSize() {
    if (size < 0) return 800;

    return 800 + size * 3;
  }

  return (
    <Box
      w="full"
      mt={200}
      h={1200}
      pt={200}
      id="ftg"
      pos="relative"
      display="grid"
      placeItems="center"
      overflow={"hidden"}
    >
      <Box h={returnSize()} w={returnSize()} pos="absolute" zIndex={0}>
        <Image
          src={"/gray-circle.svg"}
          alt="decorative gray circle"
          h="100%"
          w="100%"
        />
      </Box>
      <Box zIndex={1}>
        <Container maxW="container.sm">
          <Heading size="4xl" textAlign={"center"}>
            Grow Into The Next Stage
          </Heading>
        </Container>
        <Box pt={20} opacity={size > 200 ? 1 : 0} transition={"opacity 400ms ease"}>
          <Container maxW="container.xl">
            <Stack direction={"column"} spacing={10}>
              <Heading>A solid foundation for growth marketing.</Heading>
              <Heading>Increase opportunities for sales online.</Heading>
              <Heading>
                Grow &amp; change, without relaunching your site again.
              </Heading>
            </Stack>
          </Container>
        </Box>
      </Box>
    </Box>);
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
