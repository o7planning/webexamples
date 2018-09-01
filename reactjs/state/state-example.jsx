// Create a ES6 class component
class Button extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "Please Click me!",
      clickCount: 0
    };
  }
  // Method updateCount()
  updateCount() {
    this.setState((prevState, props) => {
      return {
        clickCount: prevState.clickCount + 1,
        text: "Clicked"
      };
    });
  }

  render() {
    return (
      <button onClick={() => this.updateCount()}>
        {this.state.text} : {this.state.clickCount}
      </button>
    );
  }
}

// Render
ReactDOM.render(<Button />, document.getElementById("button1"));

// Render
ReactDOM.render(<Button />, document.getElementById("button2"));
