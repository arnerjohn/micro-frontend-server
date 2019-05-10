console.log("component #3 coming online");

var component3AddDiv = document.createElement("div");
component3AddDiv.id = "component3-app";
component3AddDiv.innerHTML = "Hello There from Component 3";

document.getElementById("insertion").appendChild(component3AddDiv);

const Comp3Thing = (props) => {
  return (
    <h3>Component 3 Thing</h3>
  );
};

ReactDOM.render(<Comp3Thing />, document.getElementById('component3-app'));
