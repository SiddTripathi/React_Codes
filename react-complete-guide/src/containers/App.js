//useState allows us to manage states in class based components.

import React, { Component } from 'react';
import Persons from '../components/Persons/persons'
import classesmodule from './App.css';
import Cockpit from '../components/cockpit/cockpit'



class App extends Component {
  constructor(props) {
    super(props);
    console.log('[App.js] constructor')
  }

  state = {
    persons: [
      { id: 'P101', name: 'Max', age: 28 },
      { id: 'P102', name: 'Manu', age: 29 },
      { id: 'P103', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDervivedStateFromProps', props)
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount')
  }

  toggleNameHandler = () => {

    const state = this.state.showPersons
    this.setState({ showPersons: !state }) //state will always be set opposite to current state

  }
  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons --> this is creating a persons reference to original state data. By this 
    //we are mutating the original data. 
    const persons = [...this.state.persons];//using spread operator is the appropriate way here. This will convert persons
    // into an array instead of reference to original state and mutating original data
    persons.splice(personIndex, 1);
    this.setState({ persons: persons })
  }
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id
    })

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value
    const persons = [...this.state.persons];
    persons[personIndex] = person
    this.setState({ persons: persons })

  }

  render() {
    console.log('[App.js] render')
    let person = null;
    if (this.state.showPersons === true) {
      person = (

        <div>
          <h1>This is correct</h1>
          <p>This is rendered through if else cond and JS. Always remeber that react components are Java script. Every thing inside render
          is executed when components are re-rendered.
  </p>

        </div>
      )

    }
    return (

      <div className={classesmodule.App}>
        <Cockpit
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          toggleNameHandler={this.toggleNameHandler}
        >

        </Cockpit>


        {this.state.showPersons ?
          <div>
            <Persons

              persons={this.state.persons}
              clicked={this.deletePersonHandler}
              changed={this.nameChangedHandler}
            ></Persons>


          </div> : null}
        {person}

      </div>

    );

  }
}

export default App;




