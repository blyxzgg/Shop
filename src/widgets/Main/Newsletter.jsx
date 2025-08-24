import leftMan from "../../assets/images/Newsletter_photos/newsletterMan.png"
import leftWoman from "../../assets/images/Newsletter_photos/newsletterWomen.png"
import Btn from "../../assets/shared/Btn"
import "./Main.css"

const Newsletter = () => {
    return (
        <>
            <section className="newsletter">
                <div className="newsletter__content container">
                    <div className="newsletter__content-left">
                        <img src={leftMan} alt="" />
                    </div>
                    <div className="newsletter__content-center">
                        <h2>Subscribe To Our Newsletter</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin </p>
                        <form action="" >
                            <input type="email" placeholder="michael@ymail.com" />
                            <Btn content={'Subscribe Now'} />
                        </form>
                    </div>
                    <div className="newsletter__content-right">
                        <img src={leftWoman} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Newsletter