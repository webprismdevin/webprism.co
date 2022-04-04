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
    DrawerCloseButton,
    useDisclosure,
    Heading,
    Flex,
    useColorMode,
    Container
} from '@chakra-ui/react'
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { isMobile } from 'react-device-detect';

export default function MailingList() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const router = useRouter();
    const { colorMode } = useColorMode();
  
    useEffect(() => {
      const timer = setTimeout(async () => {
          let popped = await window.sessionStorage.getItem("wp_popped");

          if(popped !== "true") {
            onOpen();
            window.sessionStorage.setItem("wp_popped", "true")
          }
      }, isMobile ? 16000 : 12000);
  
      return () => clearTimeout(timer);
    }, []); 
    
    function handleSchedule(){
      router.push('/booknow');
      onClose();
    }
      
    return (
      <Drawer placement={"bottom"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent bg={colorMode === 'dark' ? 'brand.dark' : 'brand.light'}>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            <Container maxW="container.lg">
              <Heading size="lg">Hey! There&apos;s free stuff around here somewhere!</Heading>
            </Container>
          </DrawerHeader>
          <DrawerBody py={4}>
            <Container maxW="container.lg">
              <Flex>
                <Stack spacing={6} maxW="container.lg">
                  <Text>Not click-bait! We&apos;ll sort of...but if you look hard enough, there is an opportunity to get a free party favor if you find a hidden surprise on our site. We&apos;ll give you a hint: give us a high-five.</Text>
                  <Text>Since we&apos;ve got your attention, we do consultations, totally free, other than your time, which we acknowledge is super important. We keep them short, and try to be as helpful as possible. You&apos;ll leave with at least one way to make your own digital marketing better, even if you don&apos;t want to work with us.</Text><Text>Smash the button below 👇👇</Text>
                </Stack>
              </Flex>
            </Container>
          </DrawerBody>
          <DrawerFooter>
            <Container maxW="container.lg" textAlign={"left"}>
              <Button onClick={handleSchedule}>Schedule Your Consultation</Button>
            </Container>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    );
  }