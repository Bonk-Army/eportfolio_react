import React from 'react';
import 'tachyons';
import {Route, BrowserRouter as Router, Link} from "react-router-dom";
const Card = ({ topic, description }) => {
    return (
        <Link style={{ textDecoration: 'none' }} to={`/${topic}`} className='tc grow bg-gray br3 pa3 ma2 dib bw2 shadow-5'>
            <div>
                <h2 className="black">{topic}</h2>
                <p>{description}</p>
            </div>
        </Link>
    );
}

export default Card;
