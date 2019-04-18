export default (tab) => {
  const obj = {};
  tab.forEach((elem) => {
    obj[elem.id] = elem;
  });
  return obj;
};
