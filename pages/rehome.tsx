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
      <Box bg="gray.400" pb={60}>
        <Container maxW="container.md">
          <Stack>
            <Heading>A solid foundation for growth marketing.</Heading>
            <Heading>Increase opportunities for sales online.</Heading>
            <Heading>
              Grow &amp; change, without relaunching your site again.
            </Heading>
          </Stack>
        </Container>
      </Box>
      <Box py={80}>
        Nothin
      </Box>
    </>
  );
}

function AnimatedCircle() {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0
  })
  const [ftgSize, setSize] = useState(0)

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

  return (
    <Box w="full" py={80} id="ftg" overflow={"hidden"}>
      <Flex
        borderRadius={
          800 + ftgSize < dimensions.width
            ? "50%"
            : `${50 - (800 + ftgSize + 100) * 0.1}%`
        }
        style={{
          transition: "border-radius 400ms ease",
        }}
        bg="gray.400"
        h={ftgSize < 0 ? 800 : 800 + ftgSize * 1.2}
        w={ftgSize < 0 ? 800 : 800 + ftgSize * 1.2}
        maxW={"full"}
        justifyContent={"center"}
        alignItems={"center"}
        marginLeft={"auto"}
        marginRight={"auto"}
        flexDir={"column"}
      >
        <Container maxW="container.md" pos="sticky" top={200}>
          <Heading size="4xl" textAlign={"center"}>
            A foundation to grow
          </Heading>
        </Container>
      </Flex>
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
