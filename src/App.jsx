import "./App.css";
import {Routes, Route} from "react-router-dom";
import {LandingPage, ProductPage} from "./pages/"
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<ProductPage />}/>
      </Routes>
    </div>
  );
}

export default App;
