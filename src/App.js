import "./App.css";
import Navber from "./components/Navber";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import Product from "./pages/Product";

function App() {
  return (
    <div className="App">
      <Navber />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/product" element={<Product />} />
      </Routes>
    </div>
  );
}

export default App;
