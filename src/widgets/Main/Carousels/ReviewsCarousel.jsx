import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import review1 from "../../../assets/images/Customers__photos/reviewsLeft.png"
import review2 from "../../../assets/images/Customers__photos/reviewsCenter.png"
import review3 from "../../../assets/images/Customers__photos/reviewsRight.png"

const ReviewsCarousel = () => {
  const reviews = [
    {
      id: 1,
      img: review1,
      text: "Items That I ordered were the best investment I ever made. I can't say enough about your quality service.",
      name: "Suzan B.",
      role: "UI Designer"
    },
    {
      id: 2,
      img: review2,
      text: "You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!",
      name: "James K.",
      role: "Traveler"
    },
    {
      id: 3,
      img: review3,
      text: "Just what I was looking for. Thank you for making it painless, pleasant and most of all hassle free! All products are great.",
      name: "Megen W.",
      role: "UI Designer"
    }
  ];

  return (
    <div className="reviews-carousel">
      <Swiper
        modules={[Navigation]}
        navigation={{
          nextEl: ".reviews-next",
          prevEl: ".reviews-prev"
        }}
        slidesPerView={3}
        centeredSlides={true}
        loop={false}
        spaceBetween={-440}
        initialSlide={1}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <div className="review-card">
              <div className="review-card__img">
                <img src={review.img} alt={review.name} />
              </div>
              <div className="review-card__info">
                <p>{review.text}</p>
                <svg width="95" height="19" viewBox="0 0 95 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M11.6646 7.12771L9.5 0L7.33536 7.12771H0L5.93479 11.742L3.73214 19L9.5 14.5146L15.2679 19L13.0652 11.742L19 7.12771H11.6646Z" fill="#FCA120" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M30.6646 7.12771L28.5 0L26.3354 7.12771H19L24.9348 11.742L22.7321 19L28.5 14.5146L34.2679 19L32.0652 11.742L38 7.12771H30.6646Z" fill="#FCA120" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M49.6646 7.12771L47.5 0L45.3354 7.12771H38L43.9348 11.742L41.7321 19L47.5 14.5146L53.2679 19L51.0652 11.742L57 7.12771H49.6646Z" fill="#FCA120" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M68.6646 7.12771L66.5 0L64.3354 7.12771H57L62.9348 11.742L60.7321 19L66.5 14.5146L72.2679 19L70.0652 11.742L76 7.12771H68.6646Z" fill="#FCA120" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M87.6646 7.12771L85.5 0L83.3354 7.12771H76L81.9348 11.742L79.7321 19L85.5 14.5146L91.2679 19L89.0652 11.742L95 7.12771H87.6646Z" fill="#FCA120" />
                </svg>
                <h4>{review.name}</h4>
                <p>{review.role}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="reviews-navigation">
        <button className="reviews-prev">◀</button>
        <button className="reviews-next">▶</button>
      </div>
    </div>
  );
};

export default ReviewsCarousel;
