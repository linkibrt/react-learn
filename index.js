import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';


function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}



const element = <Welcome  name='GIMT' />;

render(element, document.getElementById('root'));
