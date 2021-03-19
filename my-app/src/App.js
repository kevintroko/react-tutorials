import { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: 'Kevin', age: 25 }, 
      { name: 'Oswaldo', age: 10 }
    ]
  };
  
  render() {    
    return(  
      <div className="App">
      <h1>Hello world</h1>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My hobbies: {}</Person>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: {}</Person>
      <button>Switch name</button>
    </div>
    );
  };  
}

export default App;
