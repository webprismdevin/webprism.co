import './contact.module.scss';
import Head from 'next/head';
import Content from '../components/content';
import ContactForm from '../components/ContactForm/contactform';
import Footer from '../components/footer';

/* eslint-disable-next-line */
export interface ContactProps {}

export function ContactPage(props: ContactProps) {
  return (<>
            <Head>
              <title>WebPrism | Contact</title>
            </Head>
            <section className="section" >
              <div className="container">
                <h1 className="title is-1">What can we build?</h1>
                <h2 className="title is-3">Let&apos;s find out.</h2>
              </div>
              <ContactForm />
            </section>
            <Footer />
          </>);
}

export default ContactPage;
