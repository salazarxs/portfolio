import React from 'react';


// styles
import '../styles/Card.css';

const Card = ({ image, category, title, route }) => {

    return (
        <a className='container-card' href={route} target='_blank'>
            <p>{category}</p>
            <div className='card' style={{ backgroundImage: `url(${image})` }} loading="lazy">
            </div>
            <h3>{title}</h3>
        </a>
    );
}

export default Card;
