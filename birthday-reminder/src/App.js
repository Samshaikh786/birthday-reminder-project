import { useState } from 'react';
import './App.css';
import data from './Components/data';
import SInglePerson from './Components/SInglePerson';

function App() {
  const [persons,setPersons]=useState(data);
  const removePerson =(id)=>{
    const newperson = persons.filter((person)=>person.id !== id)
    setPersons(newperson)
  }
  return (
    <div className="App">
       <h1>Birthday Reminder</h1>
     <div className='underline'></div>
     <div className='main'>
    
    <div className='container'>
    {persons.map((person)=>{
      return <SInglePerson person={person} removePerson={removePerson}/>
     })}
    </div>
     </div>
    </div>
  );
}

export default App;
