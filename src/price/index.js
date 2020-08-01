import React from 'react';
import './price.scss';
import Item from './item';


function App() {
    return (
        <div className="App" style={{marginTop: "30px"}}>
            <h4>PRECIO DEL CAFE A 2020-07-31</h4>
            <Item price="1.140.000" currency="COP*" description="Carga de cafe (125kg)" />
            <Item price="3.733,33" currency="USD" description="Tasa de cambio" />
            <p>*Precio interno de referencia en Colombia</p>
        </div>
    );
}

export default App;