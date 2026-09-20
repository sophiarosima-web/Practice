import "./Cart.css";

function Cart({ cart, removeFromCart }) {
  return (
    <section className="cart">
      <h2>Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        cart.map((item, index) => (
          <div className="cart-item" key={index}>
            <span>
              {item.name} - ₱{item.price}
            </span>

            <button onClick={() => removeFromCart(index)}>
              Remove
            </button>
          </div>
        ))
      )}
    </section>
  );
}

export default Cart;