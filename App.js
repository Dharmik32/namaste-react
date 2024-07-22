import React from "react";
import ReactDOM from "react-dom/client";

// React Element
// const heading = (
//   <h1 className="head" tabIndex="5">
//     Namaste Recat using JSX
//   </h1>
// );
// console.log("heading", heading);

// React Component
// Class Based Component - OLD
// Functional Component - NEW

// React Functional Component
// This both component HeadingComponent and HeadingComponent2 are same.
// const HeadingComponent = () => {
//   return <h1 className="heading">Namaste React using an function component</h1>
// }

// const HeadingComponent2 = () => <h1 className="heading">Namaste React using an function component</h1>;

const elem = <span>React Element</span>;

const number = 1000;

// Component Compositions
const HeadingComponent = () => {
  return (
    <div id="container">
      <h1 className="heading">
        Namaste React using an function component
      </h1>
    </div>    
  );
};


const title = (
  <h1 className="head" tabIndex="5">
    {elem}
    Namaste Recat using JSX
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(HeadingComponent());
