import {
  Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Flex,
  Checkbox,
  Container,
  Stack,
  Heading,
  Icon
} from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";

export default function PainPoints() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Container maxW="container.xl" py={40}>
        <Stack spacing={[6, 12]}>
          <Heading as="h2" textAlign={"center"}>What&apos;s Your Focus This Year?</Heading>
          <Flex justifyContent={"space-between"} alignItems={"center"} direction={["column", "row"]} gap={[6, 0]}>
            <Box w={["full", "25%"]} shadow={"lg"} px={8} py={4} borderRadius={4}>
              <Checkbox spacing="1rem">
                I want to drive more traffic to my website.
              </Checkbox>
            </Box>
            <Box w={["full", "25%"]} shadow={"lg"} px={8} py={4} borderRadius={4}>
              <Checkbox spacing="1rem">
                I want to understand who my site visitors are.
              </Checkbox>
            </Box>
            <Box w={["full", "25%"]} shadow={"lg"} px={8} py={4} borderRadius={4}>
              <Checkbox spacing="1rem">
                I want to understand who my site visitors are.
              </Checkbox>
            </Box>
          </Flex>
          <Flex justifyContent={"space-around"} alignItems={"center"} direction={["column", "row"]} gap={[6, 0]}>
            <Box w={["full", "25%"]} shadow={"lg"} px={8} py={4} borderRadius={4}>
              <Checkbox spacing="1rem">
                I want to drive more traffic to my website.
              </Checkbox>
            </Box>
            <Box w={["full", "25%"]} shadow={"lg"} px={8} py={4} borderRadius={4}>
              <Checkbox spacing="1rem">
                I want to understand who my site visitors are.
              </Checkbox>
            </Box>
          </Flex>
          <Box textAlign={"center"}>
            <Button onClick={onOpen} rightIcon={<Icon as={FaPaperPlane}/>}>Submit</Button>
          </Box>
        </Stack>
      </Container>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
