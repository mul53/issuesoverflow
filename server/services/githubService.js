const { Octokit } = require("@octokit/core");

const { LABELS } = require("../constants");

const octokit = new Octokit({
  auth: "",
});

const fetchIssues = () => {
  const requests = LABELS.map(fetchIssuesByLabel);
  return Promise.all(requests);
};

const fetchIssuesByLabel = (label) => {
  const q = "label:" + label;
  return octokit.request("GET /search/issues", { q }).catch(() => "error");
};

module.exports = {
  fetchIssues,
};
