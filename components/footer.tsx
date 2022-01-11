import Image from 'next/image';
import Router from 'next/router';
import { Box, Container, Flex, Heading, Text, SimpleGrid, GridItem, Stack } from '@chakra-ui/react'

const Footer  = () => {
    const clearSavedName = () => {
        window.localStorage.removeItem('webprism_name');
        Router.reload();
    }

    return(
        <Box py={40} color="white" bg={"gray.900"}>
            <Container maxW="container.xl">
                <SimpleGrid w="full" templateColumns={'repeat(5, 1fr)'} templateRows={'repeat(1, 1fr)'} gap={6}>
                    <GridItem colSpan={1} rowSpan={1}>
                        <Heading size="lg">WEBPRISM</Heading>
                    </GridItem>
                    <GridItem colSpan={2} rowSpan={1} textAlign={"right"}>
                        <Stack>
                            <Text>Blog</Text>
                            <Text>Portfolio</Text>
                            <Text>MVP: Define Your Mission</Text>
                            <Text>Contact Us</Text>
                        </Stack>
                    </GridItem>
                    <GridItem colSpan={2} rowSpan={1} textAlign={"right"}>
                        <Stack>
                            <Text>Instagram</Text>
                            <Text>LinkedIn</Text>
                            <Text>Facebook</Text>
                        </Stack>
                    </GridItem>
                </SimpleGrid>
            </Container>
            <Container centerContent py={20}>
                <Text>thanks for stopping by 👋</Text>
            </Container>
        </Box>
    )
}

export default Footer;