import Head from "next/head";
import ContactForm from "@/components/NewContactForm";
import { Container, Stack, Heading, Text } from "@chakra-ui/react";
import { FAQ } from "@/components/FAQ";

/* eslint-disable-next-line */
export interface ContactProps {}

export function ContactPage(props: ContactProps) {
  return (
    <>
      <Head>
        <title>Contact | WEBPRISM | A web design + development agency</title>
      </Head>
      <Container maxW="container.md" pt={40} pb={20}>
        <Stack spacing={8}>
          <Heading>Contact Us</Heading>
          <Text>You&apos;re here because your&apos;re looking for the next step, need some help with design, or want to unlock your websites digital marketing potential. We&apos;re ready to explore the possibilities - together.</Text>
          <ContactForm />
        </Stack>
      </Container>
      <Container maxW="container.md" pt={20} pb={40}>
        <FAQ />
      </Container>
    </>
  );
}

export default ContactPage;
