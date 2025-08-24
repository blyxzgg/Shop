import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearProduct, fetchDeatailProduct } from "../../features/detailProductSlice";
import ShopNav from "../ShopPage/ShopNav";
import cards from "../../assets/images/Pages_photo/cards.png";
import Loader from "../../assets/shared/Loader";
import "./ProductDetails.css";

const ProductDetails = ({ quantity, setQuantity }) => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { product, loading, error } = useSelector((state) => state.detailsProduct);

  useEffect(() => {
    dispatch(fetchDeatailProduct(id));

    return () => {
      dispatch(clearProduct());
    };
  }, [dispatch, id]);

  const increase = () => setQuantity((prev) => prev + 1);
  const decrease = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  if (loading) return <Loader />;
  if (error) return <p>Ошибка: {error}</p>;
  if (!product) return <p>Нет данных</p>;

  return (
    <>
      <ShopNav />
      <div className="details__card container">
        <div className="details__card-img">
          <Link to={"/shop"}>
            <svg
              width="17"
              height="26"
              viewBox="0 0 17 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.5 26C8.24955 26 8.00936 25.9022 7.83227 25.728C7.65518 25.5539 7.55569 25.3177 7.55569 25.0715L7.55569 3.1716L1.61408 9.01566C1.43676 9.19001 1.19627 9.28796 0.945502 9.28796C0.694739 9.28796 0.454247 9.19001 0.27693 9.01566C0.0996136 8.84131 -1.52073e-06 8.60484 -1.54229e-06 8.35827C-1.56384e-06 8.1117 0.0996135 7.87523 0.27693 7.70088L7.83142 0.272786C7.91914 0.186316 8.02335 0.117713 8.13807 0.0709046C8.2528 0.0240963 8.37579 7.53952e-07 8.5 7.43094e-07C8.62421 7.32235e-07 8.7472 0.0240963 8.86192 0.0709045C8.97665 0.117713 9.08085 0.186316 9.16857 0.272786L16.7231 7.70088C16.9004 7.87523 17 8.1117 17 8.35827C17 8.60484 16.9004 8.84131 16.7231 9.01566C16.5458 9.19001 16.3053 9.28795 16.0545 9.28795C15.8037 9.28795 15.5632 9.19001 15.3859 9.01566L9.44431 3.1716L9.44431 25.0715C9.44431 25.3177 9.34482 25.5539 9.16773 25.728C8.99063 25.9022 8.75045 26 8.5 26Z"
                fill="black"
              />
            </svg>
          </Link>
          <img src={product.thumbnail} alt={product.title} />
        </div>
        <div className="details__card-info">
          <div className="details__card-descr">
            <span>FASCO</span>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <h4>${(product.price * quantity).toFixed(2)}</h4>
          </div>
          <div className="details__card-purchase">
            <span className="subtitle">Quantity</span>
            <div>
              <div className="quantity__bar">
                <button onClick={decrease}>-</button>
                <span>{quantity}</span>
                <button onClick={increase}>+</button>
              </div>
              <button className="cart__btn">Add to cart</button>
            </div>
          </div>
          <div className="details__card-shipping">
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16.9219 6.26875L15.3406 1.525C15.1375 0.9125 14.5656 0.5 13.9187 0.5H4.08125C3.43437 0.5 2.8625 0.9125 2.65937 1.525L1.07812 6.26875C1.02812 6.42188 1 6.58125 1 6.74375V15C1 15.8281 1.67188 16.5 2.5 16.5H15.5C16.3281 16.5 17 15.8281 17 15V6.74375C17 6.58125 16.975 6.42188 16.9219 6.26875ZM2 6.74375C2 6.69063 2.00937 6.6375 2.025 6.58437L3.60625 1.84063C3.675 1.6375 3.86562 1.5 4.08125 1.5H8.5V6.75H2V6.74375ZM16 15C16 15.275 15.775 15.5 15.5 15.5H2.5C2.225 15.5 2 15.275 2 15V7.75H16V15ZM16 6.75H9.5V1.5H13.9187C14.1344 1.5 14.325 1.6375 14.3938 1.84063L15.975 6.58437C15.9906 6.63438 16 6.6875 16 6.74375V6.75Z" fill="black" stroke="black" strokeWidth="0.03125" />
            </svg>
            <span>Free Shipping & Returns:</span>
            <p>{product.shippingInformation}</p>
          </div>
          <div className="details__card-trustbag">
            <img src={cards} alt="" />
            <p>Guarantee safe & secure checkout</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
