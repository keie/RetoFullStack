import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';


import Example from './components/Example';


export default class Index extends Component {
    render() {
        return (
          <div className="container">
              <Home/>
          </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Index />, document.getElementById('example'));
}
