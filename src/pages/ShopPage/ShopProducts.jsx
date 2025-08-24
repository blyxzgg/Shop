import "./ShopPage.css";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  sortLowToHigh,
  sortHighToLow,
  resetSort,
  setPage,
} from "../../features/productSlice.js";
import Loader from "../../assets/shared/Loader.jsx";

const ShopProducts = () => {
  const dispatch = useDispatch();
  const { sorted, loading, searchQuery, currentPage, itemsPerPage } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <Loader />;

  const filtered = sorted.filter((p) =>
    p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filtered.slice(startIndex, startIndex + itemsPerPage);

  return (
    <section className="fashion">
      <div className="fashion__content">
        <div className="fashion__title">
          <h2>Fashion</h2>
          <p>
            Home → <span>Fashion</span>
          </p>
        </div>

        <div className="fashion__products container">
          <div className="fashion___filters">
            <h2>Filters</h2>
            <div className="price__filter">
              <span>Prices</span>
              <button onClick={() => dispatch(sortLowToHigh())}>$ - $$$</button>
              <button onClick={() => dispatch(sortHighToLow())}>$$$ - $</button>
              <button onClick={() => dispatch(resetSort())}>Сброс</button>
            </div>
          </div>

          <div className="obertka">
            <div className="fashion__items">
              {currentItems.length > 0 ? (
                currentItems.map((product) => (
                  <Link key={product.id} to={`/shop/${product.id}`}>
                    <div className="product__card">
                      <img src={product.thumbnail} alt={product.title} />
                      <p>{product.title}</p>
                      <span>${product.price}</span>
                    </div>
                  </Link>
                ))
              ) : (
                <p className="nothing__found">Ничего не найдено</p>
              )}
            </div>

            {filtered.length > 0 && (
              <div className="pagination">
                <button
                  disabled={currentPage === 1}
                  onClick={() => dispatch(setPage(currentPage - 1))}
                >
                  «
                </button>
                <span>
                  {currentPage} из {totalPages}
                </span>
                <button
                  disabled={currentPage === totalPages}
                  onClick={() => dispatch(setPage(currentPage + 1))}
                >
                  »
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopProducts;
