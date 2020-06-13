import React, { Component } from 'react'
import Person from './Person/Person'

class Persons extends Component {
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] getDervivedStateFromProps')
    //     return state;
    // }

    // componentWillReceiveProps(props){
    //     console.log('Persons.js Component will recieve props')
    // }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js shouldComponentUpdate')
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js..getSnapShotBeforeUpdate')
        return { message: 'Snapshot before update' };
    }

    componentDidUpdate(prevProps, prevState, Snapshot) {
        console.log('[Persons.js]..Component updated')
        console.log(Snapshot)
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