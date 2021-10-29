import Head from 'next/head';
import Footer from '../components/footer';

/* eslint-disable-next-line */
export interface ContactProps {}

export function ContactPage(props: ContactProps) {
  return (<div className={`page`}>
            <Head>
              <title>WebPrism | Book Now</title>
            </Head>
            <section className="section hero is-fullheight">
              <div className="hero-body">
                <div className="container">
                    <iframe src="https://app.usemotion.com/meet/devin-webprism/50-min" title="Motion Booking Page" width="100%" height="840px" frameBorder="0"></iframe>
                </div>
              </div>
            </section>
            <Footer />
          </div>);
}

export default ContactPage;