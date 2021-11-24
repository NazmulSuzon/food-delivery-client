import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import itemsData from '../../../FakeData/itemsData.json'
import OrderDetails from './OrderDetails';

const PlaceOrder = () => {
    const [detailsData, setDetailsData] = useState([]);

    useEffect(() => {
        fetch('https://ghoulish-village-13879.herokuapp.com/items')
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