import React from 'react';
import {render} from 'react-dom';
import { ListOfParticipants } from './ListOfParticipants';
import { StringsList } from './StringsList';


const data = [
  {name:"Alex", email:"alex@gmail.com"},
  {name:"Jacob", email:"jc1@gmail.com"},
  {name:"DJ Snake", email:"snake_dj@gmail.com"}
];

render(
  <React.StrictMode>
  <ListOfParticipants
    list={data}
  />
  <StringsList
    list={['Banana','Coconut']}
  />
  </React.StrictMode>,
  document.getElementById('root'),
);
