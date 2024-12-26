export const FilterData = (data, requiredKeys) => {
  return data.filter((object) =>
    requiredKeys.every(
      (key) =>
        object[key] !== null && object[key] !== undefined && object[key] !== ""
    )
  );
};
