import NextLink from "next/link";
import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  GridItem,
  Stack,
  Icon,
  Divider,
  Link,
  AspectRatio,
  Image,
} from "@chakra-ui/react";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import FreeStickerBro from "./FreeStickerBro";

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
                  <Link
                    target="_blank"
                    href="https://www.facebook.com/webprismco"
                  >
                    <Icon as={FaFacebookF} h={8} w={8} />
                  </Link>
                  <Link
                    target="_blank"
                    href="https://www.linkedin.com/company/webprism/"
                  >
                    <Icon as={FaLinkedin} h={8} w={8} />
                  </Link>
                  <Link
                    target="_blank"
                    href="https://www.instagram.com/webprism.co/"
                  >
                    <Icon as={FaInstagram} h={8} w={8} />
                  </Link>
                </Stack>
                <Link href="https://www.tawk.to/?pid=9wcjas7" target="_blank">
                  <AspectRatio ratio={150 / 78} width={100}>
                    <Image
                      src="https://partners.tawk.to/badges/partner-black.png"
                      alt="tawk.to partner badge"
                    />
                  </AspectRatio>
                </Link>
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
                <NextLink href="https://mission.webprism.xyz" passHref>
                  <Link>MVP</Link>
                </NextLink>
                <NextLink href="/calculator" passHref>
                  <Link>
                    Cost of Marketing
                  </Link>
                </NextLink>
                <NextLink href="/links" passHref>
                  <Link>Links</Link>
                </NextLink>
                <NextLink href="/contact" passHref>
                  <Link>Contact Us</Link>
                </NextLink>
              </Stack>
            </GridItem>
          </SimpleGrid>
          <Box>
            <Text display="inline" textAlign={"center"}>
              thanks for stopping by{" "}
            </Text>
            <FreeStickerBro />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
