console.log("component #1 coming online");

var component1AddDiv = document.createElement("div");
component1AddDiv.id = "component1-app";
component1AddDiv.innerHTML = "Hello There from Component 1";

document.getElementById("insertion").appendChild(component1AddDiv);

const MyHello = (props) => {
  const {name} = props;

  return (
    <h2>Hello there: {name}</h2>
  );
};

ReactDOM.render(<MyHello name="brad"/>, document.getElementById('component1-app'));
