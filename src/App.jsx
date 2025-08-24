import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import HomePage from "./pages/HomePage/HomePage";
import ShopPage from "./pages/ShopPage/ShopPage";
import ProductDetails from "./pages/DetailsPage/ProductDetails"
import CartPage from "./pages/CartPage/CartPage";

const App = () => {
  const [dresses, setDresses] = useState([]);
  const [shirts, setShirts] = useState([]);
  const [openField, setOpenField] = useState(false)
  const [activeCategory, setActiveCategory] = useState("men");
  const [quantity, setQuantity] = useState(1);
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage
          dresses={dresses}
          setDresses={setDresses}
          shirts={shirts}
          setShirts={setShirts}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />} />
        <Route path="/shop" element={<ShopPage
          openField={openField}
          setOpenField={setOpenField} />}
        />
        <Route path="/shop/:id" element={<ProductDetails
          quantity={quantity}
          setQuantity={setQuantity} />}
        />
        <Route path="/shop/cart" element={<CartPage />}></Route>
      </Routes>
    </>
  )
}

export default App
