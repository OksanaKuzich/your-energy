import React from "react";
import { Hero } from "../../components/Hero/Hero";
import { Container } from "../../components/Container/Container.styled";

const HomePage: React.FC = () => {
  return (
    <main>
      <Container>
        <Hero />
      </Container>
    </main>
  );
};

export default HomePage;
