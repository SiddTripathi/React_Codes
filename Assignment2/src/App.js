import React, { Component } from 'react';
import Validation from './validation/Validation'
import Char from './Char/Char'
import './App.css';

class App extends Component {
  state = {
    userInput: ''
  }
  inputChangeHandler = (event) => {
    this.setState({ userInput: event.target.value })
  }
  deleteCharHandler = (index) => {
    const text = this.state.userInput.split('');
    text.splice(index, 1)
    const updatedText = text.join('');
    this.setState({ userInput: updatedText })
  }


  render() {
    const charList = this.state.userInput.split('').map((ch, index) => {
      return <Char
        character={ch}
        key={index}
        clicked={this.deleteCharHandler.bind(index)} />
    })
    return (
      <div className="App" >
        <input
          type="text"
          onChange={this.inputChangeHandler}
          value={this.state.userInput}
        ></input>
        <p>{this.state.userInput}</p>
        <Validation inputLength={this.state.userInput.length}></Validation>
        {charList}
      </div>
    );
  }

}

export default App;
