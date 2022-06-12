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
} from "@chakra-ui/react";
import { useState } from "react";
import NextLink from "next/link";
import Head from "next/head";

export default function Calculator() {
  const [hourly, setHourly] = useState(125);
  const [email, setEmail] = useState(0);
  const [seo, setSEO] = useState(0);
  const [web, setWeb] = useState(0);
  const [social, setSocial] = useState(0);
  const [ads, setAds] = useState(0);

  const [step, setStep] = useState(0);

  const costOfMarketing = hourly * (email + seo + web + social + ads);
  const totalHours = email + seo + web + social + ads;

  function handleReset() {
    setStep(0);
    setEmail(0);
    setSEO(0);
    setWeb(0);
    setSocial(0);
    setAds(0);
  }

  return (
    <Box py={40}>
      <Head>
        <title>What&apos;s your marketing cost? | WEBPRISM</title>
        <meta
          name="description"
          content="What's the real cost of doing your own marketing? By assigning
            a value to your time, and adding up the hours you spend
            on your marketing activities per month, we can get a true cost of
            handling your own marketing."
        />
      </Head>
      <Container>
        <Stack spacing={6}>
          <Heading>Cost of Marketing</Heading>
          <Text>
            What&apos;s the real cost of doing your own marketing? By assigning
            a value to your time, and adding up the hours you spend on your
            marketing activities per month, we can get a true cost of handling
            your own marketing.
          </Text>
        </Stack>
      </Container>
      <Container>
        <Stack spacing={4} py={10}>
          {step === 0 && (
            <HStack minH={50} align="center">
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
            </HStack>
          )}
          {step === 1 && (
            <HStack minH={50} align="center">
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
              <Button onClick={() => setWeb(4)}>Use Our Estimate</Button>
            </HStack>
          )}
          {step === 2 && (
            <HStack minH={50} align="center">
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
              <Button onClick={() => setEmail(4)}>Use Our Estimate</Button>
            </HStack>
          )}
          {step === 3 && (
            <HStack minH={50} align="center">
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
              <Button onClick={() => setSocial(12)}>Use Our Estimate</Button>
            </HStack>
          )}
          {step === 4 && (
            <HStack minH={50} align="center">
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
              <Button onClick={() => setSEO(2)}>Use Our Estimate</Button>
            </HStack>
          )}
          {step === 5 && (
            <HStack minH={50} align="center">
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
              <Button onClick={() => setAds(8)}>Use Our Estimate</Button>
            </HStack>
          )}
          {step === 6 && (
            <Flex minH={50} align="center">
              <Text>
                <strong>Your cost of marketing:</strong> ${costOfMarketing}
              </Text>
            </Flex>
          )}
          <Text visibility={step > 0 ? "visible" : "hidden"}>
            <strong>Hours spent:</strong> {totalHours}
          </Text>
          <Progress value={(step / 6) * 100} />
          <HStack>
            <Button disabled={step < 1} onClick={() => setStep(step - 1)}>
              Prev
            </Button>
            <Button disabled={step > 5} onClick={() => setStep(step + 1)}>
              {step === 5 ? "See my results" : "Next"}
            </Button>
            {step === 6 && <Button onClick={handleReset}>Start Over</Button>}
          </HStack>
        </Stack>
      </Container>
      <Container pt={10}>
        {/* add scenario where we suggest they join our mailing list */}
        {step === 6 && costOfMarketing > 1000 && (
          <Stack spacing={6}>
            <Heading>
              Your marketing is costing you more than it needs to!
            </Heading>
            <Text>
              At {totalHours} hours per month spent on marketing at a ${hourly}
              /hour rate for your time, your spending ${costOfMarketing} worth
              of your time handling your own marketing.
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
              Our unified marketing retainers start at $1000/month. That&apos;s
              a potential <strong>${costOfMarketing - 1000}</strong> savings per
              month. Reclaim your time.
            </Text>
            <NextLink href="/booknow" passHref>
              <Button>Schedule Your Consultation</Button>
            </NextLink>
          </Stack>
        )}
      </Container>
    </Box>
  );
}
