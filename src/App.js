//There are some notations for eslint that lets you ignore some things
// this ignores the no declaration of the react libraries
// ->> /*global React ReactDOM*/

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement(
    "div", //this is the html label to create
    {}, //this is an empty object. here we can define attributes and pass it to the element like {id : "my-brand"}
    [
      React.createElement("h1", {}, "Adopt Me!"), //optionally passing additional content to the div. We can pass a String too
      React.createElement(Pet, {
        name: "sasdsadadsa",
        animal: "dadsasdasdasd",
        breed: "sadasdasd",
      }),
      React.createElement(Pet, {
        name: "q123123",
        animal: "x123123",
        breed: "s123123213",
      }),
      React.createElement(Pet, {
        name: "edf23fds",
        animal: "4e234fwdf",
        breed: "w3234fwef2",
      }),
    ]
  );
};

// Below ReactDOM will render the component. In this case root is the div id that we choose.
ReactDOM.render(React.createElement(App), document.getElementById("root"));
