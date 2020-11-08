import React from 'react';
import 'tachyons';
import {Route, BrowserRouter as Router, Link} from "react-router-dom";
const Card = ({ topic, description }) => {
    return (
            <div>
                <h2 className="white" onClick={window.scrollTo(0,4000)}>{topic}</h2>
                <p>{description}</p>
            </div>

    );
}

export default Card;
