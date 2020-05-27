import React from 'react';
import Radium from 'radium';

//The Css file will be injected directly to index.html file by the help of Webpack inbuilt library
import './Person.css'


const person = (details) => {
    const style = {
        '@media (min-width:500px)': {
            width: '450px'
        }
    };
    return (
        <div className='Person' style={style}>
            <p onClick={details.click}>I'm {details.name} and I am {details.age}!!</p>

            <div>
                {details.children}
            </div>
            <input type='text' onChange={details.changed} value={details.name}></input>

        </div>
    )
}



export default Radium(person);


/* Comments
1. details.name --> will put names in text boxes. However, we can only edit manu name because onchange even is handled in for that
only

*/