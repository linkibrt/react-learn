/*
You can convert a function component like Clock to a class in five steps:

Create an ES6 class, with the same name, that extends React.Component.

Add a single empty method to it called render().

Move the body of the function into the render() method.

Replace props with this.props in the render() body.

Delete the remaining empty function declaration.
*/
import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello Class, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}



function tick() {
 
render(
  <Clock date={new Date()} />,
document.getElementById('root'));
}

setInterval(tick, 1000);