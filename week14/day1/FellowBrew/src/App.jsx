import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/partials/Nav";
import HomePage from "./components/Home";
import Shop from "./components/Shop";
import AboutUs from "./components/About";
import Product from "./components/Product";
import Footer from "./components/partials/Footer";
import ShoppingCart from "./components/Cart";
import E404 from "./components/Error";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/product" element={<Product />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<E404 />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
