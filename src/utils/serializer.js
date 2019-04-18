export const serialize = (tab) => {
  const obj = {};
  tab.forEach((elem) => {
    obj[elem.id] = elem;
  });
  return obj;
};

export const addToObj = (obj, elem) => {
  const copy = { ...obj };
  copy[elem.id] = elem;
  return copy;
};
