import React from 'react';

const Card = ({ topic, description }) => {
    return (
        <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
            <div>
                <h2>{topic}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default Card;
