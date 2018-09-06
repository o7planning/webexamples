class NumberView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentNumber: 1
    };
  }

  nextValue() {
    this.setState((prevState, props) => {
      return {
        currentNumber: prevState.currentNumber + 1
      };
    });
  }

  shouldComponentUpdate(props, nextState) {
    // Odd Number
    return nextState.currentNumber % 2 == 1;
  }

  render() {
    return (
      <div className="number-view">
        <button onClick={() => this.nextValue()}>Next Value</button>
        <p>Current Value: {this.state.currentNumber}</p>
      </div>
    );
  }
}

// Render
ReactDOM.render(<NumberView />, document.getElementById("numberview1"));
