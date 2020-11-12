import React from 'react';
import './card-list.styles.css';
import Card from "./card.components";
import {topics} from './card-list.topics.js';
import { HashLink } from 'react-router-hash-link';
const topic2 = topics;

const CardList = ({}) => {
    return (
        <div className="pt2 cardList">
            {
                topic2.map(topic => (

                    <HashLink smooth to={window.location.pathname+"#"+topic.name} className="grow">
                        <Card elementId={topic.id} key={topic.id} topic={topic.name}/>
                    </HashLink>
                ))
            }
        </div>
    );
}

export default CardList;
