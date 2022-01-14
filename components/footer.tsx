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
  Icon
} from "@chakra-ui/react";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";

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
              <Stack alignItems={"flex-start"} mt={8}>
                <Heading size="sm">Connect with us</Heading>
                <Stack direction="row" spacing={4}>
                  <Link href="https://www.instagram.com/webprism.co/" passHref>
                    <Icon as={FaFacebookF} h={8} w={8} />
                  </Link>
                  <Link href="https://www.linkedin.com/company/webprism/" passHref>
                  <Icon as={FaLinkedin} h={8} w={8} />
                  </Link>
                  <Link href="https://www.facebook.com/webprismco" passHref>
                  <Icon as={FaInstagram} h={8} w={8} />
                  </Link>
                </Stack>
              </Stack>
            </GridItem>
            <GridItem colSpan={4} rowSpan={1} textAlign={"right"}>
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
          </SimpleGrid>
          <Text textAlign={"center"}>thanks for stopping by 👋</Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
