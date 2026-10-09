import { useState } from "react";
import Header from "./Header";
import ProductCard from "./ProductCard";
import Footer from "./Footer";
import "./App.css";

function App() {
  const [quantity, setQuantity] = useState(0);
  const [selectedColor, setSelectedColor] = useState("Black");
  const [deliveryCity, setDeliveryCity] = useState("Coimbatore");
  const [showProduct, setShowProduct] = useState(true);

  const productName = "Wireless Mouse";
  const price = 499;

  return (
    <div className="app">
      <Header />

      {showProduct && (
        <ProductCard
          productName={productName}
          price={price}
          quantity={quantity}
          selectedColor={selectedColor}
          deliveryCity={deliveryCity}
        />
      )}

      <div className="controls">
        <div className="form-group">
          <label>Product colour</label>
          <select
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
          >
            <option value="Black">Black</option>
            <option value="Blue">Blue</option>
            <option value="White">White</option>
          </select>
        </div>

        <div className="form-group">
          <label>Delivery city</label>
          <input
            type="text"
            value={deliveryCity}
            onChange={(e) => setDeliveryCity(e.target.value)}
          />
        </div>
      </div>

      <div className="buttons">
        <button className="add" onClick={() => setQuantity(q => q + 1)}>
          Add to Cart
        </button>

        <button
          onClick={() => setQuantity(q => q - 1)}
          disabled={quantity === 0}
        >
          Remove One
        </button>

        <button onClick={() => setQuantity(0)}>
          Reset Cart
        </button>

        <button onClick={() => setShowProduct(s => !s)}>
          {showProduct ? "Hide Product" : "Show Product"}
        </button>
      </div>

      <Footer />
    </div>
  );
}

export default App;