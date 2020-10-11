import React, { useEffect, useState } from "react";
import { Columns } from "react-bulma-components";
import Paginate from "react-paginate";

import Issue from "./Issue";
import { fetchIssues } from "../services/issuesService";

const IssuesList = () => {
  const [issues, setIssues] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    fetchIssues()
      .then((data) => data.json())
      .then((data) => {
        setPageCount(data.totalPages);
        setIssues(data.data);
      });
  }, [pageCount]);

  const handlePageClick = ({ selected }) => {
    fetchIssues(selected + 1)
      .then((data) => data.json())
      .then((data) => {
        setPageCount(data.totalPages);
        setIssues(data.data);
      });
  };

  return (
    <ul>
      <Columns>
        {issues.map((issue) => (
          <Columns.Column size={4} mobile={{ size: 12 }}>
            <Issue issue={issue} />
          </Columns.Column>
        ))}
      </Columns>
      <Paginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        breakClassName={"break-me"}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={handlePageClick}
        containerClassName={"pagination"}
        subContainerClassName={"pages pagination"}
        activeClassName={"active"}
      />
    </ul>
  );
};

export default IssuesList;
