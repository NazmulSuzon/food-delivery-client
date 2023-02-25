import React, { useEffect, useState } from 'react';
import { Container, Row, Spinner } from 'react-bootstrap';
import UserData from './UserData';

const MyOrder = () => {
    const [isSpinnerTrue, setIsSpinnerTrue] = useState(false);
    const [orderItem, setOrderItem] = useState([]);

    useEffect(() => {
        setIsSpinnerTrue(true);
        fetch('https://food-delivery-server-production-1051.up.railway.app/userData')
            .then(res => res.json())
            .then(data => {
                setOrderItem(data);
                setIsSpinnerTrue(false);
            });
      }, []);

    return (
        <Container>
            <h1 className="mt-5 mb-4">My Orders</h1>
                {!isSpinnerTrue ? <Row lg={3} className="g-4">
                    {orderItem.map(data => {
                        return(<UserData
                        key={data._id}
                        data={data}
                        ></UserData>)
                    })}
                </Row>
                :
                <div className='text-center'>
                     <Spinner animation="grow" />
                     <Spinner animation="grow" />
                     <Spinner animation="grow" />
                </div>
                }
        </Container>
    );
};

export default MyOrder;