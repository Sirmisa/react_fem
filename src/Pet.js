import React from "react";

// const Pet = (props) => {
//     return React.createElement("div", { id: "blah"}, [
//       React.createElement("h2", {}, props.name),
//       React.createElement("h2", {}, props.animal),
//       React.createElement("h2", {}, props.breed),
//     ]);
//   };

//This is the equivalent of the above component but in JSX
const Pet = (props) => {
  return (
    <div id="blah">
      <h2>{props.name}</h2>
      <h2>{props.animal}</h2>
      <h3>{props.breed}</h3>
    </div>
  )
}

  export default Pet;