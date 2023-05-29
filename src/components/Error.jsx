import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();

  return (
    <div
      style={{
        textAlign: "center",
        margin: "0 auto",
        marginTop: "7rem",
      }}
    >
      <h1 className="error-heading">&#9888; Error: {error.message}</h1>
      <pre>
        {error.status} {error.statusText}
      </pre>
    </div>
  );
}
