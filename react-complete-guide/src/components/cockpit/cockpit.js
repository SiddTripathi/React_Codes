import React from 'react'
import classesmodule from './Cockpit.css'
const cockpit = (props) => {

    const clases = [];
    let btnClass = [classesmodule.button];
    if (props.showPersons === true) {
        btnClass.push(classesmodule.red)
    }

    if (props.persons.length <= 2) {
        clases.push(classesmodule.red);
    }
    if (props.persons.length <= 1) {
        clases.push(classesmodule.bold); //bold is class in app.css
    }

    return (
        <div className={classesmodule.Cockpit}>
            <h1>{props.title}</h1>
            <p className={clases.join(' ')}>This is really working!</p>
            <button className={btnClass.join(' ')} onClick={props.toggleNameHandler}>Switch Name</button>
        </div>
    );


}

export default cockpit;