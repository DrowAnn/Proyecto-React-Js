import Welcome from "./Components/WelcomeBody/Welcome.jsx";
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import "./App.css";
import React, { useState } from "react";

export const HighlightsContent = React.createContext();

function App() {
  const [welcome, setWelcome] = useState(true);

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
        <Welcome
          statusWelcome={welcome}
          onClick={() => {
            setWelcome(!welcome);
          }}
        />
        <Header />
        <Footer />
      </HighlightsContent.Provider>
    </>
  );
}

export default App;
