import React from 'react';
import 'tachyons';
import {Route, BrowserRouter as Router, Link} from "react-router-dom";
const Card = ({ topic, description }) => {
    return (
        <Link to={`/${topic}`} className='tc grow bg-washed-blue br3 pa3 ma2 dib bw2 shadow-5'>
            <div>
                <h2>{topic}</h2>
                <p>{description}</p>
            </div>
        </Link>
    );
}

export default Card;
