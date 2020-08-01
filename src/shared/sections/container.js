import React from 'react';
//import './price.scss';
import ReadMoreButton from './readMoreButton';

function App(props) {
    return (
        <div>
            <h3>{props.title}</h3>
            <div>{props.children}</div>
            <div>
                <ReadMoreButton />
            </div>
        </div>
    );
}

export default App;