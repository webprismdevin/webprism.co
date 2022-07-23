import { Box, Heading, Container, Text, Stack, Button } from "@chakra-ui/react";

export default function Video() {
  return (
    <Box pos="relative" overflow={"hidden"} h={"100vh"} mt={-16}>
      <Container py={40} pos={"relative"} zIndex={1} maxW={"container.lg"}>
        <Stack>
          <Heading maxW={800} color="white" size="3xl" textShadow={"2px 2px 8px rgba(0,0,0, 0.25)"}>Expand Your Ecommerce Business Marketing</Heading>
          <Text maxW={540} fontSize="3xl" color="white" textShadow={"2px 2px 8px rgba(0,0,0, 0.25)"}>Grow with a partner who knows your business like it&apos;s their own.</Text>
          <Button alignSelf="flex-start" bgColor="brand.brightPink">Schedule A Strategy Session</Button>
        </Stack>
      </Container>
      <Box
        pos="absolute"
        top={0}
        left={0}
        zIndex={0}
        w={"100%"}
        h={"100%"}
        bgColor={"blackAlpha.600"}
      />
      <video
        autoPlay
        muted
        loop
        style={{
          width: "100%",
          height: "auto",
          position: "absolute",
          top: -80,
          left: 0,
          zIndex: -1
        }}
      >
        <source src={"/video/webprism-opening-video.mp4"} type="video/mp4" />
      </video>
    </Box>
  );
}
