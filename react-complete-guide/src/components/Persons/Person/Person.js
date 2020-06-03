import React, { Component } from 'react';


import personcssmod from './Person.css'


class Person extends Component {

    render() {
        console.log('[Person.js] rendering...');
        return (
            <div className={personcssmod.Person} >

                < p onClick={this.props.click} > I'm {this.props.name} and I am {this.props.age}!!</p>

                < div >
                    {this.props.children}
                </div >
                <input type='text' onChange={this.props.changed} value={this.props.name}></input>

            </div >
        )
    }


}




export default Person;


