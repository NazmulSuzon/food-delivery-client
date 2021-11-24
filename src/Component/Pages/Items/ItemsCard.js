import React from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./itemsCard.css";

const ItemsCard = (props) => {
  const { img, title, details, price, id } = props.data;
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
            <Card.Text>{details}</Card.Text>
            <h4>${price}</h4>
            <Link
              className="d-inline-block mx-auto w-100 border mt-3"
              to={`/placeorder/${id}`}
            >
              <Button className="w-100 bg-warning border-0">Order Now</Button>
            </Link>
            <Button onClick={() => {
                props.handleAddToCart(props.data);
              }} className='w-100 bg-warning border-0 my-2'>Add to MyOrder</Button>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default ItemsCard;
