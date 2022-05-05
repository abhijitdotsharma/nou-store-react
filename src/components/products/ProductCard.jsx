//I will take a product detail prop from Products.jsx and render it

const ProductCard = ({ product }) => {
    return (
        <>
            <div className="card">
                <div className="card__image">
                    <img src={`${product.photo}`} alt="some pic" />
                    <span className="card__badge">Limited</span>
                </div>
                <div className="card__info">
                    <div className="card__title">
                        <div>
                            <h4 className="card__heading">{product.title}</h4>
                            <small className="card__brand">{product.author}</small>
                            <small className="card__rating">{product.rating}<i class="fal fa-star"></i></small>
                        </div>
                        <i className="far fa-heart"></i>
                    </div>
                    <div className="card__price">
                        <p className="price__present">{product.price}</p>
                        <p className="price__original">YYY</p>
                        <p className="price__discount">75%</p>
                    </div>
                </div>                
                <button>Add to Cart</button>
            </div>
        </>
    )

}

export { ProductCard }