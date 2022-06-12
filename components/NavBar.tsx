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
  Divider,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { FaSun, FaMoon, FaBars, FaPaperPlane } from "react-icons/fa";
import { useRouter } from "next/router";
import { useEffect } from "react";
import useSound from "use-sound";
import { BrowserView, MobileView } from "react-device-detect";

export default function NavBar() {
  const [play] = useSound<any>("/sounds/pup-fat.mp3");
  const { colorMode, toggleColorMode } = useColorMode();
  const router = useRouter();

  return (
    <>
      <Box pos={["fixed"]} top={0} left={0} zIndex={2} px={[4, 8]} py={6} w="full">
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <NextLink href="/" passHref>
            <Image
              src={
                colorMode === "dark"
                  ? "/logos/webprism_diamond_white.svg"
                  : "/logos/webprism_diamond.svg"
              }
              cursor={"pointer"}
              height={10}
              width={8}
              alt="WEBPRISM diamond logo"
              onClick={play as any}
            />
          </NextLink>
          <BrowserView>
            <Stack direction="row" spacing={[4, 8]} alignItems={"center"}>
              {router.pathname !== "/" && <NextLink href="/" passHref>
                <Link color={colorMode === "dark" ? "white" : "dark"}>
                  Home
                </Link>
              </NextLink>}
              <NextLink href="/portfolio" passHref>
                <Link color={colorMode === "dark" ? "white" : "dark"}>
                  Portfolio
                </Link>
              </NextLink>
              <NextLink href="/posts" passHref>
                <Link color={colorMode === "dark" ? "white" : "dark"}>
                  Blog
                </Link>
              </NextLink>
              <Link
                href="https://mission.webprism.xyz"
                target="_blank"
                color={colorMode === "dark" ? "white" : "dark"}
              >
                MVP
              </Link>
              <NextLink href="/contact" passHref>
                <Button variant={"outline"} rightIcon={<Icon as={FaPaperPlane} />}>Contact</Button>
              </NextLink>
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
              router={router}
            />
          </MobileView>
        </Flex>
      </Box>
    </>
  );
}

function MobileMenu({ colorMode, toggleColorMode, router }: any) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const handleRouteChange = () => {
      onClose();
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
        <DrawerContent bg={colorMode === "dark" ? "brand.dark" : "brand.light"}>
          <DrawerCloseButton />
          <DrawerHeader w="full" justifyContent={"space-between"}>
            <ColorModeSwitcher
              colorMode={colorMode}
              toggleColorMode={toggleColorMode}
            />
          </DrawerHeader>
          <DrawerBody>
            <Stack spacing={4} mt={4}>
              {router.pathname !== "/" && <NextLink href="/" passHref>
                <Link fontSize={"2xl"} cursor={"pointer"}>
                  Home
                </Link>
              </NextLink>}
              {router.pathname !== "/" && <Divider />}
              <NextLink href="/portfolio" passHref>
                <Link fontSize={"2xl"} cursor={"pointer"}>
                  Portfolio
                </Link>
              </NextLink>
              <Divider />
              <NextLink href="/posts" passHref>
                <Link fontSize={"2xl"} cursor={"pointer"}>
                  Blog
                </Link>
              </NextLink>
              <Divider />
                <Link href="https://mission.webprism.xyz" target="_blank" fontSize={"2xl"} cursor={"pointer"}>
                  MVP
                </Link>
              <Divider />
              <NextLink href="/contact" passHref>
                <Link color={colorMode === 'dark' ? 'brand.brightPink' : 'brand.dark'} fontSize={"2xl"} fontWeight={600} cursor={"pointer"}>
                  Contact
                </Link>
              </NextLink>
            </Stack>
          </DrawerBody>
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
