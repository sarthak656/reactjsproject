import React from 'react';    
 import ReactDOM from 'react-dom/client';

  //JSX-it is html like syntax 
  const jsxheading = (<h1 className='head'>sarthak</h1>) ;  //React Element
  var a = 12;

const NewHeading = () => (
 <div>lets hack</div>
)
    const HeadingComponent = () => (    //React Functional component
         <div id="container">
       <h1>Welcome</h1>
       <NewHeading />  
       {a}
       </div>
    );

    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(<HeadingComponent />);   //rendering normal functional component