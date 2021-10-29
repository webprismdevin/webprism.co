import Image from 'next/image';
import Link from 'next/link';
import Router from 'next/router';

const Footer  = () => {
    const clearSavedName = () => {
        window.localStorage.removeItem('webprism_name');
        Router.reload();
    }

    return(
        <footer className="footer">
            <div className="container">
                <hr />
            </div>
            <br />
            <div className="block has-text-centered">
                <Link href="/" passHref><Image src="/white-logo.png" height={32} width={262}  alt="webprism diamond logo"/></Link>
            </div>
            <div className="content block has-text-centered">
                <br />
                <div>Copyright. WebPrism 2021.</div>
                <a className="is-size-7" onClick={clearSavedName}>Clear saved name</a>
            </div>
            <div className="content has-text-centered">
                <div>bye 👋</div>
            </div>
        </footer>
    )
}

export default Footer;