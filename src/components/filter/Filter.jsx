import "./filter.css"
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Filter({ filterDispatch, sliderValue, productState}) {

    const RATING = ['4star', '3star', '2star', '1star'];

    const [clearSliderBtn, setClearSliderBtn] = useState(false);

    const clearFilters = (e) => {
        //dispatch CLEAR to reducer
        filterDispatch({type: "CLEAR"})
        //and remove clear btn from slider too
        setClearSliderBtn(false)
    }

    const filterDispatchAndToggleClear = (e) => {
        setClearSliderBtn(true)
        filterDispatch({type: "SLIDER", payload: e.target.value})
    }
    const filterDispatchAndHideClear = () => {
        setClearSliderBtn(false)
        filterDispatch({type: "SLIDER", payload: 5000})
    }

    return (
        <aside class="filter-wrapper">
            <div class="filter-container">
                <div class="filter">
                    <h3>Filter</h3>
                    <span onClick={() => clearFilters()}>Clear</span>
                </div>

                <div class="price">
                    <h3>Price</h3>
                    <div class="slider">
                        {clearSliderBtn && <button onClick={() => filterDispatchAndHideClear()}>clear</button>}
                        <label>
                            <input
                                type="range"
                                min="0"
                                max="5000"
                                onChange={(e) => filterDispatchAndToggleClear(e)}
                            />
                            {sliderValue}
                        </label>
                    </div>
                </div>

                <div class="category">
                    <h3>Category</h3>
                    <label for="">
                        <input class="vertical-align-checkbox" type="checkbox" name="Men" id=""
                        checked={productState.category.includes('boots')}
                        onInput={(e) => filterDispatch({type: "CATEGORY", payload: 'boots'})}

                        />
                        boots
                    </label>
                    <label for="">
                        <input class="vertical-align-checkbox" type="checkbox" name="Men" id=""
                        checked={productState.category.includes('shirt')}
                        onInput={(e) => filterDispatch({type: "CATEGORY", payload: 'shirt'})}
                        />
                        shirt
                    </label>
                    <label for="">
                        <input class="vertical-align-checkbox" type="checkbox" name="Men" id=""
                        checked={productState.category.includes('ball')}
                        onInput={(e) => filterDispatch({type: "CATEGORY", payload: 'ball'})}
                        />
                        ball
                    </label>
                </div>

                <div class="rating">
                    {/* use RATING array later */}
                    <h3>Rating</h3>
                    <label class="block" for="">
                        <input class="vertical-align-radio" type="radio" name="rating"
                        onChange={() => filterDispatch({type: "RATING", payload: '4'})}
                        checked={productState.rating === '4'} //what happens if I send payload: integer 4?
                        />
                        4 stars and above
                    </label>
                    {console.log("productState.rating: ", productState.rating)}
                    <label class="block" for="">
                        <input class="vertical-align-radio" type="radio" name="rating" id="" 
                        onChange={() => filterDispatch({type: "RATING", payload: '3'})}
                        checked={productState.rating === '3'}
                        />
                        3 stars and above
                    </label>
                    <label class="block" for="">
                        <input class="vertical-align-radio" type="radio" name="rating" id=""
                        onChange={() => filterDispatch({type: "RATING", payload: '2'})}
                        checked={productState.rating === '2'}
                        />
                        2 stars and above
                    </label>
                    <label class="block" for="">
                        <input class="vertical-align-radio" type="radio" name="rating" id="" 
                        onChange={() => filterDispatch({type: "RATING", payload: '1'})}
                        checked={productState.rating === '1'}
                        />
                        1 stars and above
                    </label>
                </div>

                <div class="sort">
                    <h3>Sort by</h3>
                    <label class="block" for="">
                        <input
                            class="vertical-align-radio"
                            type="radio" name="sort" id=""
                            onChange={() => filterDispatch({ type: "HIGH_TO_LOW" })}
                            checked={productState.sortBy === "HIGH_TO_LOW"}
                        />
                        Price - High to Low
                    </label>
                    <label class="block" for="">
                        <input
                            class="vertical-align-radio"
                            type="radio" name="sort" id=""
                            onChange={() => filterDispatch({type: "LOW_TO_HIGH"})}
                            checked={productState.sortBy === "LOW_TO_HIGH"}
                        />
                        Price - Low to High
                    </label>
                </div>
            </div>
        </aside>
    )
}