import "./Welcome.css";
import WelcomeButton from "../Buttons/Buttons.jsx";
import ProductsList from "../Lists/Lists.jsx";

const Welcome = (props) => {
  let [welcomeMessage, welcomeButton, backButton, productsList] = "";

  if (props.statusWelcome) {
    welcomeMessage = <h1 style={{ fontSize: "8vh" }}>Welcome!</h1>;
    welcomeButton = (
      <WelcomeButton message="See Products..." onClick={props.onClick} />
    );
  } else {
    backButton = (
      <WelcomeButton
        message="Back To Home"
        onClick={props.onClick}
        style={{ position: "absolute", top: "14vh", left: "5%" }}
      />
    );
    productsList = <ProductsList />;
  }

  return (
    <>
      <div className="shadowPictureDecoration1" />
      <div className="pictureDecoration1" />
      <div className="shadowPictureDecoration2" />
      <div className="pictureDecoration2" />
      {welcomeMessage}
      {welcomeButton}
      {backButton}
      {productsList}
    </>
  );
};

export default Welcome;
