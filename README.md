# React Documentation

## Table of contents

- https://btholt.github.io/complete-intro-to-react-v6/
- https://github.com/btholt/complete-intro-to-react-v6

## Notes

- React requires react and react-dom to run
- React needs a div at the index.html file to be anchored to. Usually it is called root
- React components are created on their own file
- ReactDOM.render(micomponent, document.getElementById("theidwheretorender")) it is needed to link the component to render with the div that will render the component
- When there are multiple children in a list, each one should have a unique "key" prop
- In react the data flows only in one way. From parents to children and not the other way around. Is not possible for a child to pass info to its parent.
- You never modify package-lock.json manually. It is always going to be updated by npm
- Prettier needs a .prettierrc which is the configuration file for prettier
- ESlint gives you advice about some good practices when coding

## Tools

| Name           | Where to find it      |
| -------------- | --------------------- |
| Material Icons | VS plugin marketplace |

| unpkg is a fast, global content delivery network for everything on npm.
Use it to quickly and easily load any file from any package using a URL like: unpkg.com/:package@:version/:file | https://unpkg.com |
| Prettier https://github.com/prettier/prettier | Lets you format your code and provides good practices |
| Prettier | As a VScode extension |
| ESlint | As a VScode extension |

## Shortcuts

| Shortcut                                     | Action                                          |
| -------------------------------------------- | ----------------------------------------------- |
| html:5                                       | Creates a basic html template                   |
| npm init                                     | Adds the basic structure that is a package.json |
| npm install -D prettier                      | To install prettier as a DEV dependency         |
| npm install -D eslint eslint-config-prettier | To install eslint as dev dependency             |
