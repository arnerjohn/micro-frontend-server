console.log("component #2 coming online");

const AListItem = (props) => (
  <li>Index: {props.value}</li>
);

const AnotherComp = (props) => {
  return (
    <div style={{borderStyle: 'dotted', padding: '10px'}}>
      <p>Component2.js</p>
      <ul>
        {[1,2,3].map((i) => (<AListItem key={i} value={i} />))}
      </ul>
    </div>
  );
};

ReactDOM.render(<AnotherComp />, document.getElementById('component2-app'));
