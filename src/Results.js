import React from 'react'
import Person from './Person'



const Results = ({chars}) => {
  return (
    <div>
      {!chars.length ?(
         <h1>No Characters Found</h1>
      ):(chars.map(char => {
       return(
        <Person 
        name={char.name}
        key={char.id}
        status={char.status}
        species={char.species}
        gender={char.gender}
        type={char.type}
        origin={char.origin.name}
        location={char.location.name}
        media={char.image}
        id={char.id}
        />
  )}
       ) 
      )}       
    </div>
  )
}


export default Results