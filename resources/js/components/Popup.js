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
                      type="image"
                      className="bClose"
                      src="../../images/cancel.png"
                      alt="Submit"
                      onClick={this.props.closePopup}
                    />
                  </div>
                  <div className="fullImage">
                    <img src={this.state.fullDescription.wallpaper} height="450px" width="320px"/>
                    <div className="bigContainer">
                        <div className="titleDiv">
                          {this.state.fullDescription.title}
                        </div>
                        <div className="previewDiv">
                          {this.state.fullDescription.preview}
                          <div className="idiomDiv">
                            {this.state.fullDescription.language}
                          </div>

                        </div>
                        <div className="iconsDiv">
                          
                          <div className="heart">
                            <div>
                              <img src={require('../../images/heart.png')} height="30px"/>
                            </div>
                            <div className="heartSon">
                              {this.state.fullDescription.rating}
                              <div className="nameIcon">
                                {"rating"}
                              </div>
                              
                            </div>
                          </div>
                          
                          <div className="star">
                            <img src={require('../../images/popularity.png')} height="30px"/> 
                            <div className="popularitySon">
                              {this.state.fullDescription.popularity} 
                              <div className="nameIconP">
                                {"popularity"}
                              </div>
                            </div>  
                          </div>
                          <div className="hand">
                            <img src={require('../../images/votes.png')} height="30px"/>
                            <div className="handSon">
                              {this.state.fullDescription.vote}
                              <div className="nameIconH">
                                {"votes"}
                              </div>
                            </div>
                          </div>
                        </div>
                    </div>
                    <div className="fullDescription">
                      {this.state.fullDescription.description}
                    </div>
                    <div className="premiere">
                    <div className="calendarIcon">
                        <img src={require('../../images/calendar.png')} height="30px"/>
                      </div>
                      <div className="date">
                        {this.state.fullDescription.premiere}
                      </div>
                      
                    </div>
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
