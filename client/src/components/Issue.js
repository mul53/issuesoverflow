import React from "react";
import { Card, Heading, Content, Tag, Button } from "react-bulma-components";
import IssueLabel from "./IssueLabel";
import { extractRepoName, timeAgo } from "../utils";

const Issue = ({ issue }) => {
  const { url, html_url, title, labels, created_at } = issue;
  const [org, repoName] = extractRepoName(url);

  return (
    <>
      <Card>
        <Card.Content>
          <Content>
            <Heading weight="semibold" size={5}>
              {title}
            </Heading>
            <Heading
              weight="normal"
              subtitle
              size={6}
              style={{ marginBottom: "0.5rem" }}
            >
              {org}/{repoName}
            </Heading>
            <Tag.Group style={{ marginBottom: "0" }}>
              {labels.map((label) => (
                <IssueLabel label={label} />
              ))}
            </Tag.Group>
            <Heading
              weight="normal"
              subtitle
              size={6}
              style={{ marginTop: "0", marginBottom: "0.5rem" }}
            >
              {timeAgo(created_at)}
            </Heading>
            <Button renderAs="a" href={html_url} target="_blank" className="is-primary">
              View Issue
            </Button>
          </Content>
        </Card.Content>
      </Card>
    </>
  );
};

export default Issue;
