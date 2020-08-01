import React from 'react';
//import './price.scss';
import ReadMoreButton from './readMoreButton';

function App(props) {
    return (
        <div style={{width: '50%'}}>
            <h3>{props.title}</h3>
            <div>{props.children}</div>
            <div style={{position: "relative"}}>
                <ReadMoreButton />
            </div>
        </div>
    );
}

export default App;