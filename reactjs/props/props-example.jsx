// Create a ES6 class component
class Greeting extends React.Component {
  // Use the render function to return JSX component
  render() {
    return (
      <div className="greeting">
         <h3>Hello {this.props.fullName}</h3>
      </div>
      );
    }
}

const element1 = document.getElementById('greeting1')

// Use the ReactDOM.render to show your component on the browser
ReactDOM.render(
    <Greeting fullName='Tran' />,
    element1
)
