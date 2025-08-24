import ReviewsCarousel from "./Carousels/ReviewsCarousel"
import "./Main.css"

const Reviews = () => {
    return (
        <>
            <section className="reviews" id="reviews">
                <div className="review__content container">
                    <div className="review__content-info">
                        <h2>This Is What Our Customers Say</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque duis</p>
                    </div>
                </div>
                <div className="review__content-slider">
                    <ReviewsCarousel />
                </div>
            </section>
        </>
    )
}

export default Reviews