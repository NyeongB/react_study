import React, { Component } from 'react';
import PhoneForm from './components/PhoneForm';
// import IterationSample from "./IterationSample";

class App extends Component {

  id = 0;


  state = {
    informatin: [],
  }

  handleCreate = (data) => {

    const {informatin} = this.state;

    this.setState({
      informatin: informatin.concat(Object.assign({}, data, {
        
        id: this.id++
      })) // 비구조 할당
    })
  }


  render() {
    return (
      <div>
        {/* <IterationSample/> */}
        <PhoneForm onCreate={this.handleCreate}></PhoneForm>
        {JSON.stringify(this.state.informatin)}
      </div>
    );
  }
}

export default App;