import React, { Component } from 'react';
import PropTypes from 'prop-types'

import personcssmod from './Person.css'
import Aux from '../../../HOC/Auxiliary'
import withClass from '../../../HOC/withClass'
import AuthContext from '../../../context/auth-context'


class Person extends Component {
    constructor(props) {
        super(props)
        this.inputElementRef = React.createRef(); //works only for references in class based components
    }
    static contextType = AuthContext;
    componentDidMount() {
        // this.inputElement.focus()
        this.inputElementRef.current.focus()
        console.log(this.context.authenticated)
    }
    render() {
        console.log('[Person.js] rendering...');
        return (
            <Aux className={personcssmod.Person}>
                {this.context.authenticated ? <p>Authenticated Successfully</p> : <p>Login Please</p>}


                < p key="k1" onClick={this.props.click} > I'm {this.props.name} and I am {this.props.age}!!</p>

                < div key="k2" >
                    {this.props.children}
                </div >
                <input
                    key="k3"
                    type='text'
                    onChange={this.props.changed}
                    value={this.props.name}
                    //ref={(inputEl) => { this.inputElement = inputEl }}
                    ref={this.inputElementRef}>

                </input>
            </Aux>




        );
    }


}

//if some one passes age property as string instead of number or name as number instead of string, the proptypes will throw warning
// this helps when we are working in teams, and other members use our components.
Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person, personcssmod.Person);


/*
<div className={personcssmod.Person} >
< p onClick={this.props.click} > I'm {this.props.name} and I am {this.props.age}!!</p>
< div >
    {this.props.children}
</div >
<input type='text' onChange={this.props.changed} value={this.props.name}></input>
</div > */