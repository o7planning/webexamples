class Employe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: false,
      empId: "[empId]",
      fullName: "[fullName]"
    };
  }

  // Load data from Server..
  loadEmployeeData() {
    setTimeout(() => {
      console.log("Data is loaded");
      this.setState({
        loaded: true,
        empId: this.props.empId,
        fullName: "Emp " + Math.random()
      });
    }, 1000);
  }

  componentDidMount() {
    this.loadEmployeeData();
  }

  render() {
    if (this.state.loaded == true) {
      return (
        <div className="employee">
          <p>Emp Id: {this.state.empId}</p>
          <p>Full Name: {this.state.fullName}</p>
        </div>
      );
    } else {
      return (
        <div className="employee">
          <p>
            Wait while data loading. EmpID: {this.props.empId}
          </p>
        </div>
      );
    }
  }
}

// Render
ReactDOM.render(<Employe empId="1" />, document.getElementById("employee1"));
