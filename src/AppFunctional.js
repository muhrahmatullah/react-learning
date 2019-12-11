import React, {useState} from 'react';
import './App.css';
import Person from './person/Person';

const app = props => {

const [personState, setPersonState] = useState({
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
})

const switchNameHandler = () => {
    setPersonState({
        persons: [
          {
            name : 'Gangsta', age : '30'
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

    return (
    <div className="App">
      <h1>Hello there, I am a react app!</h1>
      <button onClick={switchNameHandler}>Switch my name please!</button>
      <Person name={personState.persons[0].name} age = {personState.persons[0].age}/>
      <Person name={personState.persons[1].name} age = {personState.persons[1].age}>Yes I am a children</Person>
      <Person name={personState.persons[2].name} age = {personState.persons[2].age}/>
    </div>
    );
}

export default app;