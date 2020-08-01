import React from 'react';
//import './price.scss';

function ReadMoreButton(props) {
    return (
        <button style={{backgroundColor: '#456990', border: 'none', borderRadius: '10px', padding: "10px", color: 'white', position: "absulte", float: "right", marginRight: "90px"}}>
           <span>
                Leer mas
           </span>
        </button>
    );
}

export default ReadMoreButton;