import { useReducer } from "react";
import { Filter, NavigationTop, Products } from "../../components";
import { useProduct } from "../../context/product-context";


export default function ProductPage(){
    const {products} = useProduct(); //products = [{}, {}, ]

    const initialState = {
        sortBy: "",
        category: [],
        rating: null,
        slider: 5000,
    }

    function productReducer(state, {type, payload}){
        switch (type) {
            case "CLEAR":
                return {
                    ...state,
                    sortBy: "",
                    category: [],
                    rating: null,
                    slider: 5000,
                }
            case "HIGH_TO_LOW":
                return {...state, sortBy: "HIGH_TO_LOW"};
            case "LOW_TO_HIGH":
                return {...state, sortBy: "LOW_TO_HIGH"};

            case "CATEGORY":
                //type: CATEGORY, payload: 'boots' or 'ball'...
                return {
                    ...state,
                    category: [
                        //if categoryArray includes payload, return categoryArray without payloadCategory
                        //else add the payloadCategory to the caregoryArray
                        ...state.category.includes(payload)? [...state.category.filter(item => item !== payload)] 
                        : [...state.category, payload]
                    ]
                }
            case "RATING":
                console.log("Rating is: ", payload)
                //payload: rating - 4, or3, or2
                return {
                    ...state,
                    rating: payload,
                }
                
            case "SLIDER":
                //payload: e.target.value from FilterComponent
                return {
                    ...state,
                    slider: payload,
                }
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(productReducer, initialState)

    const getFinalFilteredProducts = (products, sortBy) => {
        if(sortBy === "HIGH_TO_LOW") return [...products].sort((productA, productB) => productB.price - productA.price)
        if(sortBy === "LOW_TO_HIGH") return [...products].sort((productA, productB) => productA.price - productB.price)
        return [...products];
    }
    const getCategoryProducts = (products, category) => {
        if(category.length === 0) return products;//no category selected

        //filter the productArray based on the categoryArray
        const filteredCategoryList = products.filter(product => category.includes(product.categoryName))
        return filteredCategoryList;
    }

    const getRatedProducts = (products, rating) => {
        //rating 4
        //return product.rating > rating
        if(rating === null) return [...products];

        const rateFilteredProducts = products.filter(product => product.rating > rating)
        return rateFilteredProducts;
    }

    const getSliderProducts = (products, sliderValue) => {
        if(sliderValue === 5000 || sliderValue === "CLEAR SLIDER") return [...products]
        //return products upto sliderValue 0-sliderValue
        const sliderFilteredProducts = products.filter(product => Number(product.price) < Number(sliderValue))
        return sliderFilteredProducts;
    }

    const sliderProducts = getSliderProducts(products, state.slider)
    const ratedProducts = getRatedProducts(sliderProducts, state.rating)
    const categoryProducts = getCategoryProducts(ratedProducts, state.category)
    const finalFilteredProduct = getFinalFilteredProducts(categoryProducts, state.sortBy)
    
    return(
        <div>
            <NavigationTop />
            <Filter filterDispatch={dispatch} sliderValue={state.slider} productState={state}/>
            <Products products={finalFilteredProduct}/>
        </div>
    )
}