import {
  Box,
  Icon,
  Flex,
  Image,
  Text,
  Stack,
  useColorMode,
  Button,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { FaSun, FaMoon, FaBars, FaPhoneAlt } from "react-icons/fa";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useSound from "use-sound";
import {
  BrowserView,
  MobileView
} from "react-device-detect";

export default function NavBar() {
  const [play] = useSound<any>("/sounds/pup-fat.mp3");
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box pos={["fixed"]} top={0} left={0} zIndex={2} px={8} py={6} w="full">
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Link href="/" passHref>
            <Image
              src={
                colorMode === "dark"
                  ? "/logos/webprism_diamond_white.svg"
                  : "/logos/webprism_diamond.svg"
              }
              height={10}
              width={8}
              alt="WEBPRISM diamond logo"
              onClick={play as any}
            />
          </Link>
          <BrowserView>
            <Stack direction="row" spacing={[4, 8]} alignItems={"center"}>
              <Link href="/posts" passHref>
                <Text cursor={"pointer"}>Blog</Text>
              </Link>
              <Link href="/portfolio" passHref>
                <Text cursor={"pointer"}>Portfolio</Text>
              </Link>
              <Link href="/contact" passHref>
                <Button rightIcon={<Icon as={FaPhoneAlt} /> }>Contact</Button>
              </Link>
              <ColorModeSwitcher
                colorMode={colorMode}
                toggleColorMode={toggleColorMode}
              />
            </Stack>
          </BrowserView>
          <MobileView>
            <MobileMenu
              colorMode={colorMode}
              toggleColorMode={toggleColorMode}
            />
          </MobileView>
        </Flex>
      </Box>
    </>
  );
}

function MobileMenu({ colorMode, toggleColorMode }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      onClose()
    };

    router.events.on("routeChangeStart", handleRouteChange);

    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, []);

  return (
    <>
      <Icon as={FaBars} onClick={onOpen} h={8} w={8} />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader w="full" justifyContent={"space-between"}>
            <ColorModeSwitcher
              colorMode={colorMode}
              toggleColorMode={toggleColorMode}
            />
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing={4} mt={4}>
              <Link href="/posts" passHref>
                <Text fontSize={"2xl"} cursor={"pointer"}>Blog</Text>
              </Link>
              <Link href="/portfolio" passHref>
                <Text fontSize={"2xl"} cursor={"pointer"}>Portfolio</Text>
              </Link>
              <Link href="/contact" passHref>
                <Text fontSize={"2xl"} fontWeight={600} cursor={"pointer"}>Contact</Text>
              </Link>
            </Stack>
          </DrawerBody>
          {/* <DrawerFooter>
            <Link href="/contact" passHref>
              <Button>Contact</Button>
            </Link>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
    </>
  );
}

function ColorModeSwitcher({ colorMode, toggleColorMode }: any) {
  const [playOn] = useSound<any>("/sounds/switch-on.mp3");
  const [playOff] = useSound<any>("/sounds/switch-off.mp3");

  function handleClick() {
    toggleColorMode();
    if (colorMode === "dark") playOn();
    else playOff();
  }

  return (
    <Icon
      cursor={"pointer"}
      as={colorMode === "dark" ? FaSun : FaMoon}
      height={4}
      width={4}
      onClick={handleClick}
    />
  );
}
