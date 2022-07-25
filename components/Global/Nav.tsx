import { Box, Stack, Link, useColorMode, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { AnimatePresence, motion, useCycle } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect } from "react";

declare interface NavLink {
  text: string;
  link: string;
  _key: string;
}

const MotionStack = motion(Stack);

export default function Nav({ data }: any) {
  const { colorMode } = useColorMode();
  const [open, cycleOpen] = useCycle(false, true);
  const router = useRouter();

  // useEffect(() => {
  //   if (open) {
  //     cycleOpen()
  //   }
  // }, [router.asPath]);

  if (!data) return null;

  return (
    <Box w={["full", "auto"]} pos="fixed" top={10} right={0} zIndex={1} px={4} py={4} bgColor={[open ? "blackAlpha.800" : 'transparent', 'transparent']} transition={"background-color 300ms ease"}>
      <Stack
        direction={["column-reverse", "row"]}
        w="full"
        align="flex-end"
        justify="flex-end"
        fontSize={28}
        fontWeight={600}
      >
        <AnimatePresence exitBeforeEnter>
          {open && (
            <MotionStack
              direction={["column", "row"]}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { delay: 0, duration: 0.3 } }}
              exit={{ opacity: 0 }}
              textAlign="right"
            >
              {router.asPath !== "/" && (
                <NextLink href="/">
                  <Link color={colorMode === "light" ? "black" : "white"} onClick={() => cycleOpen()}>
                    HOME
                  </Link>
                </NextLink>
              )}
              {data.navLinks.map((link: NavLink) => (
                <NextLink href={link.link} key={link._key}>
                  <Link
                    textTransform={"uppercase"}
                    color={colorMode === "light" ? "black" : "white"}
                    onClick={() => cycleOpen()}
                  >
                    {link.text}
                  </Link>
                </NextLink>
              ))}
            </MotionStack>
          )}
        </AnimatePresence>
        <Box>
          <Text
            cursor={"pointer"}
            userSelect={"none"}
            onClick={() => cycleOpen()}
            color={colorMode === "light" ? "blackAlpha.600" : "whiteAlpha.600"}
          >
            {open ? "CLOSE" : "MENU"}
          </Text>
        </Box>
      </Stack>
    </Box>
  );
}
