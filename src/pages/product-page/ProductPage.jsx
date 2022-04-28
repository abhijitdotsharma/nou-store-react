import {Link} from "react-router-dom";
import { Filter, NavigationTop, Products } from "../../components";
export default function ProductPage(){
    return(
        <div>
            <NavigationTop />
            <Filter />
            <Products />
        </div>
    )
}