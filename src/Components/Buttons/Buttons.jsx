import "./Buttons.css";

const WelcomeButton = (props) => {
  return <button onClick={props.onClick}>{props.message}</button>;
};

export default WelcomeButton;
