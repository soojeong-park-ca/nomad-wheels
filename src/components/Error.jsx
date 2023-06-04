import { useRouteError } from "react-router-dom";

import CenteredMaxWidthBox from "./CenteredMaxWidthBox";

export default function Error() {
  const error = useRouteError();
  console.log(error);

  return (
    <section id="error" className="error margin-bottom-2xl">
      <div className="app-padding-inline-default margin-bottom-xl">
        <CenteredMaxWidthBox>
          <h1 className="error-heading">&#9888; Error: {error.message}</h1>
          <pre>
            {error.status} {error.statusText}
          </pre>
        </CenteredMaxWidthBox>
      </div>
    </section>
  );
}
