import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
import PhoneInfoList from './components/PhoneInfoList';
// import IterationSample from "./IterationSample";

class App extends Component {

  id = 0;


  state = {
    information: [],
  }

  handleCreate = (data) => {

    const {information} = this.state;

    this.setState({
      information: information.concat(Object.assign({}, data, {
        
        id: this.id++
      })) // 비구조 할당
    })
  }

  handleRemove = (id) => {
    const {information} = this.state;
    this.setState({
      information: information.filter(info => info.id !== id)
    });
  }



  render() {
    return (
      <div>
        {/* <IterationSample/> */}
        <PhoneForm onCreate={this.handleCreate}></PhoneForm>
        <PhoneInfoList 
          data={this.state.information}
          onRemove={this.handleRemove}
          />
      </div>
    );
  }
}

export default App;