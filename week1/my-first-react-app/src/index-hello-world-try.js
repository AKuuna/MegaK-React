import React from 'react';
import ReactDOM from 'react-dom';

const name = prompt ("Share your name");

ReactDOM.render(
 <div>
  {name ===''? <strong> No name given. </strong> : <h1> Hi, {name} </h1>}
 </div>,
  document.getElementById('root'),
)

// //Other approach
// const element = name ===''? <strong> No name given. </strong> : <h1> Hi, {name} </h1>;

// ReactDOM.render(
//   element,
//   document.getElementById('root'),
// )


// //other option
// let element;

// if (name ==='') {
//   element = <strong>No name given.</strong>;
// } else {
//   element = <h1>Hi, {name} </h1>;
// }

// ReactDOM.render(
//   element,
//   document.getElementById('root'),
// )



////Long option
// if(name ===''){
//   ReactDOM.render(
//       <strong>No name given.</strong>,
//       document.getElementById('root'),
// );
// } else {
//   ReactDOM.render(
//     <h1>Hi, {name} </h1>,
//     document.getElementById('root'),
// );
//}

