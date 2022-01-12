import {
  Box,
  Container,
  Heading,
  GridItem,
  SimpleGrid,
  Stack,
  Button,
  Textarea,
  Input,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useFormik } from "formik";

export default function ContactForm() {
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      phone: "",
      email: "",
      message: "",
    },
    onSubmit: async (values) => {
      await new Promise((r) => setTimeout(r, 500));
      alert(JSON.stringify(values, null, 2));
      formik.setSubmitting(false);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <SimpleGrid templateColumns={`repeat(2, 1fr)`} gap={6} w="full">
        <GridItem colSpan={[2, 1]}>
          <Input
            placeholder="Enter your first name"
            name="first_name"
            onChange={formik.handleChange}
            value={formik.values.first_name}
          />
        </GridItem>
        <GridItem colSpan={[2, 1]}>
          <Input
            placeholder="last name"
            name="last_name"
            onChange={formik.handleChange}
            value={formik.values.last_name}
          />
        </GridItem>
        <GridItem colSpan={[2]}>
          <Input
            placeholder="phone number"
            name="phone"
            onChange={formik.handleChange}
            value={formik.values.phone}
          />
        </GridItem>
        <GridItem colSpan={[2]}>
          <Input
            name="email"
            type="email"
            placeholder="email address"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </GridItem>
        <GridItem colSpan={[2]}>
          <Textarea
            placeholder="your message"
            rows={5}
            name="message"
            onChange={formik.handleChange}
            value={formik.values.message}
          />
        </GridItem>
        <GridItem>
          <Button isLoading={formik.isSubmitting} type="submit" loadingText="Submitting...">Submit ✓</Button>
        </GridItem>
      </SimpleGrid>
    </form>
  );
}
