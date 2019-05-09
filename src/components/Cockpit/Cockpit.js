import React from 'react'
import './Cockpit.css';

const cockpit = (props) => {
    let classes = [];
    if(props.persons.length < 2) classes.push('red');
    if(props.persons.length < 1) classes.push('bold');
    return(
        <div>
            <h1>Hi I am react app</h1>
            <p className={classes.join(" ")}>This is relly working!</p>
            <button 
            style={props.style} 
            onClick={props.click}>Toggle Persons</button>  
        </div>
    )
}

export default cockpit