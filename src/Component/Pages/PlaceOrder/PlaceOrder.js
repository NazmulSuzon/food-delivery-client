import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import OrderDetails from './OrderDetails';

const PlaceOrder = () => {
    const [detailsData, setDetailsData] = useState([]);

    useEffect(() => {
        fetch('https://food-delivery-server-production-1051.up.railway.app/items')
        .then(res => res.json())
        .then(data => setDetailsData(data));
    }, [])

    return (
        <div>
            <Row>
                {
                    detailsData.map(data => {
                        return(<OrderDetails
                        key={data.id}
                        details={data}
                        >
                        </OrderDetails>)
                    })
                }
            </Row>
        </div>
    );
};

export default PlaceOrder;