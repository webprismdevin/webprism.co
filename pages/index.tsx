import MultiText from "@/lib/MultiText";
import { sanity } from "@/lib/sanity";
import {
  Box,
  BoxProps,
  Button,
  Container,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";
import NextLink from "next/link";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import Head from "next/head";
import { motion } from "framer-motion";

const CostModal = dynamic(() => import("@/components/Home/CostModal"), {
    suspense: true
})

const MotionBox = motion<BoxProps>(Box)

export default function Index({ page }: any) {
  return (
    <Box>
        <Head>
            <title>{page.pageTitle}</title>
            <meta name="description" content={page.pageDescription} />
        </Head>
      <Container py={20}>
        <Stack spacing={6} align="flex-start">
          <Heading size="3xl" lineHeight={1.3}>
            {page.hero.title}
          </Heading>
          <Text fontSize="xl">{page.hero.subtitle}</Text>
          <NextLink href={"/booknow"}>
            <Button size="lg">{page.hero.cta}</Button>
          </NextLink>
        </Stack>
      </Container>
      <Container py={[0]}>
        <Box bgColor={"white"} shadow="lg" borderRadius={6} p={6}>
          <Stack>
            <Text textTransform={"uppercase"}>{page.testimonial.client}</Text>
            <MultiText
              fontSize={"14"}
              text={page.testimonial.text}
              mapKey={"index_test_1"}
            />
            <Text fontStyle={"italic"}>- {page.testimonial.name}</Text>
          </Stack>
        </Box>
      </Container>
      <Container py={[20]}>
        <Stack spacing={4}>
            <Heading>{page.belowTheFold.title}</Heading>
            <Text>{page.belowTheFold.text}</Text>
              <Suspense fallback={`Loading...`}>
                <CostModal buttonText={page.belowTheFold.cta} />
              </Suspense>
        </Stack>
      </Container>
      <Container>
        <Stack>
            <Text>{page.about.superText}</Text>
            <Heading>{page.about.title}</Heading>
            <MultiText text={page.about.text} mapKey={"index_about"} />
        </Stack>
      </Container>
      <Box maxW="full" overflow={"hidden"} position={"relative"} h={100}>
            <MotionBox position={"absolute"} whiteSpace="nowrap" 
                animate={{
                    x: [0, -904],
                    transition: {
                        x: {
                            repeat: Infinity,
                            repeatType: 'loop',
                            duration: 16,
                            ease: 'linear'
                        }
                    }
                }}
            >
               {page.about.features.map((feature: string) => <span style={{fontSize: 24}} key={feature}>{feature} | </span>)}
               {page.about.features.map((feature: string) => <span style={{fontSize: 24}} key={feature}>{feature} | </span>)}
            </MotionBox>
        </Box>
    </Box>
  );
}


export const getStaticProps = async () => {
  const query = `*[_type == "homepage" ][0]`;

  const result = await sanity.fetch(query);

  return {
    props: {
      page: result,
      revalidate: 10,
    },
  };
};
