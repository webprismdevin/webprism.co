import Link from "next/link";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  Stack,
} from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box py={40} color="white" bg={"gray.900"}>
      <Container maxW="container.xl">
        <Stack spacing={16}>
          <SimpleGrid
            w="full"
            templateColumns={"repeat(5, 1fr)"}
            templateRows={"repeat(1, 1fr)"}
            gap={6}
          >
            <GridItem colSpan={1} rowSpan={1}>
              <Heading size="lg">WEBPRISM</Heading>
            </GridItem>
            <GridItem colSpan={2} rowSpan={1} textAlign={"right"}>
              <Stack>
                <Link href="/posts" passHref>
                  <Text>Blog</Text>
                </Link>
                <Link href="/portfolio" passHref>
                  <Text>Portfolio</Text>
                </Link>
                <Link href="https://supershops.webprism.xyz" passHref>
                  <Text>SuperShops</Text>
                </Link>
                <Link href="https://mvp.webprism.co" passHref>
                  <Text>MVP</Text>
                </Link>
                <Link href="/contact" passHref>
                  <Text>Contact Us</Text>
                </Link>
              </Stack>
            </GridItem>
            <GridItem colSpan={2} rowSpan={1} textAlign={"right"}>
              <Stack>
                <Text>Instagram</Text>
                <Text>LinkedIn</Text>
                <Text>Facebook</Text>
              </Stack>
            </GridItem>
          </SimpleGrid>
          <Text textAlign={"center"}>thanks for stopping by 👋</Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
