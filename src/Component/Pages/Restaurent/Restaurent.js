import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import RestaurentCard from './RestaurentCard'

const Restaurent = () => {
    const [restaurent, setRestaurent] = useState([]);

    useEffect(() => {
        fetch('https://ghoulish-village-13879.herokuapp.com/restaurent')
        .then(res => res.json())
        .then(data => {
            setRestaurent(data)
            console.log("from restaurent",data)
        })
    }, [])
    return (
        <Container className="mt-5">
            <h1 className="text-center mb-5 text-warning fw-bold">Famous Bangladeshi Restaurent</h1>
            <Row xs={1} md={2} lg={3} className="g-4">
                {
                    restaurent.map(data => {
                        return(<RestaurentCard
                        key={data.id}
                        restaurents={data}
                        ></RestaurentCard>)
                    })
                }
            </Row>
        </Container>
    );
};

export default Restaurent;