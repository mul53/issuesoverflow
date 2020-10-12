import React from "react";
import { Hero as BulmaHero, Container, Heading } from "react-bulma-components";

const Hero = () => (
  <>
    <BulmaHero color="primary" size="medium">
      <BulmaHero.Body>
        <Container>
          <Heading>Welcome to IssueOveflow</Heading>
          <Heading subtitle size={6}>
            Where software engineers find new exciting issues to contribute to
          </Heading>
        </Container>
      </BulmaHero.Body>
    </BulmaHero>
  </>
);

export default Hero;
