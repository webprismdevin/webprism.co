import Head from 'next/head';
import ContactForm from '../components/ContactForm/contactform';
import Footer from '../components/footer';
import styles from './contact.module.scss';

/* eslint-disable-next-line */
export interface ContactProps {}

export function ContactPage(props: ContactProps) {
  return (<div className={`page ${styles.background}`}>
            <Head>
              <title>WebPrism | Contact</title>
            </Head>
            <section className="section hero is-fullheight">
              <div className="hero-body">
                <div className="container">
                  <h1 className="title is-1">What can we build?</h1>
                  <h2 className="title is-3">Let&apos;s find out.</h2>
                  <ContactForm />
                </div>
              </div>
            </section>
            <Footer />
          </div>);
}

export default ContactPage;
