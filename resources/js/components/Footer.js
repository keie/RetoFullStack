import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './css/footer.css';


export default class Footer extends Component {

      render() {
        return (
            <div className="container">
              <footer>
                <div className="iconContainer">
                  <div className="iconIns">
                    <img src={require('../../images/instagram.png')}/>
                  </div>
                  <div className="iconFb">
                    <img  src={require('../../images/twitter.png')}/>
                  </div>
                  <div className="iconFb">
                    <img  src={require('../../images/facebook.png')}/>
                  </div>
                </div>
              </footer>
            </div>
        );
    }
}
//{this.state.movies.map(movie=><div>{movie.title}</div>)}
if (document.getElementById('example')) {
    ReactDOM.render(<Footer />, document.getElementById('example'));
}
