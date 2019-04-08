import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './css/footer.css';


export default class Footer extends Component {

      render() {
        return (
            <div className="container">
              <footer>

              </footer>
            </div>
        );
    }
}
//{this.state.movies.map(movie=><div>{movie.title}</div>)}
if (document.getElementById('example')) {
    ReactDOM.render(<Footer />, document.getElementById('example'));
}
