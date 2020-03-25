import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

const element = <h1>Hello, world</h1>;
render(element, document.getElementById('root'));

