import React, { useEffect } from 'react'
import classesmodule from './Cockpit.css'
const cockpit = (props) => {
    /*
     useEffect(() => {
         console.log('[Cockpit.js] useeffect cycle')
         // the use effect runs every time compnenent cockpit is run. 
         //in order to make it run on specific occassion - say when person changes setTimeout. Now this will run
         //only on first render and then whenevr persons are updated
         setTimeout(() => {
             alert('Saved this data');
         }, 1000)
         return () => {
             console.log('Cleanup funciton runs after person is edited')
         }
     }, [props.persons])
 */
    /*if we want to run our useeffect just once, pass an empty array in the end. Array means dependencies. Empty array 
    no dependencies. and hence no rerun on change. This will run only first time render*/
    useEffect(() => {
        console.log('[Cockpit.js] Use effect cycle')
        setTimeout(() => {
            alert('Run only once')
        }, 1000)
        return () => {
            console.log('Cleanup function runs after the component is unmounted')
        }
    }, [])

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