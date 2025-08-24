import "./Main.css"
import Btn from "../../assets/shared/Btn"
import DealsCarousel from "./Carousels/DealsCarousel"
import { useNavigate } from "react-router-dom"

const Deals = () => {
    const navigate = useNavigate()
    return (
        <>
            <section className="deals" id="deals">
                <div className="deals__content container">
                    <div className="info__block">
                        <div className="info__block-top">
                            <h2>Deals Of The Month</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin </p>
                            <Btn content={"Buy Now"} onClick={() => navigate("/shop")} />
                        </div>
                        <div className="info__block-bottom">
                            <h2>Hurry, Before It’s Too Late!</h2>
                            <ul className="bottom__block-list">
                                <li className="bottom__block-link">
                                    <div className="number__card">
                                        <span>02</span>
                                    </div>
                                    <p>Days</p>
                                </li>
                                <li className="bottom__block-link">
                                    <div className="number__card">
                                        <span>06</span>
                                    </div>
                                    <p>Hr</p>
                                </li>
                                <li className="bottom__block-link">
                                    <div className="number__card">
                                        <span>05</span>
                                    </div>
                                    <p>Mins</p>
                                </li>
                                <li className="bottom__block-link">
                                    <div className="number__card">
                                        <span>30</span>
                                    </div>
                                    <p>Sec</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="slider">
                        <DealsCarousel />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Deals