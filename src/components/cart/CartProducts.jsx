import CartProduct from "./CartProduct"
export const CartProducts = ({ cart }) => {
    return (
        <div style={{ position: 'relative', top: '4rem', left: '-3rem' }}>
            {cart.cartItems.map(product => <CartProduct key={product.id} product={product} />)}
            {/* The map here will result in unique product only because, if same product added, it's count
            is only increased in our cart data structure */}
        </div>
    )
}