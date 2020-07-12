import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarHeader from "./components/navbar";
import BookForm from "./components/bookform";
import { Container } from "react-bootstrap";
import { BooksList } from "./components/booksList";

function App() {
  return (
    <>
      <NavbarHeader />
      <Container>
        <BookForm />
        <hr />
        <h4>Your read later books</h4>
        <BooksList />
      </Container>
    </>
  );
}

export default App;
