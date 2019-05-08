import React, {Component} from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component{
  state = {
    persons : [
      {id: 1, name: "Max", age:28},
      {id: 2, name: "Manu", age:29},
      {id: 3, name: "Stephanie", age:26}
    ],
    showPersons: false
  }

  // switchNameHandler = (newName) => {
  //   //console.log("Clicked");
  //   // DONT DO THIS this.state.persons[0].name = "MaxMax";
  //   this.setState({
  //       persons : [
  //         {name: newName, age:38},
  //         {name: "ManuManu", age:39},
  //         {name: "Stephanieee", age:36}
  //       ]
  //   })
  // }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice(); // slice method without args just copies the array
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});

  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }  

  // nameChangeHandler = (event) => {
  //   this.setState({
  //       persons : [
  //         {name: "Max", age:28},
  //         {name: event.target.value, age:29},
  //         {name: "Stephanie", age:26}
  //       ]
  //   })
  // }

  nameChangeHandler2 = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons: persons})
  }

  render(){
    const style = { 
      backgroundColor: "green",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    }

    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          {/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} 
          click={this.switchNameHandler.bind(this, "SB")}
          change={this.nameChangeHandler}
          />
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>Hobbies: Racing</Person>  */}
          {this.state.persons.map((person, index) => {
            return(<Person 
              name={person.name} 
              age={person.age} 
              click={()=>{this.deletePersonHandler(index)}}
              key={person.id}
              change={(event)=> this.nameChangeHandler2(event, person.id)}
              />)
          })
          }
        </div>
      )
    }

   return (
    <div className="App">
      <h1>Hi I am react app</h1>
      <p>This is relly working!</p>
      {/* <button 
      style={style}   
      onClick={()=>this.switchNameHandler("SBBro")}>Switch</button> */}
      <button 
      style={style} 
      onClick={this.togglePersonsHandler}>Toggle Persons</button>      
      {/* {this.state.showPersons === true? 
        <div>
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} 
          click={this.switchNameHandler.bind(this, "SB")}
          change={this.nameChangeHandler}
          />
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>Hobbies: Racing</Person> 
        </div>
        :null
      } */}
    {persons}
    </div>
  );
  // return React.createElement('div', {className: "App"}, React.createElement('h1', null, 'Hi I am react app!!!'))
}
}
export default App;
