import {
  Box,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Icon,
  Flex,
  Image,
  Text,
  Stack,
  Button,
  useColorMode
} from "@chakra-ui/react";
import Link from "next/link";
import { FaSun, FaMoon } from "react-icons/fa";
import useSound from "use-sound";

export function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [play] = useSound<any>("/sounds/pup-fat.mp3")
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <Box pos={["fixed"]} top={0} left={0} zIndex={2} px={8} py={6} w="full">
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Link href="/" passHref>
              <Image src={colorMode === 'dark' ? "/logos/webprism_diamond_white.svg" : "/logos/webprism_diamond.svg"} height={10} width={8} alt="WEBPRISM diamond logo" onClick={play as any}/>
          </Link>
          <Stack direction="row" spacing={8}>
            <Link href="">
              <Text>Blog</Text>
            </Link>
            <Link href="">
              <Text>Portfolio</Text>
            </Link>
            <Link href="">
              <Text>Contact</Text>
            </Link>
            <Icon as={colorMode === 'dark' ? FaSun : FaMoon} height={4} width={4} onClick={toggleColorMode} />
          </Stack>
        </Flex>
      </Box>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>WEBPRISM</DrawerHeader>

          <DrawerBody></DrawerBody>

          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
