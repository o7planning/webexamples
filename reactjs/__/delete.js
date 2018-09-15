
class SimpleForm extends React.Component {

constructor(props)  {
  super(props);

  this.state = {
     fullName  : ""
  };
}

  handleSubmitForm(event)  {
     alert('Full Name: ' + this.state.fullName);
     event.preventDefault();
  }

  handleInputChange(event)  {
      var value= event.target.value;

      this.setState({
         fullName: value
      });
  }


  render() {
    return (
      <form onSubmit={(event) => this.handleSubmitForm(event)}>
        <label>
          Full Name:
          <input type="text" value={this.state.fullName}
                onChange={(event) => this.handleInputChange(event)} />
        </label>
        <div>{this.state.fullName}</div>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}


// Render
ReactDOM.render(<SimpleForm />, document.getElementById("form1"));
