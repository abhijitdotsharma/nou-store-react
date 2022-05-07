import { useReducer } from "react";
import { Filter, NavigationTop, Products } from "../../components";
import { useProduct } from "../../context/product-context";
import { filterReducer } from "../../reducer/filterReducer";
import { getSliderProducts,getCategoryProducts, getRatedProducts, getFinalFilteredProducts } from "../../reducer/utilities";

export default function ProductPage(){
    const {products} = useProduct();

    const initialFilterState = {
        sortBy: "",
        category: [],
        rating: null,
        slider: 5000,
    }
    const [filterState, filterDispatch] = useReducer(filterReducer, initialFilterState)
    
    const sliderProducts = getSliderProducts(products, filterState.slider)
    const ratedProducts = getRatedProducts(sliderProducts, filterState.rating)
    const categoryProducts = getCategoryProducts(ratedProducts, filterState.category)
    const finalFilteredProduct = getFinalFilteredProducts(categoryProducts, filterState.sortBy)
    
    return(
        <div>
            <NavigationTop />
            <Filter filterDispatch={filterDispatch} sliderValue={filterState.slider} productState={filterState}/>
            <Products products={finalFilteredProduct}/>
        </div>
    )
}