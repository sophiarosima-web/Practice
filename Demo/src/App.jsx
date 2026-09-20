import { useState } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import OrderSummary from "./components/OrderSummary";
import "./App.css";

function App() {
  const products = [
    { id: 1, name: "Burger", price: 80 },
    { id: 2, name: "Pizza", price: 120 },
    { id: 3, name: "Fries", price: 60 },
    { id: 4, name: "Milk Tea", price: 90 },
    { id: 5, name: "Chicken", price: 100 }
  ];

  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart([...cart, product]);
  }

  function removeFromCart(index) {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  }

  return (
    <>
      <Header />

      <main className="container">
        <ProductList
          products={products}
          addToCart={addToCart}
        />

        <Cart
          cart={cart}
          removeFromCart={removeFromCart}
        />

        <OrderSummary cart={cart} />
      </main>
    </>
  );
}

export default App;