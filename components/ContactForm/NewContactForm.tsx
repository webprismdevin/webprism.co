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
  FormLabel
} from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function ContactForm() {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [phone, setPhone] = useState("");

  const fNameError = fName === ''

  return (
    <SimpleGrid templateColumns={`repeat(2, 1fr)`} gap={6} w="full">
      <GridItem colSpan={[2, 1]}>
        <FormControl isInvalid={fNameError} isRequired>
          <FormLabel htmlFor="first_name">First Name</FormLabel>
          <Input id="first_name" placeholder="Enter your first name" value={fName} onChange={e => setFName(e.target.value)}/>
        </FormControl>
      </GridItem>
      <GridItem colSpan={[2, 1]}>
        <Input placeholder="last name" />
      </GridItem>
      <GridItem colSpan={[2]}>
        <Input placeholder="phone number" />
      </GridItem>
      <GridItem colSpan={[2]}>
        <Input placeholder="email address" />
      </GridItem>
      <GridItem colSpan={[2]}>
        <Textarea placeholder="your message" rows={5} />
      </GridItem>
      <GridItem>
        <Button>Submit ✓</Button>
      </GridItem>
    </SimpleGrid>
  );
}
