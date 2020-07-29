import React, { Component } from 'react';


import personcssmod from './Person.css'
import Aux from '../../../HOC/Auxiliary'
import withClass from '../../../HOC/withClass'


class Person extends Component {

    render() {
        console.log('[Person.js] rendering...');
        return (
            <Aux className={personcssmod.Person}>
                < p key="k1" onClick={this.props.click} > I'm {this.props.name} and I am {this.props.age}!!</p>

                < div key="k2" >
                    {this.props.children}
                </div >
                <input key="k3" type='text' onChange={this.props.changed} value={this.props.name}></input>
            </Aux>




        );
    }


}




export default withClass(Person, personcssmod.Person);


/* <div className={personcssmod.Person} >

< p onClick={this.props.click} > I'm {this.props.name} and I am {this.props.age}!!</p>

< div >
    {this.props.children}
</div >
<input type='text' onChange={this.props.changed} value={this.props.name}></input>

</div > */