import styles from './leverage.module.css';
import FadeIn from 'react-fade-in/lib/FadeIn';

/* eslint-disable-next-line */
export interface LeverageProps {}

export function Leverage(props: LeverageProps) {
  return (<>
    <section className={`${styles.leverage} section hero is-halfheight`} >
      <div className="container columns is-vcentered">
        <div className="column is-3">
          <FadeIn>
            <h1 className={`${styles.leverage_title} title is-1`}>[L]everage</h1>
            <p className="title is-3">Spread your message. Grow your impact.</p>
          </FadeIn>
        </div>
        <div className="column is-9">
        </div>
      </div>
    </section>
    <section className="section hero">
        <div className="container">
          <p>Here&apos;s some ipsum. Cool.</p>
        </div>
    </section>
  </>);
}

export default Leverage;
