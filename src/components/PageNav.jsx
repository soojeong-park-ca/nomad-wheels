import CenteredMaxWidthBox from "./CenteredMaxWidthBox";

export default function PageNav({ children }) {
  return (
    <nav className="navbar app-padding-inline-default">
      <CenteredMaxWidthBox>
        <div className="navbar__flexbox">{children}</div>
      </CenteredMaxWidthBox>
    </nav>
  );
}
