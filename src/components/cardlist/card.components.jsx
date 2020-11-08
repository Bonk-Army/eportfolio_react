import React from 'react';
import 'tachyons';
import {Route, BrowserRouter as Router, Link} from "react-router-dom";
const Card = ({ topic, description }) => {
    return (
        <Link style={{ textDecoration: 'none' }} to={`/${topic}`} className='tc grow white dib bw2 shadow-5'>
            <div>
                <h2 className="white">{topic}</h2>
                <p>{description}</p>
            </div>
        </Link>
    );
}

export default Card;
