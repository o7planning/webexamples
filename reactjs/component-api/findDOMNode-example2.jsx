// A New Tag: <Fruit fruitName="Apple" />
class Fruit  extends React.Component {
  render() {
    return (
       <li>{this.props.fruitName}</li>
    );
  }
}

class Fruits extends React.Component {

  doFind()  {
     // Find root Node of this Component
     var element = document.getElementById(<Fruit/>);  
     var node= ReactDOM.findDOMNode(element);
     node.style.border = "1px solid red";
  }
  render() {
    return (
      <ul>
          <Fruit fruitName="Apple" />
          <Fruit fruitName="Apricot" />
          <Fruit fruitName="Banana" />
          <li>
            <button onClick={() => this.doFind()}>Find DOM Node</button>
          </li>
      </ul>
    );
  }
}

// Render
ReactDOM.render(<Fruits />, document.getElementById("fruits1"));
