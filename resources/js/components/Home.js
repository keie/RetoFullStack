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
            <div className="container">
              {
                this.state.movies.map(movie=>
                  <div className="poster" >
                    <div>
                      <img src={movie.wallpaper} width="100px" width="100px"/>
                    </div>
                    <div className="footerPoster">
                      <div>
                        {movie.title}
                        </div>
                      <div>
                        {movie.preview}
                      </div>
                      <div>
                        <table>
                          <tr>
                            <td>
                              <img className="rating" src={require('../../images/rating.png')} width='30px'/>
                            </td>
                            <td>
                              {movie.rating}
                            </td>
                            <td>
                              <input type="button" value="Details"/>
                            </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                </div>
                )

              }
            </div>
        );
    }
}
//{this.state.movies.map(movie=><div>{movie.title}</div>)}
if (document.getElementById('example')) {
    ReactDOM.render(<Home />, document.getElementById('example'));
}
