import "./Buttons.css";

const WelcomeButton = (props) => {
  return (
    <button onClick={props.onClick} style={props.style}>
      {props.message}
    </button>
  );
};

export default WelcomeButton;
