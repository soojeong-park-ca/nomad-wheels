import { Link } from "react-router-dom";

export default function BackToAllVansBtn(props) {
  return (
    <Link
      to={props.to}
      relative={props.relative || null}
      className={`btn--underlined ${props.className || ""}`}
    >
      <i className="fa-solid fa-arrow-left-long left-arrow-icon"></i>
      <span className="btnUnderlined">Back to {props.type} vans</span>
    </Link>
  );
}
