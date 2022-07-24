import { Box, Stack, Link, useColorMode, Text } from "@chakra-ui/react";
import NextLink from "next/link";
import { AnimatePresence, motion, useCycle } from "framer-motion";

declare interface FooterLink {
  text: string;
  link: string;
  _key: string;
}

const MotionStack = motion(Stack);

export default function FootNav({ data }: any) {
  const { colorMode } = useColorMode();
  const [open, cycleOpen] = useCycle(false, true);

  if (!data) return null;

  return (
    <Box w="full" pos="fixed" bottom={0} left={0} px={4} py={4}>
      <Stack direction={"row"} w="full">
        <Text
          onMouseEnter={() => cycleOpen()}
          onMouseLeave={() => cycleOpen()}
          color={colorMode === "light" ? "blackAlpha.600" : "whiteAlpha.600"}
        >
          MENU
        </Text>
        <AnimatePresence>
          {open && (
            <MotionStack
              direction="row"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.3 } }}
              exit={{ opacity: 0, transition: { delay: 0.2, duration: 0.3 } }}
            >
              {data.footerLinks.map((link: FooterLink) => (
                <NextLink href="contact" key={link._key}>
                  <Link
                    textTransform={"uppercase"}
                    color={colorMode === "light" ? "black" : "white"}
                  >
                    Contact
                  </Link>
                </NextLink>
              ))}
            </MotionStack>
          )}
        </AnimatePresence>
      </Stack>
    </Box>
  );
}
