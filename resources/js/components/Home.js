import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
import './css/home.css';
import Popup from './Popup';


export default class Home extends Component {

    constructor(){
      super();
      
      this.state={
        movies:[],
        showPopup: false,
        
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
    
    togglePopup(movieId) {
      const idMovie=movieId;
      this.setState({
        showPopup: !this.state.showPopup,
        movieId:idMovie
      });
    }
    
    
    render() {

        return (
          <div >
            
            <div className="container" >
            {console.log(this.state.movies.length)}
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
                          <input className="buttonDetail" type="button" value="Details" onClick={this.togglePopup.bind(this,movie.id)}/>
                          
                          
                          {this.state.showPopup ? 
                            <Popup closePopup={this.togglePopup.bind(this)} text={this.state.movieId}/>
                            : null
                          }
                          
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
