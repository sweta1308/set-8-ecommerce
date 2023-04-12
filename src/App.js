import "./App.css";
import { Routes, Route } from "react-router-dom";
import { ProductData } from "./pages/ProductData";
import { Cart } from "./pages/Cart";
import { WishList } from "./pages/Wishlist";
import { About } from "./pages/About";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<ProductData />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/about/:id" element={<About />} />
      </Routes>
    </div>
  );
}
