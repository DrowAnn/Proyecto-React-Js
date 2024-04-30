import "./Lists.css";
import { ProductsListContent } from "../../App";
import { useContext, useState } from "react";

export default function ProductsList() {
  const dataProducts = useContext(ProductsListContent);
  const [showPicture, setShowPicture] = useState(false);

  if (dataProducts.isLoading) {
    return <h1>Is Loading...</h1>;
  }

  return (
    <div className="listProducts">
      <h1
        style={{
          margin: "10px",
          marginBottom: "20px",
          fontSize: "5vh",
          backgroundColor: "rgba(204,2,2,0.6)",
        }}
      >
        Lista de Productos
      </h1>
      <div className="productsView">
        <ol className="products">
          {dataProducts.productsList.map((product) => {
            return (
              <li key={product.id}>
                <a
                  onClick={() => {
                    setShowPicture(product.id);
                  }}
                >
                  {product.title}
                </a>
              </li>
            );
          })}
        </ol>
        {showPicture ? (
          <div className="pictureSpace">
            <img
              className="imageClass"
              src={dataProducts.productsList[showPicture - 1].image}
            />
            <p className="textClass">
              {dataProducts.productsList[showPicture - 1].description}
            </p>
          </div>
        ) : (
          <div className="pictureSpace">
            <h1
              style={{
                gridRow: "span 2/3",
                fontSize: "5vh",
                padding: "5%",
                alignSelf: "center",
              }}
            >
              Select a product to see it here!
            </h1>
          </div>
        )}
      </div>
    </div>
  );
}
