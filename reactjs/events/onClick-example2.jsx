class CurrentTime extends React.Component {
  constructor(props) {
    super(props);

    var now = new Date();
    this.state = {
      currentTime: now.toString()
    };
  }

  // A method of this Component
  refreshCurrentTime(event) { 
    var now = new Date();
    this.setState({ currentTime: now.toString() });
  }
  render() {
    return (
      <div>
        <h4>Current Time:</h4>
        <p>{this.state.currentTime}</p>
        <button onClick={this.refreshCurrentTime.bind(this,event)}>
          Refresh Current Time
        </button>
      </div>
    );
  }
}

// Render
ReactDOM.render(<CurrentTime />, document.getElementById("currenttime1"));
