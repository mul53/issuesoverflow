const sortDateDesc = (a, b) => {
  const dateA = new Date(a.created_at);
  const dateB = new Date(b.created_at);
  return dateB - dateA;
};

const filterFalsy = (array) => array.filter(Boolean);

module.exports = {
  sortDateDesc,
  filterFalsy,
};
