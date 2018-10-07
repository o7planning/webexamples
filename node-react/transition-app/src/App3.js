import React, { Component } from "react";
import logo from "./logo.svg";
import "./App3.css";

import {
  TransitionGroup,
  CSSTransition,
  Transition
} from "react-transition-group";

class App extends React.Component {
  render() {
    return (
      <div>
        <MyComponent />
      </div>
    );
  }
}

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stateOfIn: false,
      message: ""
    };
  }

  // Begin Enter: Do anything!
  onEnterHandler() {
    console.log("Begin Enter");
    this.setState({ message: "Begin Enter..." });
  }

  onEnteringHandler() {
    console.log("Entering... (Wait timeout!)");
    this.setState({ message: "Entering... (Wait timeout!)" });
  }

  onEnteredHandler() {
    console.log("OK Entered!");
    this.setState({ message: "OK Entered!" });
  }

  // Begin Exit: Do anything!
  onExitHandler() {
    console.log("Begin Exit");
    this.setState({ message: "Begin Exit..." });
  }

  onExitingHandler() {
    console.log("Exiting... (Wait timeout!)");
    this.setState({ message: "Exiting... (Wait timeout!)" });
  }

  onExitedHandler() {
    console.log("OK Exited!");
    this.setState({ message: "OK Exited!" });
  }

  render() {
    return (
      <div>
        <h3>&lt;Transition in={"{this.state.stateOfIn}"} &gt;</h3>

        <b>{"\u2728"} Click the buttons and see the effects:</b>
        <ul>
          <li className="my-highlight">
            Now 'in' = {String(this.state.stateOfIn)}
          </li>
          <li> false --&gt; true (Enter)</li>
          <li> true --&gt; false (Exit)</li>
        </ul>
        <div className="my-highlight">{this.state.message}</div>

        <br />

        <input
          type="text"
          onFocus={() => {
            this.setState({ stateOfIn: true });
          }}
          onBlur={() => {
            this.setState({ stateOfIn: false });
          }}
        />
        <br />

        <Transition
          in={this.state.stateOfIn}

          unmountOnExit

          timeout={{ enter: 1500, exit: 2500 }}
          onEnter={() => this.onEnterHandler()}
          onEntering={() => this.onEnteringHandler()}
          onEntered={() => this.onEnteredHandler()}
          onExit={() => this.onExitHandler()}
          onExiting={() => this.onExitingHandler()}
          onExited={() => this.onExitedHandler()}
        >
          {stateName => {
            // stateName: 'entering', 'enterd', 'exiting', 'exited'
            switch (stateName) {

              case "entering":
                return (
                  <b className="my-msg-entering">
                    ⭐ Note: User name 2-20 characters
                  </b>
                );
              case "entered":
                return (
                  <b className="my-msg-entered">
                    ⭐ Note: User name 2-20 characters
                  </b>
                );
              case "exiting":
                return <div>(User Name)</div>;
              case "exited":
                return <b>(User Name)</b>;
              default:
                return <div>??</div>;
            }
          }}
        </Transition>
      </div>
    );
  }
}

export default App;
