
class Welcome extends React.Component {

  render() {
    return (
      <div className="welcome">
         <h3>Hi {this.props.name}!</h3>
         <i>{this.props.message}</i>
      </div>
      );
    }
}
// Default values of props
Welcome.defaultProps = {
   name: "There",
   message:"Welcome to Website!"
}

const element1 = document.getElementById('welcome1')
const element2 = document.getElementById('welcome2')


ReactDOM.render(
    <Welcome name='Tran' message='Welcome back!' />,
    element1
)

ReactDOM.render(
    <Welcome />,
    element2
)
