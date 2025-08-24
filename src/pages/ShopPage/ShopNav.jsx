import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearchQuery } from "../../features/productSlice";
import "./ShopPage.css";

const ShopNav = ({ openField, setOpenField }) => {
    const dispatch = useDispatch();
    const search = useSelector((state) => state.products.searchQuery);

    return (
        <nav className="nav">
            <div className="shopNav__content container">
                <div className="shopNav__logo">
                    <Link to={'/'}>FASCO</Link>
                </div>
                <ul className="shopNav__list">
                    <Link className="shopNav__list-link" to={'/'}>
                        Home
                    </Link>
                    <Link className="shopNav__list-link shop" to={'/shop'}>
                        Shop
                    </Link>
                </ul>
                <ul className="shopNav__icons-list">
                    <li className="shopNav__icons-field">
                        {openField ? (
                            <input
                                type="text"
                                placeholder="Search"
                                value={search}
                                onChange={(e) =>
                                    dispatch(setSearchQuery(e.target.value))
                                }
                            />
                        ) : null}
                    </li>
                    <li className="shopNav__icons-link">
                        <button onClick={() => setOpenField((prev) => !prev)}>
                            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_6_192)"> <path d="M17.877 16.4848L13.609 12.2168C13.5281 12.1359 13.4227 12.0938 13.3102 12.0938H12.8461C13.9535 10.8105 14.625 9.14062 14.625 7.3125C14.625 3.27305 11.352 0 7.3125 0C3.27305 0 0 3.27305 0 7.3125C0 11.352 3.27305 14.625 7.3125 14.625C9.14062 14.625 10.8105 13.9535 12.0938 12.8461V13.3102C12.0938 13.4227 12.1395 13.5281 12.2168 13.609L16.4848 17.877C16.65 18.0422 16.9172 18.0422 17.0824 17.877L17.877 17.0824C18.0422 16.9172 18.0422 16.65 17.877 16.4848ZM7.3125 12.9375C4.20469 12.9375 1.6875 10.4203 1.6875 7.3125C1.6875 4.20469 4.20469 1.6875 7.3125 1.6875C10.4203 1.6875 12.9375 4.20469 12.9375 7.3125C12.9375 10.4203 10.4203 12.9375 7.3125 12.9375Z" fill="#484848" stroke="#484848" strokeWidth="0.0351562" /> </g> <defs> <clipPath id="clip0_6_192"> <rect width="18" height="18.0009" fill="white" /> </clipPath> </defs> </svg>
                        </button>
                    </li>
                    <li className="shopNav__icons-link">
                        <Link to={'/shop/cart'}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <g clipPath="url(#clip0_6_201)"> <path d="M15 5C15 2.24297 12.757 0 10 0C7.24297 0 5 2.24297 5 5H1.25V16.875C1.25 18.6009 2.6491 20 4.375 20H15.625C17.3509 20 18.75 18.6009 18.75 16.875V5H15ZM10 1.875C11.7231 1.875 13.125 3.27688 13.125 5H6.875C6.875 3.27688 8.27688 1.875 10 1.875ZM16.875 16.875C16.875 17.5643 16.3143 18.125 15.625 18.125H4.375C3.68574 18.125 3.125 17.5643 3.125 16.875V6.875H5V8.4375C5 8.95527 5.41973 9.375 5.9375 9.375C6.45527 9.375 6.875 8.95527 6.875 8.4375V6.875H13.125V8.4375C13.125 8.95527 13.5447 9.375 14.0625 9.375C14.5803 9.375 15 8.95527 15 8.4375V6.875H16.875V16.875Z" fill="#484848" stroke="#484848" strokeWidth="0.0390625" /> </g> <defs> <clipPath id="clip0_6_201"> <rect width="20" height="20" fill="white" /> </clipPath> </defs> </svg>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default ShopNav;
