import "./Highlights.css";

export default function Highlights(props) {
  return (
    <div className="container">
      <img className="pictureClass" src={props.image} />
      <p className="titleClass">{props.title}</p>
      <p className="descriptionClass">{props.description}</p>
    </div>
  );
}
