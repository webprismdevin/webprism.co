import Head from 'next/head';
import {useState} from 'react';
import Typed from 'react-typed';
import Content from '../components/content';
import ContactForm from '../components/ContactForm/contactform';
import Footer from '../components/footer';
import styles from './contact.module.scss';

/* eslint-disable-next-line */
export interface ContactProps {}

export function ContactPage(props: ContactProps) {
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (<div className={styles.background}>
            <Head>
              <title>Contact | WEBPRISM | A Passion-driven Creative Agency</title>
            </Head>
                  <Content fullheight>
                    {!formSubmitted && <>
                      <h1 className="title is-1">What can we build together?</h1>
                      <h2 className="title is-3">Let&apos;s find out.</h2>
                    </>}
                    {formSubmitted &&
                      <Typed 
                        strings={[`You're awesome!`]}
                        typeSpeed={40}
                        showCursor={false}
                        className="title is-1"
                      />
                    }
                    <ContactForm handleFormSubmit={() => setFormSubmitted(true)} />
                  </Content>
            <Footer />
          </div>);
}

export default ContactPage;
