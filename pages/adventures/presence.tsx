import styles from './presence.module.css';
import FadeIn from 'react-fade-in/lib/FadeIn';
import Content from '../../components/content';
import Mission from '../../components/mission';
import ContactForm from '../../components/ContactForm/contactform';
import Projects from '../../components/projects';

/* eslint-disable-next-line */
export interface PresenceProps {}

export function Presence(props: PresenceProps) {
  return (<>
    <section className={`${styles.presence} section hero is-halfheight`} >
      <div className="container columns is-vcentered">
        <div className="column is-3">
          <FadeIn>
            <h1 className={`${styles.presence_title} title is-1`}>Presence</h1>
            <p className={`${styles.presence_title} title is-3`}>Show the world who you are.</p>
          </FadeIn>
        </div>
        <div className="column is-9">
        </div>
      </div>
    </section>
    <Content>
      <p className="title is-3">Your digital presence is more than your website →</p>
      <p className="block">It&apos;s your website, Facebook pages and Instagram, your LinkedIn presence, your Twitter, your position in Google&apos;s search results, among other things.</p>
      <p className="block">Our goal is to uncover the passion in what you do everyday, then help you showcase that passion online.</p>
      <p className="block">We start with your website - creating a central point for all of your marketing efforts online, creating the best possible place for your customers and potential customers to interact, contact or purchase. From there, we work with you to create consistency across your entire digital presence.</p>
    </Content>
    <Projects />
    <Mission />
    <Content>
      <ContactForm />
    </Content>
  </>);
}

export default Presence;
