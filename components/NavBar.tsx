import {
  Box,
  Icon,
  Flex,
  Image,
  Text,
  Stack,
  useColorMode
} from "@chakra-ui/react";
import Link from "next/link";
import { FaSun, FaMoon } from "react-icons/fa";
import useSound from "use-sound";

export function NavBar() {
  const [play] = useSound<any>("/sounds/pup-fat.mp3")
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <>
      <Box pos={["fixed"]} top={0} left={0} zIndex={2} px={8} py={6} w="full">
        <Flex justifyContent={"space-between"} alignItems={"center"}>
          <Link href="/" passHref>
              <Image src={colorMode === 'dark' ? "/logos/webprism_diamond_white.svg" : "/logos/webprism_diamond.svg"} height={10} width={8} alt="WEBPRISM diamond logo" onClick={play as any}/>
          </Link>
          <Stack direction="row" spacing={[4, 8]} alignItems={"center"}>
            <Link href="/posts" passHref>
              <Text cursor={"pointer"}>Blog</Text>
            </Link>
            <Link href="/portfolio" passHref>
              <Text cursor={"pointer"}>Portfolio</Text>
            </Link>
            <Link href="/contact" passHref>
              <Text cursor={"pointer"}>Contact</Text>
            </Link>
            <ColorModeSwitcher colorMode={colorMode} toggleColorMode={toggleColorMode} />
          </Stack>
        </Flex>
      </Box>
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
        <Icon cursor={"pointer"} as={colorMode === 'dark' ? FaSun : FaMoon} height={4} width={4} onClick={handleClick} />
    )
}