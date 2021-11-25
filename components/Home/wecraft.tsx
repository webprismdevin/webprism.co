import Link from 'next/link';
import styles from '@/styles/wecraft.module.scss';

const WeCraft = () => {
    return(        
    <section className="section" >
      <div className="container">
        <div className="columns">
        <div className="column is-1"></div>
          <div className="column is-10">
            <div className={styles.section2}>
              <div style={{marginBottom: 'auto'}}>
                <div className={styles.wecraft}>
                  <div>
                    <h2>we craft<br/>beautiful websites</h2>
                    <p>that showcase our clients&apos; passion for what they do, and create captivating experiences for their customers.</p>
                    <br />
                    <Link href="/#contact"><a className="is-size-4">Let&apos;s create together →</a></Link>
                  </div>
                </div>
              </div>
              <div className={styles.projectsContainer}>
                <Link href="/portfolio" passHref>
                  <div className={styles.projects}>
                    <h1>latest<br/>projects</h1>
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="column is-1"></div>
        </div>
      </div>
    </section>)
  }

  export default WeCraft;