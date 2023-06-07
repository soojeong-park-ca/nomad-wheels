import CenteredMaxWidthBox from "./CenteredMaxWidthBox";

export default function PageNav({ children }) {
  return (
    <nav className="page-navbar app-padding-inline-default">
      <CenteredMaxWidthBox>
        <div className="page-navbar__flexbox">{children}</div>
      </CenteredMaxWidthBox>
    </nav>
  );
}
