import { Box, Flex, Button } from "@chakra-ui/react"
import { FaRegCalendar } from "react-icons/fa"
import NextImage from "next/image"
import NextLink from "next/link"

export default function NavBar() {
  return (
    <Box
      py={[3]}
      px={[2]}
      w="full"
      position={"sticky"}
      top={0}
      left={0}
      bgColor={"brand.light"}
      zIndex={1}
    >
      <Flex w="full" justify={"space-between"} align="center">
        {/* <IconButton variant="ghost" as={} boxSize={7} aria-label="menu button" /> */}
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
            aria-label="schedule your strategy session"
          >
            Schedule 🗓
          </Button>
        </NextLink>
      </Flex>
    </Box>
  );
}
