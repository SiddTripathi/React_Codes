import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Input from './Input/Input'
import Output from './Output/Output'

class App extends Component {
  state = {
    User: [{ username: 'Siddharth' },


    ]
  }
  changeNameEventHandler = (event) => {
    this.setState({
      User: [

        { username: event.target.value }

      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>This is the assignment</h1>
        <Output name={this.state.User[0].username}></Output>
        <Input currentName={this.state.User[0].username} changed={this.changeNameEventHandler}></Input>

      </div>
    );
  }

}

export default App;
