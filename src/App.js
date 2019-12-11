import React, {Component} from 'react';
import './App.css';
import Person from './person/Person'

class App extends Component {
  state = {
    persons: [
      {
        name : 'Mowhaa', age : '20'
      }, 
      {
        name : 'Matthew', age : '22'
      },
      {
        name : 'Bellamy', age : '30'
      }
    ]
  }

  switchNameHandler = (newName) => {
    // console.log('was clicked!'+num);
    this.setState({
      persons: [
        {
          name : newName, age : '30'
        }, 
        {
          name : 'Matthew', age : '22'
        },
        {
          name : 'Muse', age : '35'
        }
      ]
    })
  }

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        {
          name : 'Mowhaa', age : '20'
        }, 
        {
          name : event.target.value, age : '22'
        },
        {
          name : 'Bellamy', age : '30'
        }
      ]
    })
  }

  render () {

    const btnStyle = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return(
    <div className="App">
      <h1>Hello there, I am a react app!</h1>
      <button 
        style={btnStyle}
        onClick={() => this.switchNameHandler('Rahmatullah')}>Switch my name please!</button>
      <Person 
          name={this.state.persons[0].name} 
          age = {this.state.persons[0].age}/>
      <Person 
          click={this.switchNameHandler.bind(this, 'Rahmat')}
          name={this.state.persons[1].name} 
          changed={this.nameChangeHandler}
          age = {this.state.persons[1].age}>Yes I am a children</Person>
      <Person 
          name={this.state.persons[2].name} 
          age = {this.state.persons[2].age}/>
    </div>
    );
  }
}

export default App;
