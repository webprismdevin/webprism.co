import styles from './experience.module.css';
import FadeIn from 'react-fade-in/lib/FadeIn';

/* eslint-disable-next-line */
export interface ExperienceProps {}

export function Experience(props: ExperienceProps) {
  return (<>
    <section className={`${styles.experience} section hero is-halfheight`} >
      <div className="container columns is-vcentered">
        <div className="column is-3">
          <FadeIn>
            <h1 className="{`${styles.experience_title} title is-1`}">[E]xperience</h1>
            <p className="title is-3">Give your customers a digital experience to remember.</p>
          </FadeIn>
        </div>
        <div className="column is-9">
        </div>
      </div>
    </section>
    <section className="section hero is-fullheight">
    </section>
  </>);
}

export default Experience;
