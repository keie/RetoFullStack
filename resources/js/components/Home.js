import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import './css/home.css';


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
          <div >
            <div >
              <img  className="logoRequire" src={'../../images/logo.png'} width="100px" height="100px"/>
            </div>
            <div className="container">

              {

                this.state.movies.map(movie=>

                  <div className="poster" >
                    <div className="wallpaper">
                      <img src={movie.wallpaper} />
                    </div>
                    <div className="footerPoster">
                      <div className="title">
                        {movie.title}
                        </div>
                      <div className="preview">
                        {movie.preview}
                      </div>
                      <div className="rating">
                        <div className="firtsR">
                          <img className="rating" src={require('../../images/rating.png')} width='30px'/>
                        </div>
                        <div className="secondR">
                          {movie.rating}
                        </div>
                        <div className="thirdR">
                          <input className="buttonDetail" type="button" value="Details"/>
                        </div>
                    </div>
                  </div>
                </div>

                )

              }
            </div>
          </div>
        );
    }
}
//{this.state.movies.map(movie=><div>{movie.title}</div>)}
if (document.getElementById('example')) {
    ReactDOM.render(<Home />, document.getElementById('example'));
}
