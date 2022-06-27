import NextLink from "next/link";
import {
  Box,
  Container,
  Heading,
  Stack,
  Icon,
  Link,
} from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <Box py={40}>
      <Container maxW="container.xl">
        <Heading mb={[8, 0]}>WEBPRISM</Heading>
        <Stack direction={["column", "row"]} spacing={10}>
          <Stack direction="row">
            <Icon as={FaFacebook} boxSize={6} />
            <Icon as={FaInstagram} boxSize={6} />
            <Icon as={FaLinkedin} boxSize={6} />
          </Stack>
          <Stack>
            <NextLink href={"/cost-of-marketing"}>
              <Link>Cost of Marketing Calculator</Link>
            </NextLink>
            <NextLink href={"http://mission.webprism.xyz/"}>
              <Link>Create Your Mission Statement</Link>
            </NextLink>
            <NextLink href={"/contact"}>
              <Link>Contact Us</Link>
            </NextLink>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
