import React from "react";
import Container from "../components/container/container";
import Header from "../components/header/header";
import Create from "../components/create-new-todo/create";
import ListToDo from "../components/list_todo/list_todo";
import Footer from "../components/footer/footer";

export default function Home() {
  return (
    <Container>
      <Header />
      <Create />
      <ListToDo />
      <Footer />
    </Container>
  );
}
