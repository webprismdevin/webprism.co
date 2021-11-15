import { useState } from 'react';
import styles from './choose.module.scss';

const Choose = () => {
    const [hover, setHover] = useState(0);

    function getTitle(state: number){
        switch(state){
            case 1: 
                return "uncover the passion"
            case 2: 
                return "design the concept"
            case 3: 
                return "create the vision"
            case 4:
                return "launch the project"
            case 5:
                return "expand your reach"
            default:
                return "what we do";
        }
    }

    return (
        <section className="section">
            <div style={{height: '100vh', display: 'grid', placeItems: 'center'}}>
                <div className={`container is-flex is-justify-content-space-between is-align-items-stretch`} style={{width: '100%'}}>
                    <div className={`${styles.halfpage} ${styles.lefthalf}`}>
                        <div onMouseEnter={() => setHover(1)} onMouseLeave={() => setHover(0)} className={`${styles.stroke}`}>Discover</div>
                        <div onMouseEnter={() => setHover(2)} onMouseLeave={() => setHover(0)} className={`${styles.stroke}`}>Concept</div>
                        <div onMouseEnter={() => setHover(3)} onMouseLeave={() => setHover(0)} className={`${styles.stroke}`}>Create</div>
                        <div onMouseEnter={() => setHover(4)} onMouseLeave={() => setHover(0)} className={`${styles.stroke}`}>Launch</div>
                        <div onMouseEnter={() => setHover(5)} onMouseLeave={() => setHover(0)} className={`${styles.stroke}`}>Expand</div>
                    </div>
                    <div className={`${styles.halfpage} ${styles.righthalf}`}>
                        <h2 className="title is-2">{getTitle(hover)}</h2>
                        <div>
                            <p style={{display: hover === 0 ?  'block' : 'none'}}></p>
                            <p style={{display: hover === 1 ?  'block' : 'none'}}>We get to know our clients deeply, learningtheir passion and mission as if it were our own.</p>
                            <p style={{display: hover === 2 ?  'block' : 'none'}}>Taking an outsiders look at your brand/organization, we design a concept for our clients new site or digital experience.</p>
                            <p style={{display: hover === 3 ?  'block' : 'none'}}>Once we&apos;ve agreed on the direction of the project, we begin building - collaborating with our clients closely throughout the process.</p>
                            <p style={{display: hover === 4 ?  'block' : 'none'}}>We support our clients through the launch process, ensuring a smooth transition.</p>
                            <p style={{display: hover === 5 ?  'block' : 'none'}}>Using our knowledge of the project &amp; your brand, we&apos;ll help you uncover new opportunities to expand your reach and uncover new opportunities.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Choose;