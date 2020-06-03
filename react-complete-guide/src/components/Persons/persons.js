import React, { Component } from 'react'
import Person from './Person/Person'

class Persons extends Component {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDervivedStateFromProps')
    //     return state;
    // }



    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js shouldComponentUpdate')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js..getSnapShotBeforeUpdate')
        return null;
    }

    componentDidUpdate() {
        console.log('[Persons.js]..Component updated')
    }
    render() {
        console.log('[persons.js] rendering...');
        return this.props.persons.map((person, index) => {
            return (<Person
                click={this.props.clicked.bind(this, index)}
                name={person.name}
                age={person.age}
                key={person.id}

                changed={(event) => this.props.changed(event, person.id)}

            />)
        });
    }
};

export default Persons;