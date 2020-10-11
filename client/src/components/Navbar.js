import React from "react";
import { Navbar as Nav } from "react-bulma-components";

const Navbar = () => {
  return (
    <>
      <Nav color="primary">
        <Nav.Brand>
          <Nav.Item renderAs="a" href="#">
            IssuesOverflow
          </Nav.Item>
        </Nav.Brand>
      </Nav>
    </>
  );
};

export default Navbar;
