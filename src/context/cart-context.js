import { createContext, useContext, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState({
        cartCount: 0,
        cartItems: [] //cartItems: [{id: 1, name: "apple", productCount: 1}]
        // {
        //     _id: uuid(),
        //     photo: "https://res.cloudinary.com/wickedsharma/image/upload/v1651232683/nou-store/ball1_oyexb5.jpg",
        //     title: "Football 1",
        //     author: "barca",
        //     price: "500",
        //     rating: 2.3,
        //     categoryName: "ball",
        //   },
    });

    function addToCart(product){
        console.log('addToCart wired', product)
        //if product.id not on cart.cartItems, add it 
        //else update the product's cartCount
        setCart(prev => {
            const found = prev.cartItems.some(itemObj => itemObj.id === product.id) //product in cart, increase productCount and cartCount

            //new product addition
            if(!found){
                return {
                    ...prev,
                    cartCount: prev.cartCount + 1,
                    cartItems: [...prev.cartItems, {...product, productCount: 1}]}
    // cartItems: [...prev.cartItems, {...product, }] -> put everything from product to cart.cartItems and add productCount: 1
            }

            return {
                ...prev,
                cartCount: prev.cartCount + 1, 
                cartItems: [
                    ...prev.cartItems.map((itemObj) => {
                        //increase productCount of id===product.id
                        if(itemObj.id === product.id) return {...itemObj, productCount: itemObj.productCount + 1}
                        //return other cartItem objects as they were, similar to ... since map returns a copy
                        return itemObj;
                    })]
            }

        })
    }

    function removeFromCart(){
        //remove an item from cart.cartItems based on its id
    }


    //clearCart function can be moved to CartPage, since its only needed there no need to put in context - for future
    function clearCart(){
        setCart(prev => ({...prev, cartCount: 0, cartItems: []}))
    }


    return(
        <CartContext.Provider value={{addToCart, cart}}>
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => useContext(CartContext);

export {useCart, CartProvider};