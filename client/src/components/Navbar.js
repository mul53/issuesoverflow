import React from "react";
import { Navbar as Nav, Heading } from "react-bulma-components";

const Navbar = () => {
  return (
    <>
      <Nav color="primary">
        <Nav.Brand>
          <Nav.Item renderAs="a" href="#">
            <Heading style={{ color: "white" }} size={4}>
              IssueOverflow
            </Heading>
          </Nav.Item>
        </Nav.Brand>
      </Nav>
    </>
  );
};

export default Navbar;
