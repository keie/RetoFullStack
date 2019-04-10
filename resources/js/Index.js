import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Popup from './components/Popup';
import Example from './components/Example';


export default class Index extends Component {
    render() {
        return (
          <div className="container">
              <Header/>
              <Home/>
              <Footer/>
              
          </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Index />, document.getElementById('example'));
}
