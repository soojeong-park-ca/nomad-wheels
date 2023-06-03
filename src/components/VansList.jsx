import { Link } from "react-router-dom";

export default function VansList({ vansData, searchParams, typeFilter }) {
  // console.log("VansList-vansData: ", vansData);

  const displayedVansData = typeFilter
    ? vansData.filter(van => van.type === typeFilter)
    : vansData;

  const vanElements = displayedVansData.map(van => {
    const vanTypeCapitalized = `${van.type
      .slice(0, 1)
      .toUpperCase()}${van.type.slice(1)}`;

    return (
      <div key={van.id} className="van-tile">
        <Link
          to={van.id}
          state={{ search: `?${searchParams.toString()}`, type: typeFilter }}
          className="van-tile__link"
        >
          <div className="van-tile__grid">
            <img className="van-tile__img" src={van.imageUrl} />
            <div className="van-tile__info">
              <h2 className="vans-heading-secondary">{van.name}</h2>
              <p className="paragraph">
                ${van.price}
                <span>/day</span>
              </p>
            </div>
            <div className={`btn--van-type btn--${van.type}-fixed`}>
              <div>{vanTypeCapitalized}</div>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return <div className="vans-list">{vanElements}</div>;
}
