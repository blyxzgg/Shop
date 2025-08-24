import "./NavBar.css"
import { Link, useNavigate } from "react-router-dom";
import left from "../../assets/images/NavBar_photos/left__model.png"
import right from "../../assets/images/NavBar_photos/right__model.png"
import top from "../../assets/images/NavBar_photos/top__banner.png"
import bottom from "../../assets/images/NavBar_photos/bottom__banner.png"
import chanel from "../../assets/images/NavBar_photos/chanel.png"
import lui from "../../assets/images/NavBar_photos/lui.png"
import prada from "../../assets/images/NavBar_photos/prada.png"
import calvin from "../../assets/images/NavBar_photos/calvin.png"
import denim from "../../assets/images/NavBar_photos/denim.png"
import Btn from "../../assets/shared/Btn"

const NavBar = () => {
    const navigate = useNavigate();
    return (
        <>
            <nav className="nav">
                <div className="nav__content container">
                    <div className="nav__top">
                        <div className="nav__content-logo">
                            <Link to={'/'}>FASCO</Link>
                        </div>
                        <div className="nav__content-links">
                            <ul className="nav__list">
                                <li className="nav__list-link">
                                    <Link to="/">
                                        Home
                                    </Link>
                                </li>
                                <li className="nav__list-link">
                                    <a href="#deals">
                                        Deals
                                    </a>
                                </li>
                                <li className="nav__list-link">
                                    <a href="#arrivals">
                                        New Arrivals
                                    </a>
                                </li>
                                <li className="nav__list-link">
                                    <a href="#reviews">
                                        Reviews
                                    </a>
                                </li>
                                <li className="nav__list-link">
                                    <Btn content={"Shop"} onClick={() => navigate("/shop")} />
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="nav__middle">
                        <div className="grid__container">
                            <div className="left-model"><img src={left} alt="" /></div>
                            <div className="top-banner"><img src={top} alt="" /></div>
                            <div className="main-content">
                                <h1>ULTIMATE</h1>
                                <h2>SALE</h2>
                                <p>New Collection</p>
                                <Btn content={"Shop now"} className="btn" style={{ marginTop: "20px" }} onClick={() => navigate("/shop")} />
                            </div>
                            <div className="bottom-banner"><img src={bottom} alt="" /></div>
                            <div className="right-model"><img src={right} alt="" /></div>
                        </div>
                    </div>
                    <div className="nav__bottom">
                        <ul className="brands__list">
                            <li className="brands__list-link">
                                <img src={chanel} alt="" />
                            </li>
                            <li className="brands__list-link">
                                <img src={lui} alt="" />
                            </li>
                            <li className="brands__list-link">
                                <img src={prada} alt="" />
                            </li>
                            <li className="brands__list-link">
                                <img src={calvin} alt="" />
                            </li>
                            <li className="brands__list-link">
                                <img src={denim} alt="" />
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar;