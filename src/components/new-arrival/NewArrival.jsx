import { Link } from "react-router-dom";
import "./new-arrival.css";

export default function NewArrival() {
    return (
        <section className="new-arrival-section">
            <div className="new-arrival-card">
                <div className="new-arrival-image">
                    <img src="https://picsum.photos/500" alt="New Arrival" />
                </div>
                <div className="new-arrival-content">
                    <span>Recently Launched</span>
                    <h3>Spring 2022 Collection</h3>
                    <p>Our latest collection of on and
                        off-the-field merch.
                    </p>
                    <Link
                        to="/products"
                        className="new-arrival-btn"
                    >Check it out</Link>

                </div>
            </div>
            <div>

            </div>
        </section>
    )
}