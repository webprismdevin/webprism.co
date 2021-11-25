import Head from 'next/head';
import Content from '@/components/content';
import Footer from '@/components/footer';
import styles from '@/styles/booknow.module.scss';

export interface ContactProps {}

export function ContactPage(props: ContactProps) {
  return (<div className={`page`}>
            <Head>
              <title>WEBPRISM | Book Now</title>
            </Head>
            <Content fullheight>
                <div className={styles.iframeContainer}>
                  <iframe src="https://app.usemotion.com/meet/devin-webprism/50-min" title="Motion Booking Page" width="100%" height="840px" frameBorder="0"></iframe>
                </div>
            </Content>
            <Footer />
          </div>);
}

export default ContactPage;