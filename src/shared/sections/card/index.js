import React from 'react';

function Card(props) {
    return (
        <a href={props.url}>
            <div>
                <img src={props.cover} />
            </div>
            <div>
                <h4>{props.title}</h4>
                <p>{props.description}</p>
                <span>
                    {props.date}
                </span>
                <span>

                </span>
            </div>
        </a>
    );
}

export default Card;