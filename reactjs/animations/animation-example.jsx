//let CSSTransitionGroup = React.addons.CSSTransitionGroup;
// const CSSTransitionGroup = React.addons.CSSTransitionGroup;

//const CSSTransition = React.addons.CSSTransition;

//const TransitionGroup = React.addons.TransitionGroup;

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {items: ['hello', 'world', 'click', 'me']};
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    const newItems = this.state.items.concat([
      prompt('Enter some text')
    ]);
    this.setState({items: newItems});
  }

  handleRemove(i) {
    let newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({items: newItems});
  }

  render() {
    const items = this.state.items.map((item, i) => (
      <div key={item} onClick={() => this.handleRemove(i)}>
        {item}
      </div>
    ));
 
    return (
      <div>
        <button onClick={this.handleAdd}>Add Item</button>

          <ReactTransitionGroup.TransitionGroup>
    <ReactTransitionGroup.CSSTransition timeout={100} classNames="step">


          {items}
        </ReactTransitionGroup.CSSTransition>
        </ReactTransitionGroup.TransitionGroup>
      </div>
    );
  }
}


ReactDOM.render(<TodoList />, document.getElementById('app'));
