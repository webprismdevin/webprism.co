import Calculator from "@/components/Calculator";
import { imageBuilder } from "@/lib/sanity";
import {
  Box,
  Container,
  Text,
  Heading,
  Stack,
  Button,
  Image,
  useColorMode,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import NextLink from "next/link";

export default function DigitalMarketing({ page }: any) {
  const { colorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box>
        <Container maxW="container.xl" pt={40} pb={40}>
          <Stack direction={["column-reverse", "row"]} align="center">
            <Stack maxW={["full", "50%"]} spacing={6}>
              <Box>
                <Text mb={2} className="supertext">
                  {page.hero.supertext}
                </Text>
                <Heading
                  textTransform={"uppercase"}
                  lineHeight={1.2}
                  fontWeight={300}
                  as="h1"
                  size="3xl"
                >
                  {page.hero.title}
                </Heading>
              </Box>
              {page.hero.subtitle && <Text>{page.hero?.subtitle}</Text>}
              <NextLink href={page.hero.cta.link} passHref>
                <Button size="lg" alignSelf={"flex-start"}>
                  {page.hero.cta.text}
                </Button>
              </NextLink>
            </Stack>
            <Image
              maxW={600}
              src={imageBuilder(page.hero.image).url()}
              alt={page.hero.imageAlt}
            />
          </Stack>
        </Container>
      </Box>
      <Container maxW="container.lg">
        <Stack align="center">
          <Heading>{page.belowTheFold.title}</Heading>
          <Text>{page.belowTheFold?.text}</Text>
          <Button onClick={onOpen}>{page.belowTheFold.cta.text}</Button>
        </Stack>
      </Container>
      {page.sections?.map((section: any, index: number) => (
        <Container key={section._key} maxW="container.xl" py={20}>
          <Stack
            direction={["column", index % 2 === 0 ? "row" : "row-reverse"]}
            align="center"
            spacing={[12]}
          >
            {section.image && (
              <Image
                maxW={["full", "50%"]}
                src={imageBuilder(
                  colorMode === "dark" && section.imageDark
                    ? section.imageDark
                    : section.image
                ).url()}
                alt={section.title}
              />
            )}
            <Stack spacing={[6]} maxW={["full", "50%"]}>
              <Heading size="3xl">{section.title}</Heading>
              <Text fontSize="xl">{section.text}</Text>
            </Stack>
          </Stack>
        </Container>
      ))}

      <Modal isOpen={isOpen} onClose={onClose} size="lg">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Calculator />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export async function getStaticProps() {
  const query = encodeURIComponent(`*[_type == "digital-marketing"][0]`);

  const url = `https://0ggffobx.api.sanity.io/v1/data/query/production?query=${query}`;
  const data = await fetch(url).then((res) => res.json());

  return {
    props: {
      page: data.result,
    },
    revalidate: 10,
  };
}
