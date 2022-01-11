import Head from "next/head";
import { useState } from "react";
import ContactForm from "@/components/ContactForm/NewContactForm";
import { Container, Stack, Heading, Text } from "@chakra-ui/react";
import { FAQ } from "@/components/FAQ";

/* eslint-disable-next-line */
export interface ContactProps {}

export function ContactPage(props: ContactProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <>
      <Head>
        <title>Contact | WEBPRISM | A web design + development agency</title>
      </Head>
      <Container maxW="container.md" pt={40} pb={20}>
        <Stack spacing={8}>
          <Heading>Contact Us</Heading>
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, sequi assumenda? Quisquam illum qui, dolorum quaerat nulla libero ex beatae neque non eveniet? Neque soluta quas harum, nobis deleniti unde!</Text>
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
