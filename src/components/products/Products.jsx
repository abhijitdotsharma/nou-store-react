import "./products.css";
import axios from 'axios';
import {useState, useEffect} from 'react';
import { useProduct } from "../../context/product-context";
import { ProductCard} from "./ProductCard";

export default function Products() {

    const {products} = useProduct();    

    return (
        <section class="products-wrapper">
            {/* loads products on component load */}
            {products && products.map(product => 
                <ProductCard product={product}/>
            )}
            
        </section>
    )
}