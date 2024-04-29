import "./Lists.css";
import { ProductsListContent } from "../../App";
import { useContext } from "react";

export default function ProductsList() {
  const productsList = useContext(ProductsListContent);

  return (
    <div className="listProducts">
      {console.log(productsList[0])}
      <h1 style={{ margin: "10px", fontSize: "5vh" }}>Lista de Productos</h1>
      <img src={productsList[5].image} style={{ width: "80px" }} />
      <ol className="products">
        {productsList.map((product) => {
          return <li key={product.id}>{product.title}</li>;
        })}
      </ol>
    </div>
  );
}
