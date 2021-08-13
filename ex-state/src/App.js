import './App.css';
import React, { Component } from "react";

export default class App extends Component {
  constructor(){
    super();
    this.state ={
      person :{
      fullName :'abdelrahman',
      bio : 'React',
      profession : 'develop',
      count : 0 ,
    },
    isShown: true,
  
  };
    this.toggleDetails = this.toggleDetails.bind(this)
  }



  componentDidMount(){
    this.intervalId = setInterval(() => {
      this.setState({
        person:{...this.state.person, count: this.state.person.count +1}
      } );
  },1000)
  }


  toggleDetails() {
    this.setState({ 
      isShown: !this.state.isShown,
      person: { ...this.state.person, count : 0 }
    }, () => {
      if (this.state.isShown) {
        this.intervalId = setInterval(() => {
      this.setState({
        person:{...this.state.person, count: this.state.person.count +1}
      } );
  },1000)
      } else {
        clearInterval(this.intervalId)
      }
    });
  }
 
  render(){
    return(
        <React.Fragment>
          {this.state.isShown && (<div>
            <h1>NAME : {this.state.person.fullName}</h1>
            <h2>bio : {this.state.person.bio}</h2>
            <h3>profession : {this.state.person.profession}</h3>
          </div>)}

          <button onClick={this.toggleDetails}>{this.state.isShown ? 'Hide' : 'Show'}</button>

            <h1>counter is : {this.state.person.count}</h1>
        </React.Fragment>
    )
  }


}