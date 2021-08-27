import React, { useEffect, useState } from 'react'
import cardData from '../api/cards.json'
import CardItem from './CardItem';

const Cards = () => {

    const [cards, setCards] = useState([]);

    useEffect(() => {
        setCards(cardData);
    }, [])

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4 md:container md:mx-auto">
            {
                cards && cards.map(card => <CardItem card={card} />)
            }
        </div>
    )
}

export default Cards
