import React, { Component } from "react";
import Como1 from './components/Como1'
import './App.css'
export default class App extends Component {
  state = {
    number: 0,
  };

  genNumber =() => {
    return Math.floor(Math.random() * 16777215)
  }


  handleClick = () =>{
    this.setState(
      {
        number: this.genNumber(),
      }
    )
  }

  clickPlus =() => {
    this.setState({
      number: this.state.number + 1
    })
    console.log(this.state.number)
  }

  render() {
    return (
      <div className="whole">
        <Como1 number={this.state.number}></Como1>
        <div className="button">
          <button onClick={this.handleClick}>gen number</button>
          <button onClick={this.clickPlus}>plus number</button>
        </div>
      </div>

    );
  }
}