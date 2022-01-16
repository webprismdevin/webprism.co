import { 
    Text,
    Stack,
    Button,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
    Heading,
    Flex
} from '@chakra-ui/react'
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function MailingList() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const router = useRouter();
  
    useEffect(() => {
      const timer = setTimeout(() => {
        if(process.env.NODE_ENV !== "development") onOpen(); 
        // onOpen()
      }, 4200);
  
      return () => clearTimeout(timer);
    }, []); 
    
    function handleSchedule(){
      router.push('/booknow');
      onClose();
    }
      
    return (
      <Drawer placement={"bottom"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">
            <Heading textAlign="center">Psssttttt 👀 </Heading>
          </DrawerHeader>
          <DrawerBody pb={10}>
            <Flex justifyContent={"center"}>
              <Stack spacing={8} maxW="container.lg"s>
                <Text>
                  It can be tough to stay on top of all the ways to reach your customers online - if your website isn&apos;t opening up new opportunities for building and connecting with your audience, we can show you simple tweaks to start unlocking new opportunities with your current website!
                </Text>
                <Text>We totally get it if you&apos;re overwhelmed, and not looking to grow right now. But if you are - smash that button below 👇👇</Text>
              </Stack>
            </Flex>
          </DrawerBody>
          <DrawerFooter>
            <Flex justifyContent={"center"} w="full">
              <Button onClick={handleSchedule}>Schedule Your Consultation</Button>
            </Flex>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  }