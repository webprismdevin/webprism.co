import {
  Box,
  Container,
  Stack,
  Flex,
  Heading,
  SimpleGrid,
  GridItem,
  Text,
  Button,
  Image,
  useColorMode,
  Icon,
  Link,
  Divider,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";
const DynamicLordIcon = dynamic(() => import("../components/LordIcon"), {
  ssr: false,
});

export default function SiteTypes() {
  return (
    <Container pt={0} pb={40} maxW="container.xl">
      <Stack spacing={16}>
        <Heading
          textTransform={"uppercase"}
          fontWeight={300}
          size="2xl"
          textAlign={"center"}
          as="h2"
        >
          What We Build
        </Heading>
        <SimpleGrid
          templateColumns={"repeat(2, 1fr)"}
          templateRows={"repeat(2, 1fr)"}
          gap={8}
        >
          <GridItem colSpan={[2, 1]}>
            <Flex gap={6} className="mktg_sites">
              <DynamicLordIcon
                trigger="hover"
                src="https://cdn.lordicon.com/lupuorrc.json"
                target="div.mktg_sites"
                height={128}
                width={128}
              />
              <Stack spacing={8}>
                <Heading size="lg">Marketing Sites</Heading>
                <Text>
                  Your business&apos;s digital marketing home base. Everything
                  from your services &amp; offerings, to your story, to
                  resources for your potential and current clients live on your
                  marketing site.
                </Text>
              </Stack>
            </Flex>
          </GridItem>
          <GridItem colSpan={[2, 1]}>
            <Flex gap={6} className="micro-sites">
              <DynamicLordIcon
                trigger="hover"
                src="https://cdn.lordicon.com/uukerzzv.json"
                target="div.micro-sites"
                height={128}
                width={128}
              />
              <Stack spacing={8}>
                <Heading size="lg">Micro-sites &amp; Landing Pages</Heading>
                <Text>
                  A specifically designed, usually single page, websites for a
                  specific event, function, or marketing purpose, like gathering
                  leads for a webinar.
                </Text>
              </Stack>
            </Flex>
          </GridItem>
          <GridItem colSpan={[2, 1]}>
            <Flex gap={6} className="web-apps">
              <DynamicLordIcon
                trigger="hover"
                src="https://cdn.lordicon.com/fqrjldna.json"
                target="div.web-apps"
                height={128}
                width={128}
              />
              <Stack spacing={8} alignItems={"flex-start"}>
                <Heading size="lg">Web Applications</Heading>
                <Text>
                  Turn an idea into a full-fledged application online for your
                  business. We can even turn your new web application into a
                  mobile app!
                </Text>
                <Link href="https://mvp.webprism.co" target="_blank">
                  Check out the app we built to help everyone define their
                  purpose.
                </Link>
              </Stack>
            </Flex>
          </GridItem>
          <GridItem colSpan={[2, 1]}>
            <Flex gap={6} className="ecomm-sites">
              <DynamicLordIcon
                trigger="hover"
                src="https://cdn.lordicon.com/nlzvfogq.json"
                target="div.ecomm-sites"
                height={128}
                width={128}
              />
              <Stack spacing={8} alignItems={"flex-start"}>
                <Heading size="lg">E-Commerce Sites</Heading>
                <Text>
                  Sell your products online with a custom shopping experience
                  that allows ultimate flexibility for your content strategy.
                </Text>
                <Link
                  href="https://torsalonproducts.com/?utm_source=webprism&utm_medium=referral&utm_campaign=homepage"
                  target="_blank"
                >
                  Check out what we did for TOR →
                </Link>
              </Stack>
            </Flex>
          </GridItem>
        </SimpleGrid>
      </Stack>
    </Container>
  );
}
