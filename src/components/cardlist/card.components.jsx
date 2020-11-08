import React from 'react';
import 'tachyons';
const Card = ({ topic, description }) => {
    return (
        <div className='tc grow bg-washed-blue br3 pa3 ma2 dib bw2 shadow-5'>
            <div>
                <h2>{topic}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Card;
