import { Box, Stack, Link, useColorMode } from "@chakra-ui/react";
import NextLink from "next/link";

declare interface FooterLink {
  text: string;
  link: string;
  _key: string;
}

export default function FootNav({ data }: any) {
  const { colorMode } = useColorMode()

  if (!data) return null;

  return (
    <Box w="full" pos="fixed" bottom={0} left={0} px={4} py={4}>
      <Stack direction={"row"} w="full">
        {data.footerLinks.map((link: FooterLink) => (
          <NextLink href="contact" key={link._key}>
            <Link fontSize="xl" color={colorMode === "light" ? "blackAlpha.600" : "whiteAlpha.600"}>Contact</Link>
          </NextLink>
        ))}
      </Stack>
    </Box>
  );
}
