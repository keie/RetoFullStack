import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
import './css/home.css';
import Popup from './Popup';


export default class Home extends Component {

    constructor(){
      super();
      this.div=React.createRef();
      this.state={
        movies:[],
        showPopup: false,
        currentPage:1,
        allPerPage:10
        
      };
      this.handleClick = this.handleClick.bind(this);
      
    }

    handleClick(event) {
      
      //this.div.current.style.background='yellow';
      //console.log(this.div.current);
      
      this.setState({
        currentPage: Number(event.target.id)
        
      });
      
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
        //const {movies,currentPage,allPerPage}=this.state;

        //logic for displaying current all
        const indexOfLastAll=(this.state.currentPage)*(this.state.allPerPage);
        const indexOfFirstAll=indexOfLastAll-(this.state.allPerPage);
        const currentAll=(this.state.movies).slice(indexOfFirstAll,indexOfLastAll);

        const renderAll=currentAll.map((movie,index)=>{
          return (
            <div>
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
                  )
          </div>          
          );
        });
         const pageNumbers=[];
         for(let i=1;i<=Math.ceil((this.state.movies).length/(this.state.allPerPage));i++){
           pageNumbers.push(i);
         }
         const renderPageNumbers=pageNumbers.map(number=>{
           return(
             <div
                key={number}
                id={number}
                ref={this.div}
                onClick={this.handleClick} className={number}>{number}</div>);
           
         });
        return (
          <div >
            <div className="container">
              {renderAll}
            </div>
            <div className="pages">
                <div className="pageNumbers">
                  {renderPageNumbers}
                </div>
            </div>
          </div>
        );
    }
}
//{this.state.movies.map(movie=><div>{movie.title}</div>)}
if (document.getElementById('example')) {
    ReactDOM.render(<Home />, document.getElementById('example'));
}
