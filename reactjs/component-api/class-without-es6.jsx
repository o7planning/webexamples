function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}



alert("1");
const Greeting = React.createClass ({
  render: function() {
    return <h1>Hello, {this.props.name}</h1>;
  }

});

alert("2");

ReactDOM.render(
    <Greeting name='Tran' />, document.getElementById("greeting1")
)
