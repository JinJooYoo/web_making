import React from 'react';
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className="cards">
            <h1>Check out </h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem 
                        src="images/porto.jpg"
                        text="Explore the hidden waterfall deep inside"
                        label="Adventure"
                        path="/information"/>
                    </ul>

                </div>
            </div>
        </div>
    )
}

export default Cards
