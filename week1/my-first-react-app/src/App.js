import React from 'react';
import './App.css';


export const ListofParticipants = (props) => {
   const names = props.list
       .map(person => person.name)
       .join(', ')
       
  return <>
    <p>{names}</p>
    <p>All: {props.list.length} records.</p>
    </>;
}
