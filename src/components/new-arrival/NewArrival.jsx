import {Link} from "react-router-dom";
import "./new-arrival.css";

export default function NewArrival() {
    return (
        <section class="new-arrival-section">
            <div class="new-arrival-card">
                <div class="new-arrival-image">
                    <img src="https://picsum.photos/500" alt="New Arrival" />
                </div>
                <div class="new-arrival-content">
                    <span>Recently Launched</span>
                    <h3>Spring 2022 Collection</h3>
                    <p>Our latest collection of on and
                        off-the-field merch.
                    </p>
                    <a href="./files/product-page.html">Check it Out</a>
                </div>
            </div>
            <div>
                <Link to="/mock"><button>Mockman</button> </Link>
            </div>
            <div>
                
            </div>
        </section>
    )
}