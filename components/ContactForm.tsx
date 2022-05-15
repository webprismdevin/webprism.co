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
  Text
} from "@chakra-ui/react";
import Link from "next/link";
import { useState } from "react";
import { useFormik } from "formik";

export default function ContactForm() {
  const [formStatus, setStatus] = useState("unsubmitted")
  
  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      phone: "",
      email: "",
      message: "",
    },
    onSubmit: async (values) => {
      let response = await fetch("/api/hello", {
        method: "POST",
        body: JSON.stringify(values),
      });

      console.log(response);

      if (response.status === 200) {
        formik.resetForm();
        formik.setSubmitting(false);
        setStatus("submitted")
      } else if(response.status === 500){
        formik.setSubmitting(false);
        setStatus("error")
      }
    },
  });

  if(formStatus === "submitted") return (
    <Box shadow="xl" p={8} border="1px solid" borderColor={"gray.100"}>
      <Stack spacing={4}>
        <Heading>Thank You!</Heading>
        <Text>We look forward to connecting with you and creating something amazing!</Text>
        <Text>If you&apos;d like to, you can <Link href="/booknow" passHref><a style={{textDecoration: 'underline'}}>book an appointment immediately!</a></Link></Text>
      </Stack>
    </Box>
  )

  return (
    <form onSubmit={formik.handleSubmit}>
      {formStatus === "error" && <Text py={4}>Something went wrong last time. You can <Link href="/booknow" passHref><a style={{textDecoration: 'underline'}}>book an appointment</a></Link> directly if the form continues to fail.</Text>}
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
          <Button
            isLoading={formik.isSubmitting}
            type="submit"
            loadingText="Submitting..."
          >
            Submit ✓
          </Button>
        </GridItem>
      </SimpleGrid>
    </form>
  );
}
