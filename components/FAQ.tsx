import {
  Box,
  Stack,
  Heading,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Link
} from "@chakra-ui/react";
import NextLink from "next/link";

export function FAQ() {
  return (
    <Stack spacing={8}>
      <Heading size="xl">Frequently Asked Questions</Heading>
      <Accordion allowMultiple allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                What&apos;s it cost to work with WEBPRISM?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            It&apos;s entirely dependent on the project, but as a guide, single-page landing pages start at $2,000. Marketing websites (5-pages) start at $5,000. E-commerce and web apps are too complex to provide a starting price, but we can <NextLink href="/booknow" passHref><Link>connect for a conversation</Link></NextLink> and see if we&apos;re a good fit.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Why a custom website vs. a template from Wix/SquareSpace/etc?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Templates are limiting, and no template was built with <u>you in mind</u>. You have a unique value, unique brand, and that&apos;s your super power. We also get significantly more control over metrics that matter like loading times, can keep up with the latest trends in SEO, and do some really awesome stuff that isn&apos;t feasible with a cut-and-dry template.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                What can I do to get ahead while my site is being built?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            If you haven&apos;t already, start collecting customer contact information. Building a nice list of people allows you to launch on the right foot, with a nice list of people who can check it out on launch day. If you work with us and don&apos;t have a website yet, we&apos;ll put up an awesome &quot;coming soon&quot; page where visitors can enter their contact information to get notified when the site is ready.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                How does WEBPRISM unlock marketing opportunities for me?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Every site we build is using advanced analytics (and we&apos;ll show you how to get the most out of it) to help you find out what marketing activities are most successful, enable you to advertise across the web, and help you build your audience more effectively. All while looking good.
          </AccordionPanel>
        </AccordionItem>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left">
                Do you work with small teams?
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel pb={4}>
            Absolutely - we believe small teams have an advantage in their ability to change and adapt quickly. Where small teams usually need help is time. We can help your team manage, update, and keep your website content fresh, so you can focus on what you do best.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </Stack>
  );
}
