export const fetchIssues = (page) => {
  let params = "";

  if (page) {
    params += `?page=${page}`;
  }

  return fetch("http://localhost:3000/api/v1/issues" + params);
};
