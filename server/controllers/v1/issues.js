const { map, flatten } = require("lodash");
const paginate = require("paginate-array");

const githubService = require("../../services/githubService");
const { sortDateDesc, filterFalsy } = require("../../utils");

const index = async (req, res) => {
  try {
    const { pageParam } = req.params;
    const page = pageParam ? pageParam : 1;

    const response = await githubService.fetchIssues();
    const data = filterFalsy(flatten(map(response, "data.items")));
    const sortedData = data.sort(sortDateDesc);
    const paginatedData = paginate(sortedData, page, 15);
    res.send(paginatedData);
  } catch (e) {
    res.send({ error: JSON.stringify(e) });
  }
};

module.exports = {
  index,
};
