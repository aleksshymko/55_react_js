import { ProductProps } from "./types";
import "./styles.css";
import { useEffect } from "react";

function Product({ productName, productPrice }: ProductProps) {
  useEffect(()=>{
    return ()=>{
      console.log('Component will unmount');
    }
  }, []);
  
  return (
    <div className="product-container">
      <div> Product: {productName} </div>
      <div> Price: {productPrice}</div>
    </div>
  );
}

export default Product;
