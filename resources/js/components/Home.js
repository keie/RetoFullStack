import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class Home extends Component {
    constructor(){
      super();
      this.state={
        movies:[]
      }

    }

    componentWillMount(){
      axios.get('/api/movie').then(response => {
          this.setState({
              movies: response.data
          });
      }).catch(errors => {
              console.log(errors);
      })
  }
    render() {

        return (
            <div className="container">
              {this.state.movies.map(movie=><div>{movie.title}</div>)}
            </div>
        );
    }
}
//{this.state.movies.map(movie=><div>{movie.title}</div>)}
if (document.getElementById('example')) {
    ReactDOM.render(<Home />, document.getElementById('example'));
}
