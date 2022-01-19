import Head from "next/head";
import { Box } from "@chakra-ui/react";
import styles from "@/styles/booknow.module.scss";


export interface ContactProps {}

export function ContactPage(props: ContactProps) {
  return (
    <div className={`page`}>
      <Head>
        <title>WEBPRISM | Book Now</title>
      </Head>
      <Box pt={"86px"} bg="#2C77E7">
        <div className={styles.iframeContainer}>
          <iframe
            src="https://app.usemotion.com/meet/webprism/website-seo-audit-design-review"
            width="100%"
            height="840px"
            frameBorder="0"
          ></iframe>
        </div>
      </Box>
    </div>
  );
}

export default ContactPage;
