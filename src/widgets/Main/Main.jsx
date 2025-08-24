import Arrivals from "./Arrivals"
import Deals from "./Deals"
import Description from "./Description"
import Instagram from "./Instagram"
import Reviews from "./Reviews"
import "./Main.css"
import Newsletter from "./Newsletter"

const Main = ({ activeCategory, setActiveCategory, dresses, setDresses, shirts, setShirts }) => {
    return (
        <>
            <Deals />
            <Arrivals dresses={dresses} setDresses={setDresses} shirts={shirts} setShirts={setShirts} activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
            <Description />
            <Instagram />
            <Reviews />
            <Newsletter />
        </>
    )
}

export default Main