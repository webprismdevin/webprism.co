import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Progress,
  Stack,
  Text,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useState } from "react";
import NextLink from "next/link";
import Head from "next/head";
import { animate, AnimatePresence, motion, useAnimation } from "framer-motion";

export default function Calculator() {
  const [hourly, setHourly] = useState(100);
  const [web, setWeb] = useState(4);
  const [email, setEmail] = useState(4);
  const [social, setSocial] = useState(12);
  const [seo, setSEO] = useState(2);
  const [ads, setAds] = useState(8);

  const [step, setStep] = useState(0);

  const costOfMarketing = hourly * (email + seo + web + social + ads);
  const totalHours = email + seo + web + social + ads;

  const MotionHStack = motion(HStack);

  const { isOpen, onOpen, onClose } = useDisclosure();

  function handleReset() {
    setStep(0);
    setWeb(4);
    setEmail(4);
    setSocial(12);
    setSEO(2);
    setAds(8);
    onClose();
  }

  const stepsArray = [
    <>
      <Box>
        <Text>
          What&apos;s the real cost of doing your own marketing? By assigning a
          value to your time, and adding up the hours you spend on your
          marketing activities per month, we can get a true cost of handling
          your own marketing.
        </Text>
      </Box>
    </>,
    <>
      <Text width={180}>Cost of your time</Text>
      <NumberInput
        maxW={100}
        value={hourly}
        onChange={(valueString) => setHourly(parseInt(valueString))}
        defaultValue={125}
        step={5}
        min={50}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Text width={180}>Dollars per hour</Text>
    </>,
    <>
      <Text width={180}>Website Improvements</Text>
      <NumberInput
        maxW={100}
        value={web}
        onChange={(valueString) => setWeb(parseInt(valueString))}
        defaultValue={2}
        step={1}
        min={0}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Text width={180}>Hours per month</Text>
    </>,
    <>
      <Text width={180}>Email Marketing</Text>
      <NumberInput
        maxW={100}
        value={email}
        onChange={(valueString) => setEmail(parseInt(valueString))}
        defaultValue={2}
        step={1}
        min={0}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Text width={180}>Hours per month</Text>
    </>,
    <>
      <Text width={180}>Social Media</Text>
      <NumberInput
        maxW={100}
        value={social}
        onChange={(valueString) => setSocial(parseInt(valueString))}
        defaultValue={2}
        step={1}
        min={0}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Text width={180}>Hours per month</Text>
    </>,
    <>
      <Text width={180}>SEO</Text>
      <NumberInput
        maxW={100}
        value={seo}
        onChange={(valueString) => setSEO(parseInt(valueString))}
        defaultValue={2}
        step={1}
        min={0}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Text width={180}>Hours per month</Text>
    </>,
    <>
      <Text width={180}>Managing Ads</Text>
      <NumberInput
        maxW={100}
        value={ads}
        onChange={(valueString) => setAds(parseInt(valueString))}
        defaultValue={2}
        step={1}
        min={0}
      >
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      <Text width={180}>Hours per month</Text>
    </>,
  ];

  return (
    <>
      <Container>
        <Stack spacing={4} py={10}>
          <Heading>Let&apos;s find your true cost of marketing!</Heading>
          <Divider />
          <AnimatePresence exitBeforeEnter>
            <MotionHStack
              minH={50}
              align="flex-start"
              key={step}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.1 } }}
              exit={{ opacity: 0, transition: { duration: 0.1 } }}
            >
              {stepsArray[step]}
            </MotionHStack>
          </AnimatePresence>
          <Progress value={(step / (stepsArray.length - 1)) * 100} />
          <HStack>
            <Button disabled={step < 1} onClick={() => setStep(step - 1)}>
              Prev
            </Button>
            <Button
              disabled={step > 5}
              onClick={() => (step !== 5 ? setStep(step + 1) : onOpen())}
            >
              {step === stepsArray.length - 1 ? "See my results" : "Next"}
            </Button>
          </HStack>
        </Stack>
      </Container>
      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Your Results</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* add scenario where we suggest they join our mailing list */}
            {costOfMarketing > 1000 && (
              <Stack spacing={6}>
                <Heading size="md">
                  Your marketing is costing you more than it needs to!
                </Heading>
                <Divider />
                <Text fontWeight={"bold"}>Your Numbers</Text>
                <Text>
                  Monthly cost of your time spent on marketing:{" "}
                  <strong>${costOfMarketing}</strong>
                </Text>
                <Text>
                  Hours spent on marketing every month:{" "}
                  <strong>{totalHours} hours</strong>
                </Text>
                <Divider />
                <Text>
                  At {totalHours} hours per month spent on marketing at a $
                  {hourly}
                  /hour rate for your time, your spending ${
                    costOfMarketing
                  }{" "}
                  worth of <u>your time</u> handling your own marketing.
                </Text>
                <Text>
                  <strong>
                    You are also losing {totalHours} hours of developing new
                    business, interacting with clients, or completing your
                    day-to-day tasks
                  </strong>
                  .
                </Text>
                <Text>
                  Our unified marketing retainers start at $1000/month.
                  That&apos;s a potential{" "}
                  <strong>${costOfMarketing - 1000}</strong> savings per month.
                </Text>
                <Text fontSize="lg" fontWeight={"bold"}>
                  Reclaim your time.
                </Text>
                <NextLink href="/booknow" passHref>
                  <Button size="lg">Schedule Your Consultation</Button>
                </NextLink>
              </Stack>
            )}
          </ModalBody>

          <ModalFooter>
            <Button onClick={handleReset} variant={"ghost"}>
              Start Over
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
