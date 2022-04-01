import "./filter.css"
import { Link } from "react-router-dom"
export default function Filter() {
    return (
        <aside class="filter-wrapper">
            <div class="filter-container">
                <Link to="/">
                    <button>Back to Home</button>
                </Link>
                <div class="filter">
                    <h3>Filter</h3>
                    <span>Clear</span>
                </div>

                <div class="price">
                    <h3>Price</h3>
                    <div class="slider">
                        <input
                            type="range"
                            value="35"
                            name="range-input"
                            min="500"
                            max="2000"
                            oninput="this.nextElementSibling.value = this.value"
                        />
                        <output>500</output>
                    </div>
                </div>

                <div class="category">
                    <h3>Category</h3>
                    <label for="">
                        <input class="vertical-align-checkbox" type="checkbox" name="Men" id="" />
                        Men
                    </label>
                    <label for="">
                        <input class="vertical-align-checkbox" type="checkbox" name="Men" id="" />
                        Women
                    </label>
                    <label for="">
                        <input class="vertical-align-checkbox" type="checkbox" name="Men" id="" />
                        Kid's
                    </label>
                </div>

                <div class="rating">
                    <h3>Rating</h3>
                    <label class="block" for="">
                        <input class="vertical-align-radio" type="radio" name="" id="" />
                        4 stars & above
                    </label>
                    <label class="block" for="">
                        <input class="vertical-align-radio" type="radio" name="" id="" />
                        3 stars & above
                    </label>
                    <label class="block" for="">
                        <input class="vertical-align-radio" type="radio" name="" id="" />
                        2 stars & above
                    </label>
                    <label class="block" for="">
                        <input class="vertical-align-radio" type="radio" name="" id="" />
                        1 stars & above
                    </label>
                </div>

                <div class="sort">
                    <h3>Sort by</h3>
                    <label class="block" for="">
                        <input class="vertical-align-radio" type="radio" name="" id="" />
                        Price - High to Low
                    </label>
                    <label class="block" for="">
                        <input class="vertical-align-radio" type="radio" name="" id="" />
                        Price - Low to High
                    </label>
                </div>
            </div>
        </aside>
    )
}