import { Box, Flex, Button } from "@chakra-ui/react";
import { FaRegCalendar } from "react-icons/fa";
import NextImage from "next/image";
import NextLink from "next/link";

export default function NavBar() {
  return (
    <Box
      py={[3]}
      px={[3]}
      w="full"
      position={"sticky"}
      top={0}
      left={0}
      zIndex={1}
      bgColor={"brand.light"}
    >
      <Flex w="full" justify={"space-between"} align="center">
        <Box boxSize={8}>
          <NextImage
            src={"/logos/logo_v2_black.png"}
            height={1080}
            width={1080}
            layout="responsive"
          />
        </Box>
        <NextLink href="/booknow">
          <Button
            bgColor={"brand.brightPink"}
            aria-label="schedule your strategy session"
          >
            Free Strategy Session
          </Button>
        </NextLink>
      </Flex>
    </Box>
  );
}
