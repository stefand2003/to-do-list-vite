import React from "react";
import Container from "../components/container/container.jsx";
import Header from "../components/header/header";
import Create from "../components/create-new-todo/create";

export default function Home() {
  return (
    <Container>
      <Header />
      <Create />
    </Container>
  );
}
