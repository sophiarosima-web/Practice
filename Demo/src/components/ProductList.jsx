import ProductCard from "./ProductCard";
import "./ProductList.css";

function ProductList({ products, addToCart }) {
  return (
    <section className="product-list">
      <h2>Menu</h2>

      <div className="products">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </section>
  );
}

export default ProductList;