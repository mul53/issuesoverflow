const { map, flatten } = require("lodash");
const paginate = require("paginate-array");

const githubService = require("../../services/githubService");

module.exports = {
  async index(req, res) {
    try {
      const response = await githubService.fetchIssues();
      const data = flatten(map(response, "data.items"));
      const paginatedData = paginate(data, 1, 15);
      res.send(paginatedData);
    } catch (e) {
      res.send({ error: JSON.stringify(e) });
    }
  },
};
