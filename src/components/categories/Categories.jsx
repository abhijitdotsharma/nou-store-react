// will go to product-page on button click
import "./categories.css"
export default function Categories() {
    return (
        <section class="category">
            <h3 class="category-heading">CHOOSE YOUR <span>POISON</span></h3>
            <div class="category-images">
                <div class="category-image">
                    <a href="./files/product-page.html">
                        <img src="https://picsum.photos/200" alt="category 1" />
                    </a>
                </div>
                <div class="category-image">
                    <a href="./files/product-page.html">
                        <img src="https://picsum.photos/200" alt="category 2" />
                    </a>
                </div>
                <div class="category-image">
                    <a href="./files/product-page.html">
                        <img src="https://picsum.photos/200" alt="category 3" />
                    </a>
                </div>
                <div class="category-image">
                    <a href="./files/product-page.html">
                        <img src="https://picsum.photos/200" alt="category 4" />
                    </a>
                </div>
            </div>
        </section>
    )
}