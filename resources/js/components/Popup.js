import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Home from './Home';
import './css/popup.css';


export default class Popup extends Component {

  constructor(props){
    super(props);
    this.state={
      fullDescription:{}
    };
  }    
  componentDidMount(){
    axios.get("/api/movie/" + this.props.text).then(response => {
      this.setState({fullDescription : response.data[0]});
    }).catch(error => console.log(error));
  }
  render() {
    if(this.state.fullDescription){

    
        return (

              <div className="popupContainer">
                <div className="popup">
                  <div>
                    <input
                      type="button"
                      className="bClose"
                      value="close"
                      onClick={this.props.closePopup}
                    />
                  </div>
                  <div>
                    <img src={this.state.fullDescription.wallpaper} height="450px" width="320px"/>
                  </div>
                </div>
              </div>

        );
    }else{
      return null;
    }
  }
}
//{this.state.movies.map(movie=><div>{movie.title}</div>)}
if (document.getElementById('example')) {
    ReactDOM.render(<Popup />, document.getElementById('example'));
}
