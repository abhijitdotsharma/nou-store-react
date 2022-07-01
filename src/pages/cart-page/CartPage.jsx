import { CartProducts, NavigationTop } from "../../components/";
import { useCart } from "../../context/cart-context";
import "./cart-page.css";

const CartSummary = ({ cart }) => {

    // returns acc <- 0 + item1.price * item1.count on 1st iteration 
    const productCountReducer = (acc, curr) => acc + (Number(curr.price) * curr.productCount);
    function totalPriceOfItems() {
        //totalPrice
        return cart.cartItems.reduce(productCountReducer, 0)
    }

    const productDiscountReducer = (acc, curr) => {
        //1st iter - 0 + (OGprice - price) * productCount
        return acc + ((Number(curr.originalPrice) - Number(curr.price)) * curr.productCount)
    }
    function totalDiscountOfItems() {
        return cart.cartItems.reduce(productDiscountReducer, 0)
    }

    let totalPrice = totalPriceOfItems();
    let totalDiscount = totalDiscountOfItems();

    let deliveryCharge = totalPrice > 500 ? 0 : 40

    let totalAmount = totalPrice + deliveryCharge
    let totalSave = totalDiscount - deliveryCharge;

    return (
        <div
            className="checkout"
            style={{
                border: '1px solid black',
                width: '280px',
                height: '300px',
            }}
        >
            <h3 className="checkout-heading">PRICE DETAILS</h3>
            <hr />

            <div className="checkout-price checkout-flex-row">
                <p>Price <span>{`${cart.cartCount} Items`}</span></p>
                <p>{totalPrice}</p>
            </div>
            <div className="checkout-discount checkout-flex-row">
                <p>Discount</p>
                <p>{totalDiscount}</p>
            </div>
            <div className="delivery checkout-flex-row">
                <p>Delivery Charges</p>
                <p>{`$ ${deliveryCharge}`}</p>
            </div>
            <hr />
            <div className="checkout-total checkout-flex-row">
                <p>TOTAL AMOUNT</p>
                <p>{totalAmount}</p>
            </div>
            <hr />
            <p>You will save <span>{totalSave}</span> on this order</p>
            <button className="checkout-btn">Place Order</button>
        </div>
    )
}



const CartPage = () => {
    const { cart, clearCart } = useCart();

    return (
        <div>
            <NavigationTop />
            <CartProducts cart={cart} />
            <button
                style={{ position: "fixed", right: '1rem', top: '8rem' }}
                onClick={clearCart}
            >Clear Cart
            </button>
            <CartSummary cart={cart} />
        </div>
    )
}

export default CartPage