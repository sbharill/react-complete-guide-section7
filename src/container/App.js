import React, {Component} from 'react';
import './App.css';
import Persons from '../components/Persons/Persons'
import Cockpit from '../components/Cockpit/Cockpit'


class App extends Component{
  state = {
    persons : [
      {id: 1, name: "Max", age:28},
      {id: 2, name: "Manu", age:29},
      {id: 3, name: "Stephanie", age:26}
    ],
    showPersons: false
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});

  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }  

  nameChangeHandler = (event, id) => {
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
          <Persons persons={this.state.persons} click={this.deletePersonHandler} change={this.nameChangeHandler}/>
        </div>
      )
    }

   return (
    <div className="App">
    <Cockpit style={style} click={this.togglePersonsHandler} persons={this.state.persons}/>
    {persons}
    </div>
  );

}
}
export default App;
