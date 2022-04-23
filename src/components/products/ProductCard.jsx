//I will take a product detail prop from Products.jsx and render is beautifully
import { useState } from "react";

const ProductCard = ({ product }) => {

    return (
        <>
            <div className="card">
                <div className="card-image">
                    <img src={`${product.photo}`} alt="some pic" />
                    <span className="card-badge">Limited</span>
                </div>
                <div className="card-info">
                    <div className="card-title">
                        <div>
                            <h3>Men's Slim Fit Shirt</h3>
                            <small>Calvin Klein</small>
                        </div>
                        <i className="far fa-heart"></i>
                    </div>
                    <div className="card-price">
                        <p className="disc-price">{product.price}</p>
                        <p className="og-price">YYY</p>
                        <p className="disc-percent">(75% OFF)</p>
                    </div>
                </div>
                <button>Add to Cart</button>
            </div>
        </>
    )

}

export { ProductCard }