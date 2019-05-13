console.log("component #1 coming online");

const MyHello = (props) => {
  const {name} = props;

  return (
    <h2>Hello there: {name}</h2>
  );
};

ReactDOM.render(<MyHello name="Component 1"/>, document.getElementById('component1-app'));
