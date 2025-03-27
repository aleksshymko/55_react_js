import { v4 } from "uuid";

import Product from "../../components/Product/Product";
import { products } from "./data";
import "./styles.css";

function Homework07() {
  const productCard = products.map((fruit) => {
    return <Product key={v4()} name={fruit.name} price={fruit.price} />;
  });
  return <div className="list-of-products">{productCard}</div>;
}

export default Homework07;
