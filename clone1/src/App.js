import React, { Component } from "react";
import Como1 from './components/Como1'
import './App.css'
import Clock from "./components/Clock";
export default class App extends Component {
  state = {
    number: 0,
    lotto: [],
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

  clickLotto = () => {

    // 스크립트 
    let lotto = [];
        while (lotto.length < 6) {
            var num = parseInt(Math.random() * 45 + 1);
            if (lotto.indexOf(num) == -1) {
                lotto.push(num);
            }
        }
        lotto.sort((a,b)=>a-b);
    if(this.state.lotto === []){
      this.setState({
        lotto: this.state.lotto.concat(lotto),
      })
    } else{
      this.setState({
        lotto: [].concat(lotto),
      })
    }
    
  }

  render() {
    return (
      <div className="whole">
        <Clock></Clock>
        <Como1 number={this.state.number} lotto={this.state.lotto}></Como1>
        <div className="button">
          <button onClick={this.handleClick}>gen number</button>
          <button onClick={this.clickPlus}>plus number</button>
          <button onClick={this.clickLotto}>plus number</button>
        </div>
      </div>

    );
  }
}