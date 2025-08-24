import instaPeople from "../../assets/images/Insta__photos/instaPeople.png"
import "./Main.css"

const Instagram = () => {
    return (
        <>
            <section className="instagram">
                <div className="instagram__content">
                    <div className="instagram__content-info">
                        <h2>Follow Us On Instagram</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis ultrices sollicitudin aliquam sem. Scelerisque duis ultrices sollicitudin </p>
                    </div>
                    <div className="instagram__content-photos">
                        <img src={instaPeople} alt="" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Instagram