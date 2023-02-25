import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Row } from "react-bootstrap";
import ItemsCard from "./ItemsCard";

const Items = () => {
  const [itemData, setItemData] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://food-delivery-server-production-1051.up.railway.app/items")
      .then((res) => res.json())
      .then((data) => setItemData(data));
  }, []);

  const handleAddToCart = (data) => {
    console.log("from handle add to cart", data);
    const newCart = [...cart, data];
    setCart(newCart);
    fetch("https://food-delivery-server-production-1051.up.railway.app/userData", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data)
    })
      .then((res) => res.json())
      .then((data) => {
        if (data._id) {
          alert("Successfully added the user");
          data.target.reset();
        }
      });
  };

  return (
    <Container>
      <h2 className="text-center text-warning fw-bold mt-4 mb-5">Our Items</h2>
      <Row xs={1} md={2} lg={3} className="g-4">
        {itemData.map((data) => {
          return (
            <ItemsCard
              key={data.id}
              data={data}
              handleAddToCart={handleAddToCart}
            ></ItemsCard>
          );
        })}
      </Row>
    </Container>
  );
};

export default Items;
