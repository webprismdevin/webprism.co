import { Box, Stack, Heading, Text, Container } from "@chakra-ui/react";
import { returnStatement } from "@/lib/processSteps";
import dynamic from "next/dynamic";
import { useState } from "react";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import SwipeableViews from "react-swipeable-views";

const DynamicLordIcon = dynamic(() => import("../components/LordIcon"), {
  ssr: false,
});

const steps = [
  {
    icon: "https://cdn.lordicon.com/zpxybbhl.json",
    name: "Consultation",
  },
  {
    icon: "https://cdn.lordicon.com/iltqorsz.json",
    name: "Brand Discovery",
  },
  {
    icon: "https://cdn.lordicon.com/puvaffet.json",
    name: "Copy Writing",
  },
  {
    icon: "https://cdn.lordicon.com/wloilxuq.json",
    name: "Site Design",
  },
  {
    icon: "https://cdn.lordicon.com/ybfcwnqv.json",
    name: "Development",
  },
  {
    icon: "https://cdn.lordicon.com/rqsvgwdj.json",
    name: "Launch",
  },
  {
    icon: "https://cdn.lordicon.com/gqdnbnwt.json",
    name: "SEO & Maintenance",
  },
];

export default function OurProcess() {
  const [step, setStep] = useState(0);

  function resetStep() {
    setStep(0);
  }

  if(isMobile) return (
    <Container>
      <Text my={4} w="full" textAlign={"center"}>Swipe »</Text>
      <SwipeableViews autoPlay>
      {steps.map((step, index) => (
        <Stack spacing={8} key={index}>
          <DynamicLordIcon
            target=""
            src={step.icon}
            trigger="loop"
            height={96}
            width={96}
          />
          <Heading>{step.name}</Heading>
          <Text fontWeight={500}>{returnStatement(index + 1)}</Text>
        </Stack>
      ))}
        </SwipeableViews>
    </Container>
  )

  if(isBrowser) return (
      <Stack spacing={8} textAlign={"center"}>
          <Stack
            direction={["column", "row"]}
            alignItems={"center"}
            onMouseLeave={resetStep}
          >
            <Box onMouseEnter={() => setStep(1)}>
              <DynamicLordIcon
                target=""
                src="https://cdn.lordicon.com/zpxybbhl.json"
                trigger="hover"
                height={96}
                width={96}
              />
              <Text>Consultation</Text>
            </Box>
            <Text fontSize="6xl">→</Text>
            <Box onMouseEnter={() => setStep(2)}>
              <DynamicLordIcon
                target=""
                src="https://cdn.lordicon.com/iltqorsz.json"
                trigger="hover"
                height={96}
                width={96}
              />
              <Text>Brand Discovery</Text>
            </Box>
            <Text fontSize="6xl">→</Text>
            <Box onMouseEnter={() => setStep(3)}>
              <DynamicLordIcon
                target=""
                src="https://cdn.lordicon.com/puvaffet.json"
                trigger="hover"
                height={96}
                width={96}
              />
              <Text>Copy Writing</Text>
            </Box>
            <Text fontSize="6xl">→</Text>
            <Box onMouseEnter={() => setStep(4)}>
              <DynamicLordIcon
                target=""
                src="https://cdn.lordicon.com/wloilxuq.json"
                trigger="hover"
                height={96}
                width={96}
              />
              <Text>Site Design</Text>
            </Box>
            <Text fontSize="6xl">→</Text>
            <Box onMouseEnter={() => setStep(5)}>
              <DynamicLordIcon
                target=""
                src="https://cdn.lordicon.com/ybfcwnqv.json"
                trigger="hover"
                height={96}
                width={96}
              />
              <Text>Development</Text>
            </Box>
            <Text fontSize="6xl">→</Text>
            <Box onMouseEnter={() => setStep(6)}>
              <DynamicLordIcon
                target=""
                src="https://cdn.lordicon.com/rqsvgwdj.json"
                trigger="hover"
                height={96}
                width={96}
              />
              <Text>Launch</Text>
            </Box>
            <Text fontSize="6xl">→</Text>
            <Box onMouseEnter={() => setStep(7)}>
              <DynamicLordIcon
                target=""
                src="https://cdn.lordicon.com/gqdnbnwt.json"
                trigger="hover"
                height={96}
                width={96}
              />
              <Text>SEO &amp; Maintenance</Text>
            </Box>
          </Stack>
          <Text maxW="50%" minH={24} alignSelf={"center"}>
            {returnStatement(step)}
          </Text>
      </Stack>
  );
}
