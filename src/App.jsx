import Welcome from "./Components/WelcomeBody/Welcome.jsx";
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import "./App.css";
import React, { useState, useEffect } from "react";

export const HighlightsContent = React.createContext();
export const ProductsListContent = React.createContext();

function App() {
  const [welcome, setWelcome] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [productsList, setProductsList] = useState([]);

  function callData() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => {
        setProductsList(json);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    console.log("Montaje");

    if (!welcome) {
      callData();
    } else {
      setIsLoading(true);
      setProductsList([]);
    }

    console.log(productsList);
    console.log(welcome);

    return () => {
      console.log("Desmontaje");
    };
  }, [welcome]);

  const highlightsContent = [
    {
      id: 1,
      image: "src/assets/truck.png",
      title: "Free Shiping",
      description: "Order Over $100",
    },
    {
      id: 2,
      image: "src/assets/credit-card.png",
      title: "Quick Payment",
      description: "100% Secure",
    },
    {
      id: 3,
      image: "src/assets/giftbox.png",
      title: "Big Cashback",
      description: "Over 30% Cashback",
    },
    {
      id: 4,
      image: "src/assets/people-group.png",
      title: "24/7 Support",
      description: "Ready For You",
    },
  ];

  return (
    <>
      <HighlightsContent.Provider value={highlightsContent}>
        <ProductsListContent.Provider value={{ productsList, isLoading }}>
          <Welcome
            onClick={() => {
              setWelcome(!welcome);
            }}
            statusWelcome={welcome}
          />
          <Header />
          <Footer />
        </ProductsListContent.Provider>
      </HighlightsContent.Provider>
    </>
  );
}

export default App;
