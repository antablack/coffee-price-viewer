import React, { useEffect, useState } from 'react';
import './price.scss';
import Item from './item';
import { getPrice } from '../services';

function App() {
    //https://allorigins.win/
    const [priceData, setPriceData] = useState({});
    useEffect(() => {
        if (priceData.date) return;
        getPrice().then((data) => {
            setPriceData(data);
        }).catch((error) => {
            console.error(error);
        })
    })

    return (
        <div className="App" style={{ marginTop: "30px" }}>
            <h4>PRECIO DEL CAFE A {priceData.date}</h4>
            <Item price={priceData.price} currency="COP*" description="Carga de cafe (125kg)" />
            <Item price={priceData.dollar} currency="USD" description="Tasa de cambio" />
            <p>*Precio interno de referencia en Colombia</p>
        </div>
    );
}

export default App;