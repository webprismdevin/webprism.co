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
          <Stack direction="row" spacing={8} alignItems={"center"}>
            <Link href="/posts" passHref>
              <Text>Blog</Text>
            </Link>
            <Link href="/portfolio" passHref>
              <Text>Portfolio</Text>
            </Link>
            <Link href="/contact" passHref>
              <Text>Contact</Text>
            </Link>
            <ColorModeSwitcher colorMode={colorMode} toggleColorMode={toggleColorMode} />
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

function ColorModeSwitcher({ colorMode, toggleColorMode }: any){
    const [playOn] = useSound<any>("/sounds/switch-on.mp3")
    const [playOff] = useSound<any>("/sounds/switch-off.mp3")

    function handleClick(){
        toggleColorMode();
        if(colorMode === 'dark') playOn();
        else playOff();
    }

    return (
        <Icon as={colorMode === 'dark' ? FaSun : FaMoon} height={4} width={4} onClick={handleClick} />
    )
}