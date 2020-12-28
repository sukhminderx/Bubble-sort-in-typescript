import React from "react";
import logo from "./logo.png";
import "./App.css";
import { BubbleSort } from "./BubbleSort";


function App() {

  new BubbleSort([1,6,3,8,2,9]);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{
          color: 'black',
          marginTop: '100px'
        }}>Check your console for Bubble Sort in TypeScript... visit <a href="https://www.gabruism.com">Gabruism</a></h1>
      </header>
    </div>
  );
}

export default App;
