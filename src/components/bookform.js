import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { databaseRef } from "../firebase";

const BookForm = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
  });

  const handleTitle = (e) => setBook({ ...book, title: e.target.value });
  const handleAuthor = (e) => setBook({ ...book, author: e.target.value });
  //set
  const addBook = (e) => {
    e.preventDefault();
    databaseRef.add({
      title: book.title,
      author: book.author,
    });
    setBook({ author: "", title: "" });
  };

  return (
    <div className="m-3">
      <Form onSubmit={addBook}>
        <Row>
          <Col>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Book Name</Form.Label>
              <Form.Control
                type="text"
                value={book.title}
                placeholder="Book Name"
                onChange={handleTitle}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                placeholder="Auth"
                value={book.author}
                onChange={handleAuthor}
              />
            </Form.Group>
          </Col>
        </Row>
        <Button variant="dark" type="submit">
          Add book
        </Button>
      </Form>
    </div>
  );
};

export default BookForm;
