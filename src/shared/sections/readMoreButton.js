import React from 'react';
import './readMoreButton.scss';

function ReadMoreButton(props) {
    return (
        <a href={props.url} target="_blank" className="readmore">
           <span>
                Leer mas
           </span>
        </a>
    );
}

export default ReadMoreButton;