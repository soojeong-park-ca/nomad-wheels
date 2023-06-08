import { useOutletContext } from "react-router-dom";

export default function HostVanInfo() {
  const { currentHostVan } = useOutletContext();
  // console.log(currentHostVan);

  return (
    <div className="hostvan__info">
      <p className="paragraph">
        <span>Name:</span> {currentHostVan.name}
      </p>
      <p className="paragraph">
        <span>Category:</span> {currentHostVan.type.slice(0, 1).toUpperCase()}
        {currentHostVan.type.slice(1)}
      </p>
      <p className="paragraph">
        <span>Description:</span> {currentHostVan.description}
      </p>
      <p className="paragraph">
        <span>Visibility:</span> Public
      </p>
    </div>
  );
}
