// will go to product-page on button click
import {Link} from "react-router-dom";
import "./categories.css"
export default function Categories() {
    return (
        <section className="category">
            <h3 className="category-heading">CHOOSE YOUR <span>POISON</span></h3>
            <div className="category-images">
                <div className="category-image">
                    <Link to="/products">
                        <img src="https://picsum.photos/200" alt="category 1" />
                    </Link>
                </div>
                <div className="category-image">
                    <Link to="/products">
                        <img src="https://picsum.photos/200" alt="category 1" />
                    </Link>
                </div>
                <div className="category-image">
                    <Link to="/products">
                        <img src="https://picsum.photos/200" alt="category 1" />
                    </Link>
                </div>
                <div className="category-image">
                    <Link to="/products">
                        <img src="https://picsum.photos/200" alt="category 1" />
                    </Link>
                </div>
            </div>
        </section>
    )
}