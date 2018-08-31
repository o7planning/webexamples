
class Person extends React.Component {

  render() {
      var h3Element = React.createElement("h3", null, 'Person ' + this.props.personNo);

      var ulElement = React.createElement("ul", null, [
          React.createElement("li", null, "First Name: " + this.props.firstName),
          React.createElement("li", null, "Last Name: " + this.props.lastName)
        ]
      );

      var e = React.createElement("div", {class: 'person-info'}, [
            h3Element, ulElement
      ]);
      return e;
    }
}

const element1 = document.getElementById('person1')
const element2 = document.getElementById('person2')

// Use the ReactDOM.render to show your component on the browser
ReactDOM.render(
    React.createElement(Person, {personNo: 1, firstName:'Bill', lastName: 'Gates'}, null),
    element1
)

ReactDOM.render(
    React.createElement(Person, {personNo: 2, firstName:'Donald', lastName: 'Trump'}, null),
    element2
)
