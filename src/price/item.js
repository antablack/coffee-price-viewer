import React from 'react';
//import './price.scss';

function App(props) {
    return (
        <div>
            <h3 style={{ marginBottom: '5px' }}>{props.price} {props.currency}</h3>
            <h6 style={{ marginTop: '0px' }}>{props.description}</h6>
        </div>
    );
}

export default App;