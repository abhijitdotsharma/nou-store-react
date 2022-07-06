import "./App.css";
import {Routes, Route} from "react-router-dom";
import {CartPage, LandingPage, ProductPage, WishlistPage} from "./pages/";
import Mockman from "mockman-js";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductPage />}/>
        <Route path="/cart" element={<CartPage/>} />
        <Route path="/wishlist" element={<WishlistPage/>} />
        <Route path="/mock" element={<Mockman/>} />
      </Routes>
    </div>
  );
}

export default App;
