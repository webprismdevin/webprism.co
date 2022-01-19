import {
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Image,
  Link,
  Stack,
  Flex,
  Box,
} from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function FreeStickerBro() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <MotionBox
        whileHover={{
          rotate: 45,
        }}
      >
        <Text display="inline" onClick={onOpen}>👋</Text>
      </MotionBox>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Ah, You Found Me!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Stack spacing={6} w="full">
              <Text>
                Thanks for exploring our site! As a token of appreciation, we
                made this sticker for you.
              </Text>
              <Flex w="full" justifyContent={"center"}>
                <Image
                  borderRadius={3}
                  src="/logos/sticker.jpg"
                  h={64}
                  w={64}
                  alt="WEBRPISM holo sticker"
                />
              </Flex>
              <Text>It&apos;s completely free, shipping and all.</Text>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <Button variant="ghost" onClick={onClose}> Nah, I don&apos;t want it</Button>
            <Link
              textDecor={"none"}
              _hover={{ textDecor: "none" }}
              href="https://webprism.myshopify.com/cart/41265991811245:1?channel=buy_button"
              target="_blank"
            >
              <Button mr={3}>Ship it!</Button>
            </Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
