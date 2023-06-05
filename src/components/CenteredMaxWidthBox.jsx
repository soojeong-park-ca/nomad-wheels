export default function CenteredMaxWidthBox(props) {
  return (
    <div className={`max-width center-hori ${props.className || ""}`}>
      {props.children}
    </div>
  );
}
