import React from "react";
import { Tag } from "react-bulma-components";
import { getContrast } from "../utils";

const IssueLabel = ({ label }) => {
  const { name, color: labelColor } = label;

  const backgroundColor = `#${labelColor}`;
  const color = getContrast(backgroundColor);

  return <Tag style={{ backgroundColor, color }}>{name}</Tag>;
};

export default IssueLabel;
