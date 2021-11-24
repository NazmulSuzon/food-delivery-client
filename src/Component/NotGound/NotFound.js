import React from 'react';
import { Link } from "react-router-dom";
import image from '../../images/Not_Found/not_found.jpg'
const NotFound = () => {
    return (
        <div>
            <Link to="/home"><img style={{width:"100vw", height:"100vh"}} src={image} alt="" /></Link>
        </div>
    );
};

export default NotFound;