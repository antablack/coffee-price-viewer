import React from 'react';
import './card.scss';

function Card(props) {
    return (
        <a href={props.url} className="card">
            <div className="card__cover">
                <img src={props.cover} />
            </div>
            <div className="card__body">
                <h4 className="card__body__title">{props.title}</h4>
                <p className="card__body__description">{props.description}</p>
                <span className="card__body__date w100">
                    {props.date}
                </span>
                <span>

                </span>
            </div>
        </a>
    );
}

export default Card;