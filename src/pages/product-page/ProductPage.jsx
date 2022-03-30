import {Link} from "react-router-dom";
export default function ProductPage(){
    return(
        <div>
            <h1>I am product page</h1>
            <Link to="/">
                <button>Back to Home</button>
            </Link>
        </div>
    )
}