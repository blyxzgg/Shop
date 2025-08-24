import Footer from "../../widgets/Footer/Footer"
import Main from "../../widgets/Main/Main"
import NavBar from "../../widgets/NavBar/NavBar"

const HomePage = ({ activeCategory, setActiveCategory, dresses, setDresses, shirts, setShirts }) => {
    return (
        <>
            <NavBar />
            <Main
                dresses={dresses}
                setDresses={setDresses}
                shirts={shirts}
                setShirts={setShirts}
                activeCategory={activeCategory}
                setActiveCategory={setActiveCategory}
            />
            <Footer />
        </>
    )
}

export default HomePage