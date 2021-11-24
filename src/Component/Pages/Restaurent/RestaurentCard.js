import React from "react";
import { Card, Col } from "react-bootstrap";

const RestaurentCard = (props) => {
  const { img, title, location, id } = props.restaurents;

  return (
    <>
      <Col>
        <Card
          className="p-5 items-card"
          style={{
            minHeight: "400px",
          }}
        >
          <Card.Img style={{ height: "230px" }} variant="top" src={img} />
          <Card.Body className="text-center">
            <Card.Title>{title}</Card.Title>
            <Card.Text>Location: {location}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default RestaurentCard;
