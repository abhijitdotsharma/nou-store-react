// will go to product-page on button click
import {Link} from "react-router-dom";
import "./categories.css"
export default function Categories() {
    return (
        <section class="category">
            <h3 class="category-heading">CHOOSE YOUR <span>POISON</span></h3>
            <div class="category-images">
                <div class="category-image">
                    <Link to="/products">
                        <img src="https://picsum.photos/200" alt="category 1" />
                    </Link>
                </div>
                <div class="category-image">
                    <Link to="/products">
                        <img src="https://picsum.photos/200" alt="category 1" />
                    </Link>
                </div>
                <div class="category-image">
                    <Link to="/products">
                        <img src="https://picsum.photos/200" alt="category 1" />
                    </Link>
                </div>
                <div class="category-image">
                    <Link to="/products">
                        <img src="https://picsum.photos/200" alt="category 1" />
                    </Link>
                </div>
            </div>
        </section>
    )
}