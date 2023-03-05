import React from 'react';
import './App.css';
import { RecordsCount } from './RecordsCount';
import { StringsList } from './StringsList';

export const ListOfParticipants = (props) => {
   const names = props.list
       .map(person => person.name);
     
  return <>
    <StringsList list={names}/>
    <RecordsCount count={names.length}/>    
    </>;
}
