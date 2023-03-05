import React from 'react';
import {render} from 'react-dom';
import {ListofParticipants} from "./App"

const data = [
  {name:"Alex", email:"alex@gmail.com"},
  {name:"Jacob", email:"jc1@gmail.com"},
  {name:"DJ Snake", email:"snake_dj@gmail.com"}
];

render(
  <React.StrictMode>
  <ListofParticipants
    list={data}
  />
  </React.StrictMode>,
  document.getElementById('root'),
);
