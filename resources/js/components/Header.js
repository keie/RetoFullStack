import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './css/header.css';


export default class Header extends Component {

      render() {
        return (
            <div className="container">
              <center>
                <img className="logoHeader"src={require('../../images/logo.png')} height="90px"/ >
              </center>
            </div>
        );
    }
}
//{this.state.movies.map(movie=><div>{movie.title}</div>)}
if (document.getElementById('example')) {
    ReactDOM.render(<Header />, document.getElementById('example'));
}
