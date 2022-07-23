import {
  Box,
  Input,
  Stack,
  Heading,
  Text,
  BoxProps,
  InputGroup,
  InputRightElement,
  Icon,
  Spinner,
  useColorMode,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";

const MotionBox = motion<BoxProps>(Box);

export default function MailingList() {
  const [popupShown, setShown] = useState(false);
  const controls = useAnimation();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [formStatus, setStatus] = useState("clean");
  const { colorMode } = useColorMode();

  useEffect(() => {
    const height = document.body.scrollHeight;
    const trigger = height / 3;

    if (!popupShown) controls.start("initial");

    const interval = setInterval(() => {
      if (window.scrollY > trigger && !popupShown) {
        console.log(popupShown);
        controls.start("animate");
        setShown(true);
      }
    }, 25);

    return () => clearInterval(interval);
  }, [popupShown]);

  const animationVariants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 1008,
    },
    close: {
      x: 0,
    },
  };

  async function subscribe() {
    setStatus("loading");

    const response = await fetch("/api/addsubscriber", {
      method: "POST",
      body: JSON.stringify({
        email,
      }),
    }).then((res) => res.json());

    console.log(response)

    if (!response.response) {
      setStatus("failure");
    }

    if (response.response) {
      setStatus("success");
    }
  }

  function handleEnter(event: any) {
    if (event.code === "Enter") {
      subscribe();
    }
  }

  return (
    <MotionBox
      pos="fixed"
      bottom={2}
      left={-1000}
      p={10}
      zIndex={200}
      boxShadow={colorMode === "dark" ? `2px 2px 12px rgba(255, 255 ,255 , 0.25)` : '2px 2px 6px rgba(0, 0 ,0 , 0.15)'}
      bgColor={colorMode === "dark" ? "brand.dark" : "brand.light"}
      color={colorMode === "dark" ? "brand.light" : "brand.dark"}
      animate={controls}
      variants={animationVariants}
      maxW={["370px", "580px"]}
    >
      <MotionBox
        whileHover={{
          opacity: 0.6
        }}
        onClick={() => controls.start("close")}
        pos={"absolute"}
        right={4}
        top={0}
        fontSize={36}
        cursor="pointer"
      >
        &times;
      </MotionBox>
      <Stack spacing={2}>
        <Heading size="lg">
          {formStatus === "success"
            ? "Check your inbox!"
            : "Get design and growth tips, straight to your inbox!"}
        </Heading>
        <InputGroup display={formStatus === "success" ? "none" : "inherit"}>
          <Input
            type="email"
            autoComplete="email"
            fontSize={20}
            pb={2}
            borderBottom={"4px solid"}
            borderBottomColor={colorMode === "dark" ? "brand.light" : "brand.dark"}
            borderRadius={0}
            variant={"unstyled"}
            placeholder={"enter your email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={handleEnter}
          />
          <InputRightElement onClick={subscribe}>
            {formStatus === "loading" ? (
              <Spinner />
            ) : (
              <Icon _hover={{opacity: 0.6}} cursor="pointer" as={FiArrowRight} boxSize={6} mt={0} />
            )}
          </InputRightElement>
        </InputGroup>
        <Text fontSize={18}>
          {formStatus === "clean" && "Join us as we share what we learn on our journey!"}
          {formStatus === "success" && "We're excited to have you join!"}
          {formStatus === "failure" && "Something went wrong, try again or chat us on the right side of the screen!"}
        </Text>
      </Stack>
    </MotionBox>
  );
}
