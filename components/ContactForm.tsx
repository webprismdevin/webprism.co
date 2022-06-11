import { useState } from "react";
import { useFormspark } from "@formspark/use-formspark";
import { Button, Textarea, Stack, Input, useToast } from "@chakra-ui/react";

const FORMSPARK_FORM_ID = "hF7Ye4Ew";

const ContactForm = () => {
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID,
  });
  const toast = useToast();

  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");

  const onSubmit = async (e: any) => {
    e.preventDefault();
    await submit({ name, contact, message });
    toast({
      title: "Form submitted",
      description: "We've recieved your request and will contact you as soon as possible.",
      duration: 5000,
      isClosable: true,
      onCloseComplete: () => {
        setName("")
        setContact("")
        setMessage("")
      }
    });

  };

  return (
    <form onSubmit={onSubmit} data-botpoison-public-key="pk_f7d9a478-bf2d-4ae9-9227-cc4cc2fcbc4e">
      <Stack w="full">
        <Input value={name} placeholder="What can we call you?" onChange={(e) => setName(e.target.value)} />
        <Input value={contact} name="email" placeholder="enter your email or phone number" onChange={(e) => setContact(e.target.value)} />
        <Textarea
          value={message}
          placeholder="How can we help you create a bigger impact?"
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button type="submit" disabled={submitting}>
          Send
        </Button>
      </Stack>
    </form>
  );
};

export default ContactForm;