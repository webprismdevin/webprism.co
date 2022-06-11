import Head from "next/head";
import ContactForm from "@/components/ContactForm";
import { Container, Stack, Heading, Text } from "@chakra-ui/react";
import { FAQ } from "@/components/FAQ";

/* eslint-disable-next-line */
export interface ContactProps {}

export function ContactPage(props: ContactProps) {
  return (
    <>
      <Head>
        <title>Contact | WEBPRISM | A web design + development agency</title>
        <meta name="description" content="We're excited to connect with you. Contact us today to schedule consultation, or get started right away!" />
      </Head>
      <Container maxW="container.md" pt={40} pb={20}>
        <Stack spacing={8}>
          <Heading as="h1">Contact Us</Heading>
          <Text>We&apos;re ready to explore the possibilities - together.</Text>
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
