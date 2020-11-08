import React from 'react';
import 'tachyons';
import {Route, BrowserRouter as Router, Link} from "react-router-dom";
const Card = ({ topic, description }) => {
    return (
            <div>
                <h2 className="white">{topic}</h2>
                <p>{description}</p>
            </div>

    );
}

export default Card;
