import Link from 'next/dist/client/link';
import styles from './ourwork.module.scss'

const OurWork = () => {
    return(<section className="section">
            <div className="container" style={{minHeight: '60vh', display: 'grid', placeItems: 'center'}}>
                <div className="has-text-centered">
                    <p className="title is-2">Portfolio</p>
                    <Link href="/portfolio" passHref>SEE OUR WORK →</Link>
                </div>
            </div>
        </section>)
}

export default OurWork;