import React from "react";
import { Button, Container, FloatingLabel, Form } from "react-bootstrap";

const Contact = () => {
  return (
    <Container >
      <>
      <h1 className="mt-5 mb-4 text-warning">Contact Us</h1>
        <FloatingLabel
          controlId="floatingInput"
          label="Email address"
          className="mb-3"
        >
          <Form.Control type="email" placeholder="name@example.com" />
        </FloatingLabel>
        <FloatingLabel controlId="floatingPassword" label="PhoneNumber">
          <Form.Control type="input" placeholder="Password" />
        </FloatingLabel>
        <FloatingLabel className="mt-3" controlId="floatingTextarea2" label="Leave a comment here">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
          />
        </FloatingLabel>
        <Button className="mt-3 bg-warning border-0">Submit</Button>
      </>
    </Container>
  );
};

export default Contact;
