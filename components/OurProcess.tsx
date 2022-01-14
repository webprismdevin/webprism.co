import { Box, Stack, Heading, Text } from "@chakra-ui/react";
import { returnStatement } from "@/lib/processSteps";
import dynamic from "next/dynamic";
import { useState } from "react";

const DynamicLordIcon = dynamic(() => import("../components/LordIcon"), {
  ssr: false,
});

export default function OurProcess() {
  const [step, setStep] = useState(0);

    function resetStep(){
        setStep(0)
    }

  return (
    <Stack spacing={8} textAlign={"center"}>
      <Heading size="2xl">Our Process</Heading>
      <Heading size="md">What you can expect</Heading>
      <Stack direction={["column", "row"]} alignItems={"center"} onMouseLeave={resetStep}>
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
      <Text maxW="50%" alignSelf={"center"}>
        {returnStatement(step)}
      </Text>
    </Stack>
  );
}
