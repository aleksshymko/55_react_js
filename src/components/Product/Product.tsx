import { ProductProps } from "./types";
import "./styles.css";

function Product({ name, price }: ProductProps) {
  return (
    <div className="product-card">
      <p>
        Fruit: {name} <br />
        Price: {price}
      </p>
    </div>
  );
}

export default Product;
