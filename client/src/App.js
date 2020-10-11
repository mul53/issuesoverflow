import React from "react";
import { Container } from "react-bulma-components";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import IssuesList from "./components/IssuesList";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Container>
        <IssuesList />
      </Container>
    </div>
  );
};

export default App;
