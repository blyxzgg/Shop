import "./Footer.css"

const Footer = () => {
    return (
        <>
            <footer className="footer">
                <div className="footer__content container">
                    <div className="footer__top">
                        <div className="footer__content-logo">
                            <a href="">FASCO</a>
                        </div>
                        <ul className="footer__list">
                            <li className="footer__list-logo">
                                <a href="">Support Center</a>
                            </li>
                            <li className="footer__list-logo">
                                <a href="">Invoicing</a>
                            </li>
                            <li className="footer__list-logo">
                                <a href="">Contract</a>
                            </li>
                            <li className="footer__list-logo">
                                <a href="">Careers</a>
                            </li>
                            <li className="footer__list-logo">
                                <a href="">Blog</a>
                            </li>
                            <li className="footer__list-logo">
                                <a href="">FAQ,s</a>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__bottom">
                        <p>Copyright © 2022 Xpro . All Rights Reseved.</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer