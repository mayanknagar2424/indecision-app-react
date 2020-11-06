import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

// const Layout = (props) => {
//     return (
//         <div>
//         <p>header</p>
//         {props.content}
//         <p>footer</p>
//         </div>
//     );
// };

// //JSX
// const temp = (
//     <div>
//         <h1>This is going to inject</h1>
//         <p>This is generic paragraph</p>
//     </div>
// );

//ReactDOM.render(<Layout content={temp} />, document.getElementById('app'));
//ReactDOM.render(<Layout><p>This is inline </p></Layout>, document.getElementById('app'));

// //old systext before plugin: transform-class-properties 
// class OldSyntex{
//     constructor(){
//         this.name='John';
//     }
// }
// const oldSyntex = new OldSyntex();
// console.log(oldSyntex);

// //New systext before plugin: transform-class-properties
// class NewSyntex{
//     name = 'Sam';
// }
// const newSyntex = new NewSyntex();
// console.log(newSyntex);
