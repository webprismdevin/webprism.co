import { Box, Container, Heading, GridItem, SimpleGrid, Stack, Button, Textarea } from '@chakra-ui/react' 

export default function ContactForm(){
    return(function ContactForm() {
        return (
          <Box py={40}>
            <Container maxW="container.md">
              <Stack spacing={8}>
                <Heading as="h2" size="xl">
                  Contact Us
                </Heading>
                <SimpleGrid templateColumns={`repeat(2, 1fr)`} gap={6} w="full">
                  <GridItem colSpan={[2, 1]}>
                    <Input placeholder="first name" />
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
              </Stack>
            </Container>
          </Box>
        );
      })
}