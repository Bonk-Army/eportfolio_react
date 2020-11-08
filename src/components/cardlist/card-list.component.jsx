import React from 'react';
import './card-list.styles.css';
import Card from "./card.components";
import {topics} from './card-list.topics.js';
const topic2 = topics;
const CardList = ({ topics }) => {
    return (
        <div className="cardList">
            {
                topic2.map(topic => (
                        <Card key={topic.id} topic={topic.name} description={topic.description}/>
                    ))
            }
        </div>
    );
}

export default CardList;
