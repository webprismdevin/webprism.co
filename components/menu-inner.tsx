import Link from 'next/link'

const MenuInner = () => {
    return (<>
        <div>
            <Link href="/"><a id="home" className="menu-item is-size-4">Home</a></Link>

        </div>
        <hr />
        <div>
            <Link href="https://mvp.webprism.co"><a id="mvp" className="menu-item is-size-4">M | V | P</a></Link>
            <div>Define Your Mission, Vision + Purpose</div>
        </div>
        <hr />
        <div>
            <Link href="/portfolio"><a id="portfolio" className="menu-item is-size-4">Portfolio</a></Link>
            <div>We love to create. Come check it out.</div>
        </div>
        <hr />
        <div>
            <Link href="/posts"><a id="blog" className="menu-item is-size-4">Blog</a></Link>
            <div>Come gather &apos;round our soap box.</div>
        </div>
        <hr />
        <div>
            <Link href="/contact"><a id="contact" className="menu-item is-size-4">Contact</a></Link>

        </div>
        <hr />
        <div>More. Soon...</div>
    </>)
}

export default MenuInner