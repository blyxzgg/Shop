import ShopNav from "./ShopNav"
import ShopProducts from "./ShopProducts"

const ShopPage = ({ openField, setOpenField }) => {
    return (
        <>
            <ShopNav
                openField={openField}
                setOpenField={setOpenField}
            />
            <ShopProducts/>
        </>
    )
}

export default ShopPage