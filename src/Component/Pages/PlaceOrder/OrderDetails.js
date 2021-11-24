import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Card, Button, Container, Form, Row, Col } from "react-bootstrap";
import { useParams } from "react-router";
import useAuth from "../../../hooks/UseAuth";
import "./OrderDetails.css";

const OrderDetails = () => {
    const {user} = useAuth();
  const [itemsDetails, setItemsDetails] = useState([]);

  const { itemsId } = useParams();

  useEffect(() => {
    fetch('https://ghoulish-village-13879.herokuapp.com/items')
        .then(res => res.json())
        .then(data => setItemsDetails(data));
  }, [itemsId]);

  const singleItemsData = itemsDetails.filter(
    (data) => data.id === parseInt(itemsId)
  );

  console.log("from single items data", singleItemsData);
  return (
    <Container className="my-5 d-flex justify-content-between">
      <div>
        <Card className="p-3" style={{ width: "20rem" }}>
          <Card.Img variant="top" src={singleItemsData[0]?.img} />
          <Card.Body>
            <Card.Title>{singleItemsData[0]?.title}</Card.Title>
            <Card.Text>{singleItemsData[0]?.details}</Card.Text>
          </Card.Body>
        </Card>
      </div>

      {/* PlaceOrder Form */}

      <div>
        <Form className="form p-5 rounded">
          <Row className="mb-3 ">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control className="px-5 user-field" type="text" placeholder={user?.displayName} disabled />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control className="px-5 user-field" type="email" placeholder={user?.email} disabled/>
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control className="px-5" type="email" placeholder="Enter Your phone number" />
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder="1234 Main St" />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control placeholder="Dhaka" />
            </Form.Group>
          </Row>

          <Button variant="warning" className="mt-2" type="submit">
            Confirm Order
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default OrderDetails;
