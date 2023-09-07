import React from 'react';

// styles
import '../styles/Card.css';

const Card = ({ image, category, title }) => {
    return (
        <div className='card' style={{ backgroundImage: `url(${image})` }} loading="lazy">
            <p>{category}</p>
            <h3>{title}</h3>
        </div>
    );
}

export default Card;
