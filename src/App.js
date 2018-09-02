import React, { Component } from 'react';

import './App.css';
import Person from './Person/Person';
// Only  in a class component you can set  state
// in a class component you can set properties without using var,const,let  ex. something = "somevalue"
// in a NON class component you have to use  const,let
class App extends Component {//Component has a this.setState method that allows to update this state property here
  // and let react know about this update  and updates the dom.
  state = {
    persons: [
      {id:'cosa1', name: 'Max', age: 28 },
      {id:'cosa2', name: 'Manu', age: 29 },
      {id:'cosa3', name: 'Stephanie', age: 26 }
    ],

    showPersons: false
  }
  // This is a method that you are not actively calling  but you re assigning as an event handler
  // this in line 28  points to  class App because  of the arrow function  in switchNH
  // switchNameHandler = (newName) => {
  //   // console.log('Was clicked');
  //   // DON'T DO THIS to change the state !!! this.state.persons[0].name = 'Maximilian';
  //   this.setState({
  //     persons:
  //       [{ name: newName, age: 28 },
  //       { name: 'Mau', age: 29 },
  //       { name: 'Stephanie', age: 27 }]
  //   })// setState takes an object as an argument and will merge whatever is defined 
    //... here with our existing state, if we have 2 states it will only modify 1

  // }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    });
    // Instead of spread below it could  be:
    // const person = Object.assign({},this.state.persons[personIndex]);
    const person ={... this.state.persons[personIndex]};
person.name = event.target.value

const persons = [...this.state.persons];
persons[personIndex] = person;

    this.setState({ persons:persons })
  }

  deletePersonHandler = (personIndex)=>{
    // You use slice to make a COPY of the array  state instead of  mutating  the original 
    // const persons = this.state.persons.slice();
// OR you can use  spread to make a  list of elements that is added to  the 
      const persons = [...this.state.persons];
      

persons.splice(personIndex,1)
this.setState({persons: persons})
  }

  togglesPersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }
  render() {
    // A hover style in an inline css is difficult to do 
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    }
let persons = null;
if (this.state.showPersons){
  persons = (
<div>
{this.state.persons.map((person,index) =>{
        return <Person
        click={() => this.deletePersonHandler(index)}
         name={person.name}
        age ={person.age}
        key={person.id}
        changed = {(event) =>this.nameChangedHandler(event, person.id)} />
      })}
    
          {/*Since component doesn't nest anything  it will be a self closing tag*/}
          {/* We cant use if else but we use ternary expression to show or not show the person components */}

          {/* <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age} />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            //click is considered a property of Person that will have a reference to the switchNH to be used in Person.js
            click={this.switchNameHandler.bind(this, 'Max!!')} changed={this.nameChangedHandler}>My Hobbies:Racing</Person>

          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age} /> */}
        </div> 
  );
}

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        {/*onClick is used with a capital C in react. We are passing a reference of switchNH NOT executing it*/}
        {/* <button onClick={this.switchNameHandler.bind(this,'Maximilian', 'something')}>Switch Name</button> */}
        <button style={style}
          onClick={this.togglesPersonsHandler}>Toggle persons</button>
          {/* persons below refers to let persons = null */}
      {persons}
      </div>
    )
    // createElement takes at least 3 arguments (1 Element we want to render to DOM 2 Configuration for this ex. js object
    // null 3 Any amount of children (what is nested in the div))
    // return React.createElement('div',{className:'App'}, 'h1', 'Hi, I\'m a React App!!!');
    }
}

export default App;
