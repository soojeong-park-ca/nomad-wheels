import { useOutletContext } from "react-router-dom";

export default function HostVanPricing() {
  const { currentHostVan } = useOutletContext();

  return (
    <div className="hostvan__pricing">
      <p className="paragraph">
        ${currentHostVan.price.toFixed(2)}
        <span>/day</span>
      </p>
    </div>
  );
}
