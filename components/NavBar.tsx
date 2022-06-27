import { Box, Flex, IconButton } from "@chakra-ui/react";
import { HiOutlineCalendar, HiOutlineMenuAlt2 } from 'react-icons/hi'
import NextImage from 'next/image'

export default function NavBar(){
    return <Box py={[3]} px={[2]} w="full">
        <Flex w="full" justify={"space-between"} align="center">
            <IconButton variant="ghost" as={HiOutlineMenuAlt2} boxSize={7} aria-label="menu button" />
            <Box boxSize={8}>
                <NextImage src={"/logos/logo_v2_black.png"} height={1080} width={1080} layout="responsive" />
            </Box>
            <IconButton variant="ghost" as={HiOutlineCalendar} boxSize={7} aria-label="schedule your strategy session" />
        </Flex>
    </Box>
}