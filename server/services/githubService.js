const { Octokit } = require("@octokit/core");

const { buildQuery } = require("../utils");
const { LABELS } = require("../constants");

const octokit = new Octokit();

const fetchIssues = () => {
  const requests = LABELS.map(fetchIssuesByLabel);
  return Promise.all(requests);
};

const fetchIssuesByLabel = (label) => {
  const q = "label:" + label;
  return octokit.request("GET /search/issues", { q });
};

module.exports = {
  fetchIssues,
};
