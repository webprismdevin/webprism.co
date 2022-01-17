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
  Divider,
  useColorMode,
} from "@chakra-ui/react";
import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import Link from "next/link";

export default function PainPoints() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode } = useColorMode()

  const [opOne, setOpOne] = useState(false);
  const [opTwo, setOpTwo] = useState(false);
  const [opThree, setOpThree] = useState(false);
  const [opFour, setOpFour] = useState(false);
  const [opFive, setOpFive] = useState(false);

  const showButton = () => {

    if (opOne) return true;
    if (opTwo) return true;
    if (opThree) return true;
    if (opFour) return true;
    if (opFive) return true;

    return false;
  };

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
          <Flex
            justifyContent={"space-around"}
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
                checked={opFour}
                onChange={(e) => setOpFour(e.target.checked)}
              >
                {questions.opFour}
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
                checked={opFive}
                onChange={(e) => setOpFive(e.target.checked)}
              >
                {questions.opFive}
              </Checkbox>
            </Box>
          </Flex>
          <Box textAlign={"center"} minH={"2.5em"}>
            {showButton() && (
              <Button onClick={onOpen} rightIcon={<Icon as={FaPaperPlane} />}>
                Submit
              </Button>
            )}
          </Box>
        </Stack>
      </Container>
      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent bg={colorMode === 'dark' ? 'brand.dark' : 'brand.light'}>
          <ModalHeader>Some thoughts from WEBPRISM</ModalHeader>
          <ModalCloseButton />
          <Divider />
          <ModalBody py={6}>
            <Stack spacing={12}>
              {opOne && (
                <Box>
                  <Heading size="sm" mb={4}>
                    {questions.opOne}
                  </Heading>
                  {answers.opOne}
                </Box>
              )}
              {opTwo && (
                <Box>
                  <Heading size="sm" mb={4}>{questions.opTwo}</Heading>
                  {answers.opTwo}
                </Box>
              )}
              {opThree && (
                <Box>
                  <Heading size="sm" mb={4}>{questions.opThree}</Heading>
                  {answers.opThree}
                </Box>
              )}
              {opFour && (
                <Box>
                  <Heading size="sm" mb={4}>{questions.opFour}</Heading>
                  {answers.opFour}
                </Box>
              )}
              {opFive && (
                <Box>
                  <Heading size="sm" mb={4}>{questions.opFive}</Heading>
                  {answers.opFive}
                </Box>
              )}
            </Stack>
          </ModalBody>
          <ModalFooter maxW="full">
            <Stack spacing={4} w="full" textAlign={"center"}>
              <Heading size="md">Want to dive deeper?</Heading>
              <Link href="/booknow" passHref>
                <Button>Schedule a Consultation</Button>
              </Link>
            </Stack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

const questions = {
  opOne: "Driving more traffic to our website/business.",
  opTwo: "Aligning our website & presence with our brand.",
  opThree: "Growing our e-commerce business.",
  opFour: "Simplifying our digital marketing processes.",
  opFive: "I need a website, and I'm not sure where to start.",
};

const answers = {
  opOne: (
    <Stack spacing={4}>
      <Text>
        There are an infinite number of ways to drive traffic to your website.
      </Text>
      <Text>
        When we&apos;re working with a client to drive traffic to their
        homepage, or a landing page, we focus on the process - experiment,
        evaluate, refine, repeat. Hopefully you&apos;re doing something (or a
        host of things) to bring visitors to your site, whether it&apos;s social
        media content, running a newsletter, or writing blog posts &amp; sharing
        them; the important part is you&apos;re doing something,{" "}
        <strong>and tracking it</strong>. Using a tool like Google Analytics to
        track{" "}
        <em>
          which activities are most successful, and which are least successful
          so you can focus on what&apos;s working
        </em>
        .
      </Text>
    </Stack>
  ),
  opTwo: <Stack spacing={4}>
    <Text>We&apos;ve been there - and the best first step we&apos;ve found to define the direction for your website (and digital presence more broadly) is to write out what you want to your audience to know about you, then take each statement back to an explanation that someone who has no knowledge of you would be able to understand.</Text>
    <Text>You can take a look at our <Link href="/" passHref><u style={{cursor: 'pointer'}}>client onboarding questionnaire</u></Link> for some direction.</Text>
    <Text>From there, create a mood board - get a sense of what your visual personality looks like, and be authentic - add what you like to your mood board, not what you think other people will like.</Text>
  </Stack>,
  opThree: <Stack spacing={4}><Text>You can drive as many people as possible to see your products online, but your site needs to be designed to connect with your shoppers and convert them in that moment, or create another buying opportunity off-site (via email or other messaging).</Text><Text>Content is one of the most effective drivers of e-commerce traffic - having a platform that enables you to track what content is most successful, and refine the most effective strategies.</Text><Text>Ensuring basics like a site that loads quickly, has prominent calls to action and great photography are necessary to increase the likelihood that visitors end up buying, and coming back.</Text></Stack>,
  opFour: <Stack spacing={4}>
    <Text>This is one of our favorite things to do for our clients - taking manual processes and automating them is a great move to free up your time and create more consistent action. Draw out the logic of a process on a big piece of paper or whiteboard - then look for ways to simplify.</Text>
    <Text>Once you&apos;ve simplified your process, dig into services like Zapier, Automate.io or Integromat - these services let you automate tasks like responding to for submissions on your website, sending notification emails to customers, and so much more</Text>
    <Text>If you&apos;re not sure where to start - <Link href="/booknow" passHref><u style={{cursor: 'pointer'}}>schedule a consultation</u></Link> with us and we can give you some ideas. No obligation.</Text>
  </Stack>,
  opFive: <Stack spacing={4}>
    <Text>Start with building a brand identity. You won&apos;t have all the answers in the beginnnig, brand comes with time. However, you can start with tasks such as defining a mission statement <Link href="https://mvp.webprism.co" passHref><u style={{cursor: 'pointer'}}>(we built an app to help with that)</u></Link>, deciding on a color pallete, creating a mood board to represent your brand personality and some visuals.</Text>
    <Text>Our <Link href="/" passHref><u style={{cursor: 'pointer'}}>client onboarding questionnaire</u></Link> is another helpful resource to give you an idea of what content you need, and provide direction on information to include on your site.</Text>
    <Text>If you&apos;re still not sure where to begin, <Link href="/booknow" passHref><u style={{cursor: 'pointer'}}>let&apos;s talk</u></Link>.</Text>
  </Stack>
};
