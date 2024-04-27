import "./ARefs.css";

export default function ARefs(props) {
  return <a href={props.linkTo}>{props.showTitle}</a>;
}
