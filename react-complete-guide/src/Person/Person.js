import React from 'react';
//import Radium from 'radium';

// import styled from 'styled-components'; //better way to style than radium

//The Css file will be injected directly to index.html file by the help of Webpack inbuilt library
import personcssmod from './Person.css'


//Styled returns a react component by default. So StyleDiv is basically a react component which wraps person component
// ALWAYS REMEMBER : Never use identifiers in styled components such as .Person{} or width:'450 px' --> it should be 
//width:450px
// const StyleDiv = styled.div` 
//     width: 60%;
//     margin: 16px auto;
//     border: 1px solid #eeeeee;
//     box-shadow: 0 2px 3px #cccccc;
//     padding: 16px;
//     text-align: center;

//     @media (min-width:500px){
//         width:450px
//     }

//   `;

const person = (details) => {

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


//export default Radium(person);


/* Comments
1. details.name --> will put names in text boxes. However, we can only edit manu name because onchange even is handled in for that
only

*/