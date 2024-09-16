
const parent = React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"},[React.createElement("h1",{id:"h1"},"h1tag"),React.createElement("h2",{id:"h2"},"h2 tag dude")]))
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
