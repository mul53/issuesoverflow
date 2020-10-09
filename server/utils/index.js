const buildQuery = (options) => {
  let query = "";

  if (options.labels) {
    query += options.labels.map(label => `label:${label}`).join('+')
  }

  return query;
};

module.exports = {
  buildQuery,
};
