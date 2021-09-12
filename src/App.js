//There are some notations for eslint that lets you ignore some things
// this ignores the no declaration of the react libraries
// ->> /*global React ReactDOM*/
//import React from "react";//Once you install Babel, it does not require to import React, it does it for you
import ReactDOM from "react-dom";
import Pet from "./Pet";//eslint was failing because it does not understand react, we have to fix it

//Traditional way to create React components
// const App = () => {
//   return React.createElement(
//     "div", //this is the html label to create
//     {}, //this is an empty object. here we can define attributes and pass it to the element like {id : "my-brand"}
//     [
//       React.createElement("h1", {}, "Adopt Me!"), //optionally passing additional content to the div. We can pass a String too
//       React.createElement(Pet, {
//         name: "sasdsadadsa",
//         animal: "dadsasdasdasd",
//         breed: "sadasdasd",
//       }),
//       React.createElement(Pet, {
//         name: "q123123",
//         animal: "x123123",
//         breed: "s123123213",
//       }),
//       React.createElement(Pet, {
//         name: "edf23fds",
//         animal: "4e234fwdf",
//         breed: "w3234fwef2",
//       }),
//     ]
//   );
// };

//Rewriten in JSX
const App = () => {
  return (
  <div>
    <Pet name="1" animal="1.1" breed="1.2"/>
    <Pet name="2.1" animal="2.2" breed="2.3"/>
    <Pet name="3.1" animal="3.2" breed="3.3"/>
  </div>
  )
};

// Below ReactDOM will render the component. In this case root is the div id that we choose.
//ReactDOM.render(React.createElement(App), document.getElementById("root"));
ReactDOM.render(<App/>, document.getElementById("root"));
