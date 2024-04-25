import "./Welcome.css";
import WelcomeButton from "../Buttons/Buttons.jsx";

const Welcome = () => {
  return (
    <>
      <h1>Bienvenido!</h1>
      <WelcomeButton />
      <div className="shadowPictureDecoration1" />
      <div className="pictureDecoration1" />
      <div className="shadowPictureDecoration2" />
      <div className="pictureDecoration2" />
    </>
  );
};

export default Welcome;
