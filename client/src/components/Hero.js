import React from "react";
import { Hero as BulmaHero, Container, Heading } from "react-bulma-components";

const Hero = () => (
  <>
    <BulmaHero color="primary" size="medium">
      <BulmaHero.Body>
        <Container>
          <Heading>Hero Title Primary</Heading>
        </Container>
      </BulmaHero.Body>
    </BulmaHero>
  </>
);

export default Hero;
