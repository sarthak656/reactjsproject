import React from "react";
import  ReactDOM  from "react-dom/client";

//using React.createElement
// const elem1 = React.createElement("h1",{className: "bgcolors"},"User1");
// const elem2 = React.createElement("h2",{className:"bgcolors"},"User2");
// const elem3 = React.createElement("h3",{className:"bgcolors"},"User3");

//same using JSX
//  const elements = (
//   <div>
//  <h1>User1</h1>
// <h2>User2</h2>
// <h3>User3</h3>
// </div>
//  )

// same using functional component
 const JsxHeadings = () => {
  return <div>
     <h1>User1</h1>
     <h2>User2</h2>
     <h3>User3</h3>
  </div>
 } 
   
 // Pass attributes into the tag in JSX
 //Composition of Component(Add a component inside another)
 const JsxHeadings2 = () =>{
  return (
    <div>
      <div className="bgcolors">welcome home</div> 
      <JsxHeadings />
    </div>
  );
 }

 const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render("div",null,elem1,elem2,elem3);
 //root.render(elements);
 root.render(<JsxHeadings2 />)