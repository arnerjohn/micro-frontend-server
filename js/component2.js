console.log("component #2 coming online");

var component2AddDiv = document.createElement("div");
component2AddDiv.id = "component2-app";
component2AddDiv.innerHTML = "Hello There from Component 2";

document.getElementById("insertion").appendChild(component2AddDiv);

const AnotherComp = (props) => {
  return (
    <ul>
      {[1,2,3].map((i) => (<li key={i}>Index: {i}</li>))}
    </ul>
  );
};

ReactDOM.render(<AnotherComp />, document.getElementById('component2-app'));
