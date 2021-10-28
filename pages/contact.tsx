import './contact.module.css';
import Content from '../components/content';
import ContactForm from '../components/ContactForm/contactform';
import Footer from '../components/footer';

/* eslint-disable-next-line */
export interface ContactProps {}

export function ContactPage(props: ContactProps) {
  return (<>
            <Content>

            </Content>
            <ContactForm />
            <Footer />
          </>);
}

export default ContactPage;
