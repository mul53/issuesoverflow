import { Octokit } from '@octokit/core';
const octokit = new Octokit({
  auth: "",
});
export const fetchIssues = (page) => {
  let params = "";

  if (page) {
    params += `?page=${page}`;
  }

  return fetch("http://localhost:3000/api/v1/issues" + params);
};

export const fetchORGRepos = (org) => {

  return octokit.request(` GET /orgs/${org}/repos`);
};
