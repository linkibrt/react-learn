import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
function tick() {
 const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
render(element, document.getElementById('root'));
}

setInterval(tick, 1000);
