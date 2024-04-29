import "./Welcome.css";
import WelcomeButton from "../Buttons/Buttons.jsx";
import ListsProducts from "../Lists/Lists.jsx";

const Welcome = (props) => {
  let [welcomeMessage, welcomeButton, backButton, listProducts] = "";

  if (props.statusWelcome) {
    welcomeMessage = <h1>Welcome!</h1>;
    welcomeButton = (
      <WelcomeButton message="See Products..." onClick={props.onClick} />
    );
  } else {
    backButton = (
      <WelcomeButton message="Back To Welcome" onClick={props.onClick} />
    );
    listProducts = <ListsProducts />;
  }

  return (
    <>
      {welcomeMessage}
      {welcomeButton}
      <div
        style={{ width: "100px", height: "20px", backgroundColor: "black" }}
      ></div>
      {/* {listProducts} */}
      {backButton}
      <div className="shadowPictureDecoration1" />
      <div className="pictureDecoration1" />
      <div className="shadowPictureDecoration2" />
      <div className="pictureDecoration2" />
    </>
  );
};

export default Welcome;
