import React from 'react';

const SInglePerson = ({person ,removePerson}) => {
    return (
        <div className='single-person' key={person.id}>

            <h2>{person.name}</h2>
            <img src={person.image}/>
            <h3>{person.age}Years</h3>
            <button onClick={()=>removePerson(person.id)}>Remove</button>
            
        </div>
    );
};

export default SInglePerson;