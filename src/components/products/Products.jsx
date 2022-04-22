import "./products.css";
import axios from 'axios';
import {useState, useEffect} from 'react';

export default function Products() {

    const [products, setProducts] = useState([
        // {
        //     _id: 1,
        //     title: "My book",
        //     author: "Abhijit",
        //     price: "1000",
        //     categoryName: "dummy",
        // },
    ]);

    useEffect(()=>{
        console.log("I am in");
        loadProductsHandler();
    }, [])

    async function loadProductsHandler(){
        const res = await axios.get("/api/products/");
        const resProducts = res.data.products;
        setProducts(prev => [...prev, ...resProducts]);
    }

    function removeProductsHandler(){
        setProducts([])
    }

    return (
        <section class="products-wrapper">
            <button onClick={loadProductsHandler}>Load Products</button>

            {products && products.map(product => 
                <div className="card">
                    <h1>{product.title}</h1>
                    <small>{product.author}</small>
                    <img src={product.photo} alt="some pic" />
                    <h3>{product.price}</h3>
                    <p>{product.categoryName}</p>
                    
                </div>)}
            
            <button onClick={removeProductsHandler}>remove</button>
            {/* <div class="card">
                <div class="card-image">
                    <img
                        src="https://images.unsplash.com/photo-1509305717900-84f40e786d82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&q=80"
                        alt="image"
                    />
                    <span class="card-badge">Limited</span>
                </div>

                <div class="card-info">
                    <div class="card-title">
                        <div>
                            <h3>Men Slim Fit Shirt</h3>
                            <small>Calvin Klein</small>
                        </div>
                        <i class="far fa-heart"></i>
                    </div>
                    <div class="card-price">
                        <p class="disc-price">$500</p>
                        <p class="og-price">$1999</p>
                        <p class="disc-percent">(75% OFF)</p>
                    </div>
                </div>

                <button>Add to Cart</button>
            </div>

            <div class="card">
                <div class="card-image">
                    <img
                        src="https://images.unsplash.com/photo-1509305717900-84f40e786d82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&q=80"
                        alt="image"
                    />
                </div>

                <div class="card-info">
                    <div class="card-title">
                        <div>
                            <h3>Men Slim Fit Shirt</h3>
                            <small>Calvin Klein</small>
                        </div>
                        <i class="far fa-heart"></i>
                    </div>
                    <div class="card-price">
                        <p class="disc-price">$500</p>
                        <p class="og-price">$1999</p>
                        <p class="disc-percent">(75% OFF)</p>
                    </div>
                </div>

                <button>Add to Cart</button>
            </div>

            <div class="card">
                <div class="card-image">
                    <img
                        src="https://images.unsplash.com/photo-1509305717900-84f40e786d82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&q=80"
                        alt="image"
                    />
                </div>

                <div class="card-info">
                    <div class="card-title">
                        <div>
                            <h3>Men Slim Fit Shirt</h3>
                            <small>Calvin Klein</small>
                        </div>
                        <i class="far fa-heart"></i>
                    </div>
                    <div class="card-price">
                        <p class="disc-price">$500</p>
                        <p class="og-price">$1999</p>
                        <p class="disc-percent">(75% OFF)</p>
                    </div>
                </div>

                <button>Add to Cart</button>
            </div>

            <div class="card">
                <div class="card-image">
                    <img
                        src="https://images.unsplash.com/photo-1509305717900-84f40e786d82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&q=80"
                        alt="image"
                    />
                    <span class="card-badge">Trending!</span>
                </div>

                <div class="card-info">
                    <div class="card-title">
                        <div>
                            <h3>Men Slim Fit Shirt</h3>
                            <small>Calvin Klein</small>
                        </div>
                        <i class="far fa-heart"></i>
                    </div>
                    <div class="card-price">
                        <p class="disc-price">$500</p>
                        <p class="og-price">$1999</p>
                        <p class="disc-percent">(75% OFF)</p>
                    </div>
                </div>

                <button>Add to Cart</button>
            </div>

            <div class="card">
                <div class="card-image">
                    <img
                        src="https://images.unsplash.com/photo-1509305717900-84f40e786d82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&q=80"
                        alt="image"
                    />
                </div>

                <div class="card-info">
                    <div class="card-title">
                        <div>
                            <h3>Men Slim Fit Shirt</h3>
                            <small>Calvin Klein</small>
                        </div>
                        <i class="far fa-heart"></i>
                    </div>
                    <div class="card-price">
                        <p class="disc-price">$500</p>
                        <p class="og-price">$1999</p>
                        <p class="disc-percent">(75% OFF)</p>
                    </div>
                </div>

                <button>Add to Cart</button>
            </div>

            <div class="card">
                <div class="card-image">
                    <img
                        src="https://images.unsplash.com/photo-1509305717900-84f40e786d82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&q=80"
                        alt="image"
                    />
                </div>

                <div class="card-info">
                    <div class="card-title">
                        <div>
                            <h3>Men Slim Fit Shirt</h3>
                            <small>Calvin Klein</small>
                        </div>
                        <i class="far fa-heart"></i>
                    </div>
                    <div class="card-price">
                        <p class="disc-price">$500</p>
                        <p class="og-price">$1999</p>
                        <p class="disc-percent">(75% OFF)</p>
                    </div>
                </div>

                <button>Add to Cart</button>
            </div>

            <div class="card">
                <div class="card-image">
                    <img
                        src="https://images.unsplash.com/photo-1509305717900-84f40e786d82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&q=80"
                        alt="image"
                    />
                </div>

                <div class="card-info">
                    <div class="card-title">
                        <div>
                            <h3>Men Slim Fit Shirt</h3>
                            <small>Calvin Klein</small>
                        </div>
                        <i class="far fa-heart"></i>
                    </div>
                    <div class="card-price">
                        <p class="disc-price">$500</p>
                        <p class="og-price">$1999</p>
                        <p class="disc-percent">(75% OFF)</p>
                    </div>
                </div>

                <button>Add to Cart</button>
            </div>

            <div class="card">
                <div class="card-image">
                    <img
                        src="https://images.unsplash.com/photo-1509305717900-84f40e786d82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&q=80"
                        alt="image"
                    />
                </div>

                <div class="card-info">
                    <div class="card-title">
                        <div>
                            <h3>Men Slim Fit Shirt</h3>
                            <small>Calvin Klein</small>
                        </div>
                        <i class="far fa-heart"></i>
                    </div>
                    <div class="card-price">
                        <p class="disc-price">$500</p>
                        <p class="og-price">$1999</p>
                        <p class="disc-percent">(75% OFF)</p>
                    </div>
                </div>

                <button>Add to Cart</button>
            </div>

            <div class="card">
                <div class="card-image">
                    <img
                        src="https://images.unsplash.com/photo-1509305717900-84f40e786d82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&q=80"
                        alt="image"
                    />
                </div>

                <div class="card-info">
                    <div class="card-title">
                        <div>
                            <h3>Men Slim Fit Shirt</h3>
                            <small>Calvin Klein</small>
                        </div>
                        <i class="far fa-heart"></i>
                    </div>
                    <div class="card-price">
                        <p class="disc-price">$500</p>
                        <p class="og-price">$1999</p>
                        <p class="disc-percent">(75% OFF)</p>
                    </div>
                </div>

                <button>Add to Cart</button>
            </div>

            <div class="card">
                <div class="card-image">
                    <img
                        src="https://images.unsplash.com/photo-1509305717900-84f40e786d82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&q=80"
                        alt="image"
                    />
                </div>

                <div class="card-info">
                    <div class="card-title">
                        <div>
                            <h3>Men Slim Fit Shirt</h3>
                            <small>Calvin Klein</small>
                        </div>
                        <i class="far fa-heart"></i>
                    </div>
                    <div class="card-price">
                        <p class="disc-price">$500</p>
                        <p class="og-price">$1999</p>
                        <p class="disc-percent">(75% OFF)</p>
                    </div>
                </div>

                <button>Add to Cart</button>
            </div>

            <div class="card">
                <div class="card-image">
                    <img
                        src="https://images.unsplash.com/photo-1509305717900-84f40e786d82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&q=80"
                        alt="image"
                    />
                </div>

                <div class="card-info">
                    <div class="card-title">
                        <div>
                            <h3>Men Slim Fit Shirt</h3>
                            <small>Calvin Klein</small>
                        </div>
                        <i class="far fa-heart"></i>
                    </div>
                    <div class="card-price">
                        <p class="disc-price">$500</p>
                        <p class="og-price">$1999</p>
                        <p class="disc-percent">(75% OFF)</p>
                    </div>
                </div>

                <button>Add to Cart</button>
            </div> */}
        </section>
    )
}