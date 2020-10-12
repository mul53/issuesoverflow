import React, { useEffect, useState } from "react";
import { Columns, Form } from "react-bulma-components";
import Paginate from "react-paginate";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/ClipLoader";
import FilterForm from './Form';

import Issue from "./Issue";
import { fetchIssues } from "../services/issuesService";

const IssuesList = () => {
  const [issues, setIssues] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [loading, setLoading] = useState(false)
  const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  z-index:99999;
`;
 
  useEffect(() => {
    setLoading(true)
    fetchIssues()
      .then((data) => data.json())
      .then((data) => {
        setPageCount(data.totalPages);
        setIssues(data.data);
        setLoading(false);
      });
  }, [pageCount]);

  const handlePageClick = ({ selected }) => {
    setLoading(true);
    fetchIssues(selected + 1)
      .then((data) => data.json())
      .then((data) => {
        setPageCount(data.totalPages);
        setIssues(data.data);
        setLoading(false);
      });
  };

  return (
    <ul>
      <FilterForm>

      </FilterForm>
      <Columns>
        {issues.map((issue) => (
          <Columns.Column size={4} mobile={{ size: 12 }}>
            <Issue  issue={issue} />
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
      <div className="sweet-loading is-center">
        <ClipLoader
          css={override}
          size={150}
          color={"#123abc"}
          loading={loading}
        />
      </div>
    </ul>
  );
};

export default IssuesList;
