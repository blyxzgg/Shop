import "./CartPage.css"
import ShopNav from "../ShopPage/ShopNav"

const CartPage = () => {
    return (
        <>
            <ShopNav />
            <section className="cart">
                <div className="cart__content container">
                    <div className="cart__content-title">
                        <h1>Shopping Cart</h1>
                        <p>Home <svg width="8" height="9" viewBox="0 0 8 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.897987 0.140893L0.773692 0.26517C0.691321 0.347542 0.691321 0.4811 0.773692 0.563489L4.21009 3.99991L0.773692 7.43632C0.691321 7.5187 0.691321 7.65225 0.773692 7.73464L0.897987 7.85892C0.980358 7.94129 1.11392 7.94129 1.19629 7.85892L4.90617 4.14906C4.98854 4.06669 4.98854 3.93313 4.90617 3.85074L1.19629 0.140893C1.11392 0.0585044 0.980358 0.0585044 0.897987 0.140893Z" fill="black" stroke="black" stroke-width="0.0175781" />
                        </svg> Your Shopping Cart</p>
                    </div>
                    <div className="cart__content-details">
                        <p>Ваша корзина пуста</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CartPage