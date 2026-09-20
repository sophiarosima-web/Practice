import "./ProductCard.css";

function ProductCard({ product, addToCart }) {
  return (
    <article className="product-card">
      <h3>{product.name}</h3>
      <p>₱{product.price}</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>
    </article>
  );
}

export default ProductCard;