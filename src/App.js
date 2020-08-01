import React from 'react';
import logo from './logo.svg';
import './App.css';
import Price from './price';
import News from './news';
import Blog from './blog';

function App() {
  return (
    <div className="App">
      <Price/>
      <News/>
      <Blog/>
    </div>
  );
}

export default App;
