import React from 'react';
//import Radium from 'radium';


// import styled from 'styled-components'; //better way to style than radium

//The Css file will be injected directly to index.html file by the help of Webpack inbuilt library
import personcssmod from './Person.css'


const person = (details) => {
    console.log('[Person.js] rendering...');
    return (
        <div className={personcssmod.Person} >

            < p onClick={details.click} > I'm {details.name} and I am {details.age}!!</p>

            < div >
                {details.children}
            </div >
            <input type='text' onChange={details.changed} value={details.name}></input>

        </div >
    )
}




export default person;


