import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';


function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App () {
  return(
    <div>
     <Welcome  name='This is ' />
     <Welcome  name='Composing Components' />
     <Welcome  name='For example, we can create an App component that renders Welcome many times:' />
     </div>
  )
}



render(<App />, document.getElementById('root')); 