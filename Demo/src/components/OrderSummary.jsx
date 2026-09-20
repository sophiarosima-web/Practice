import "./OrderSummary.css";

function OrderSummary({ cart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <section className="order-summary">
      <h2>Order Summary</h2>

      <p>Total Items: {cart.length}</p>

      <h3>Total: ₱{total}</h3>

      <button disabled={cart.length === 0}>
        Place Order
      </button>
    </section>
  );
}

export default OrderSummary;