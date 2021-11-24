import React, { useState } from 'react';
import { Card, Col } from 'react-bootstrap';

const UserData = (props) => {
    const {img, title, price, id} = props.data;
    const [order, setOrder] = useState([]);
    

    const handleRemove = (id) =>{
      console.log('removed id',id)
      const  proceed = window.confirm('Are you sure ,you want to delete?')
      if(proceed){
        
          const url = `https://ghoulish-village-13879.herokuapp.com/userData/${id}`
      fetch(url, {
          method:'DELETE'
      })
      .then(res => res.json())
      .then( data => {
        
          if(data) {
            
              console.log(data)
              window.location.reload(true);
              alert('delete Successfully')
              const remainUsers = order.filter(user => user._id !== id);
              setOrder(remainUsers); 

          }
      })
      }
  }

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
            <h4>${price}</h4>
            <button onClick={()=> handleRemove(id)} >Remove</button>
          </Card.Body>
        </Card>
      </Col>
        </>
    );
};

export default UserData;