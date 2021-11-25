import styles from '@/styles/content.module.scss'

export interface ContentProps {
    fullheight?: boolean,
    halfheight?: boolean,
    style?: any,
    title?: string,
    subtitle?:string,
    children?: any,
}

const Content = (props:ContentProps) => {
    return(
    <section className={`section ${props.fullheight ? styles.fullheight : ""} ${props.halfheight ? styles.halfheight: ""}`} style={props.style && props.style}>
        <div className={`container ${styles.container}`}>
            {props.title && <p className="title" style={{fontSize: 64}}>{props.title}</p>}
            {props.subtitle && <p className="title is-3">{props.subtitle}</p>}
            <>{props.children ? props.children : <></>}</>
        </div>
    </section>
    )
}

export default Content;