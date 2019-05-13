console.log("component #3 coming online");

const Comp3Thing = (props) => {
  return (
    <div style={{borderStyle: 'solid', borderColor: 'red', padding: '10px'}}>
      <h3>Component 3 Thing</h3>
    </div>
  );
};

ReactDOM.render(<Comp3Thing />, document.getElementById('component3-app'));
