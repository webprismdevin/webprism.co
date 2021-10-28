export interface ContentProps {
    fullheight?: boolean,
    halfheight?: boolean,
    style?: any,
    title?: string,
    subtitle?:string,
    children: any
}

const Content = (props:ContentProps) => {
    return(
    <section className={`section hero ${props.fullheight ? "is-fullheight": ""} ${props.halfheight ? "is-halfheight": ""}`} style={props.style && props.style}>
        <div className={`container hero-body`}>
            {props.title && <p className="title is-1 has-text-centered">{props.title}</p>}
            {props.subtitle && <p className="title is-3 has-text-centered">{props.subtitle}</p>}
            <div>
            {/* <div className="columns">
                <div className="column is-2" />
                <div className="column is-8"> */}
                    {props.children}
                {/* </div>
                <div className="column is-2" />
            </div> */}
            </div>
        </div>
    </section>
    )
}

export default Content;