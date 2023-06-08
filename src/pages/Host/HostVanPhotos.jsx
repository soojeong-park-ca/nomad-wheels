import { useOutletContext } from "react-router-dom";

export default function HostVanPhotos() {
  const { currentHostVan } = useOutletContext();

  return (
    <div className="hostvan__photos">
      <img
        className="hostvan__photos-img"
        src={currentHostVan.imageUrl}
        alt={`${currentHostVan.name} Van}`}
      />
    </div>
  );
}
