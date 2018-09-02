import React from 'react';
import './Person.css'


const person= (props)=>{
    return (
    <div className="Person"> 
        <p onClick={props.click}>I'm {props.name} an I am  {props.age} years old </p>
    {/* <p>{props.children}</p> */}

    {/* If you remove onChange props.changed  you won't be able to type  in the text box Bookmark in Adding two way binding  */}
    <input type='text' onChange ={props.changed} value={props.name}/>
    </div>
    )
};

export default person;