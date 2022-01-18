import NextLink from "next/link";
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  Stack,
  Icon,
  Divider,
  Link
} from "@chakra-ui/react";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Box py={40}>
      <Container maxW="container.xl">
        <Stack spacing={16}>
          <Divider />
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
                  <NextLink href="https://www.instagram.com/webprism.co/" passHref>
                    <Icon as={FaFacebookF} h={8} w={8} />
                  </NextLink>
                  <NextLink
                    href="https://www.linkedin.com/company/webprism/"
                    passHref
                  >
                    <Icon as={FaLinkedin} h={8} w={8} />
                  </NextLink>
                  <NextLink href="https://www.facebook.com/webprismco" passHref>
                    <Icon as={FaInstagram} h={8} w={8} />
                  </NextLink>
                </Stack>
              </Stack>
            </GridItem>
            <GridItem colSpan={4} rowSpan={1} textAlign={"right"}>
              <Stack>
                <NextLink href="/posts" passHref>
                  <Link>Blog</Link>
                </NextLink>
                <NextLink href="/portfolio" passHref>
                  <Link>Portfolio</Link>
                </NextLink>
                <NextLink href="https://supershops.webprism.xyz" passHref>
                  <Link>SuperShops</Link>
                </NextLink>
                <NextLink href="https://mvp.webprism.co" passHref>
                  <Link>MVP</Link>
                </NextLink>
                <NextLink href="/contact" passHref>
                  <Link>Contact Us</Link>
                </NextLink>
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
