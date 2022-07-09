import "./cart-product.css";
import { useCart } from "../../context/cart-context";
import { getDiscountOfProduct } from "../utilities/getDiscountOfProduct";

const CartProduct = ({ product }) => {

    const { addToCart, removeFromCart, decreaseProductCountInCart } = useCart();

    let discount = getDiscountOfProduct(product.price, product.originalPrice);

    return (
        <div className="cart-card">
            <div className="cart-card-image">
                <img
                    src={`${product.photo}`}
                    alt="product-img"
                />
            </div>
            <div className="cart-card-content">
                <p className="cart-card-heading">{product.title}</p>
                <div className="card-price">
                    <p className="disc-price">{`$${product.price}`}</p>
                    <p className="og-price">{`${product.originalPrice}`}</p>
                    <p className="disc-percent">{`${discount}% off`}</p>
                </div>
                <div className="card-quantity-div">
                    <span>Quantity</span>
                    <i
                        className="fal fa-minus-circle"
                        onClick={() => decreaseProductCountInCart(product.id)}
                    ></i>
                    <input
                        type="number"
                        value={product.productCount}
                    />
                    <i
                        onClick={() => addToCart(product)}
                        className="fal fa-plus-circle"
                    ></i>
                </div>

                <button
                    onClick={() => removeFromCart(product.id)}
                >Remove From Cart</button>
                <button>Move to Wishlist</button>
            </div>
        </div>

    )
}

export default CartProduct;