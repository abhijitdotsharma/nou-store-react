import axios from "axios";
import { useEffect, useState, useContext, createContext } from "react";

const ProductContext = createContext();

const ProductProvider = ({children}) => {
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
        (async () => {
            const res = await axios.get("/api/products/");
            const resProducts = res.data.products;

            setProducts(prev => [...prev, ...resProducts]);
        })();
    }, [])


    return(
        <ProductContext.Provider value={{products}}>
            {children}
        </ProductContext.Provider>
    )
}

const useProduct = () => useContext(ProductContext);

export {ProductProvider, useProduct};
