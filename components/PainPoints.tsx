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
  Icon,
  Text,
  Divider
} from "@chakra-ui/react";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function PainPoints() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [opOne, setOpOne] = useState(false);
  const [opTwo, setOpTwo] = useState(false);
  const [opThree, setOpThree] = useState(false);

  const showButton = () => {
    if(opOne) return true
    if(opTwo) return true
    if(opThree) return true

    return false
  }

  return (
    <>
      <Container maxW="container.xl" py={40}>
        <Stack spacing={[6, 12]}>
          <Heading as="h2" textAlign={"center"}>
            What&apos;s Your Focus This Year?
          </Heading>
          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            direction={["column", "row"]}
            gap={[6, 0]}
          >
            <Box
              w={["full", "25%"]}
              shadow={"lg"}
              px={8}
              py={4}
              borderRadius={4}
            >
              <Checkbox
                spacing="1rem"
                checked={opOne}
                onChange={(e) => setOpOne(e.target.checked)}
              >
                {questions.opOne}
              </Checkbox>
            </Box>
            <Box
              w={["full", "25%"]}
              shadow={"lg"}
              px={8}
              py={4}
              borderRadius={4}
            >
              <Checkbox
                spacing="1rem"
                checked={opTwo}
                onChange={(e) => setOpTwo(e.target.checked)}
              >
                {questions.opTwo}
              </Checkbox>
            </Box>
            <Box
              w={["full", "25%"]}
              shadow={"lg"}
              px={8}
              py={4}
              borderRadius={4}
            >
              <Checkbox
                spacing="1rem"
                checked={opThree}
                onChange={(e) => setOpThree(e.target.checked)}
              >
                {questions.opThree}
              </Checkbox>
            </Box>
          </Flex>
          {/* <Flex justifyContent={"space-around"} alignItems={"center"} direction={["column", "row"]} gap={[6, 0]}>
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
          </Flex> */}
          <Box textAlign={"center"} minH={"2.5em"}>
            {showButton() && 
              <Button onClick={onOpen} rightIcon={<Icon as={FaPaperPlane}/>}>Submit</Button>
            }
          </Box>
        </Stack>
      </Container>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Let&apos;s See What We Can Do!</ModalHeader>
          <ModalCloseButton />
          <Divider />
          <ModalBody py={6}>
            <Stack spacing={12}>
              {opOne && (
                <Box>
                  <Heading size="sm">{questions.opOne}</Heading>
                  {answers.opOne}
                </Box>
              )}
              {opTwo && (
                <Box>
                  <Heading size="sm">{questions.opTwo}</Heading>
                  {answers.opTwo}
                </Box>
              )}
              {opThree && (
                <Box>
                  <Heading size="sm">{questions.opThree}</Heading>
                  {answers.opThree}
                </Box>
              )}
            </Stack>
          </ModalBody>
          <ModalFooter maxW="full">
            {/* <Button mr={3} onClick={onClose}>
              Close
            </Button> */}
            <Stack spacing={4} w="full" textAlign={"center"}>
              <Heading size="md">Want to dive deeper?</Heading>
              <Button>Schedule a Consultation</Button>
            </Stack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

const questions = {
  opOne: "I want to drive more traffic to my website.",
  opTwo: "I want to understand who my site visitors are.",
  opThree: "I want to create more sales opportunities online.",
};

const answers = {
  opOne: <Text>Answer to option 1</Text>,
  opTwo: <Text>Answer to option 2</Text>,
  opThree: <Text>Answer to option 3</Text>,
};
