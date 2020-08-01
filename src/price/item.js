import React from 'react';
//import './price.scss';

function App(props) {
    return (
        <div>
            <h3>{props.price} {props.currency}</h3>
            <h6>{props.description}</h6>
        </div>
    );
}

export default App;