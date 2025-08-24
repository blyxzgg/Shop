import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchWomensDresses, fetchMensShirts } from "../../features/arrivalsSlice";
import Btn from "../../assets/shared/Btn";
import "./Main.css";

const Arrivals = ({ activeCategory, setActiveCategory }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { dresses, shirts, error } = useSelector((state) => state.arrivals);

    useEffect(() => {
        dispatch(fetchWomensDresses());
        dispatch(fetchMensShirts());
    }, [dispatch]);

    if (error) return <p>Ошибка: {error}</p>;

    return (
        <section className="arrivals" id="arrivals">
            <div className="arrivals__content container">
                <div className="arrivalls__content-info">
                    <h2>New Arrivals</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin </p>
                    <ul className="arrivals__list">
                        <li className="arrivals__list-section">
                            <button
                                className={activeCategory === "men" ? "active" : ""}
                                onClick={() => setActiveCategory("men")}
                            >
                                Men’s Fashion
                            </button>
                        </li>
                        <li className="arrivals__list-section">
                            <button
                                className={activeCategory === "women" ? "active" : ""}
                                onClick={() => setActiveCategory("women")}
                            >
                                Women’s Fashion
                            </button>
                        </li>
                    </ul>
                </div>

                <div className="arrivalls__content-products">
                    {activeCategory === "women" &&
                        dresses.map((dress) => (
                            <div className="card" key={dress.id}>
                                <img src={dress.thumbnail} alt={dress.title} />
                                <h3>{dress.title}</h3>
                                <p>{dress.rating} - Customer Reviews</p>
                                <p>{dress.description}</p>
                                <span>${dress.price}</span>
                            </div>
                        ))
                    }

                    {activeCategory === "men" &&
                        shirts.map((shirt) => (
                            <div className="card" key={shirt.id}>
                                <img src={shirt.thumbnail} alt={shirt.title} />
                                <h3>{shirt.title}</h3>
                                <p>{shirt.rating} - Customer Reviews</p>
                                <p>{shirt.description}</p>
                                <span>${shirt.price}</span>
                            </div>
                        ))
                    }
                </div>

                <Btn
                    content={"View More"}
                    style={{ marginTop: "50px", marginBottom: "150px", alignSelf: "center" }}
                    onClick={() => navigate("/shop")}
                />
            </div>
        </section>
    );
};

export default Arrivals;
