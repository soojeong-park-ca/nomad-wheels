export default function Filter({ vansData, typeFilter, setSearchParams }) {
  const vanTypes = vansData.map(van => van.type);
  const vanTypesUnique = [...new Set(vanTypes)];

  // Merging search params with setSearchParams Fn
  function handleFilterChange(key, value) {
    setSearchParams(prevParams => {
      if (value === null) {
        prevParams.delete(key);
      } else {
        prevParams.set(key, value);
      }

      return prevParams;
    });
  }

  const vanTypeBtns = vanTypesUnique.map(type => {
    const vanTypeCapitalized = `${type.slice(0, 1).toUpperCase()}${type.slice(
      1
    )}`;

    return (
      <button
        key={type}
        className={
          typeFilter === type
            ? `btn btn--filter btn--${type} selected`
            : `btn btn--filter btn--${type}`
        }
        onClick={() => handleFilterChange("type", type)}
      >
        {vanTypeCapitalized}
      </button>
    );
  });

  return (
    <div className="filter__box margin-bottom-l">
      <div className="filter__types">{vanTypeBtns}</div>
      {typeFilter === null ? null : (
        <button
          className="btn--underlined"
          onClick={() => handleFilterChange("type", null)}
        >
          Clear filters
        </button>
      )}
    </div>
  );
}
