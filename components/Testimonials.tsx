import { Flex, Text, Stack, Container, Icon } from "@chakra-ui/react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "@popmotion/popcorn";
import { BsChevronDoubleLeft, BsChevronDoubleRight } from "react-icons/bs";

const MotionStack = motion(Stack);

export default function Testimonials() {
  const [[page, direction], setPage] = useState([0, 0]);

  const index = wrap(0, testimonials.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <Container maxW="container.xl">
      <Flex direction={"row"} w="full" justifyContent={"space-between"} alignItems={["center", "flex-start"]} gap={4}>
        <Icon
          onClick={() => paginate(-1)}
          as={BsChevronDoubleLeft}
          h={6}
          w={6}
          _hover={{
            transform: 'scale(1.1)'
          }}
          transition={'transform 200ms ease'}
        />
        <AnimatePresence exitBeforeEnter>
          <MotionStack
            maxW={["80%", "60%"]}
            key={page}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
          >
            <Text>{testimonials[index].text}</Text>
            <Text textAlign={"right"} textTransform={"uppercase"} fontStyle={"italic"}>{testimonials[index].name}</Text>
          </MotionStack>
        </AnimatePresence>
        <Icon
          onClick={() => paginate(1)}
          as={BsChevronDoubleRight}
          h={6}
          w={6}
          _hover={{
            transform: 'scale(1.1)'
          }}
          transition={'transform 200ms ease'}
        />
      </Flex>
    </Container>
  );
}

const testimonials = [
  {
    text: `Working with WEBPRISM was a great decision - they were able to build my website quickly, help me define my branding and showed the personality I wanted to show for the Strong Ox brand. They helped me with everything from getting Shopify set up to building the site and creating graphics for longer term marketing.`,
    name: "Damen - Strong Ox",
  },
  {
    text: `Deciding to work with Devin and Ashley was a pivotal moment for our business. Their expertise, creativity and productivity (not to mention their adaptability and great personalities) are brilliant. Their ability to conceptualize our business allows us to trust their insights and guidance. Redoing our website felt like a major undertaking and vulnerable step, but their design competence and workflow made it so positive. Check out our website, it's awesome!`,
    name: "Brooke & Kristi - StudioLife",
  },
  {
    text: `Devin and Ashley of [WEBPRISM] redesigned and reworked my website, and I couldn't be more thrilled. If you've been waiting for the right person to do your website rebuild, I cannot recommend [WEBPRISM] enough. It's a fabulous way to start a new year, and it's been such a nice gift to myself and my business!`,
    name: "Sarah - The Mint Gardener",
  },
];
