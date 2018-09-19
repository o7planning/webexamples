
/* REACT COMPONENT */
// Generally you would spilt this up into logical components
// and pass props around correctly etc but we are keeping it as simply as possible
class ListTable extends React.Component {
  constructor (props, context) {
    // We use the constructor to make sure our eventHandlers know of `this`
    // Otherwise they will inherit the normal event arguments
    super(props, context);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.editItem = this.editItem.bind(this);
  }

  /* EVENT HANDLERS */
  // They are responsible for calling `dispatch` which will send events to redux
  addItem () {
    var action = {
        type: 'ADD_ITEM'
    };
    this.props.dispatch(action);
  }

  removeItem (index) {
    var action = {
      type: 'REMOVE_ITEM',
      index: index // Index is the list item row index
    };
    this.props.dispatch(action);
  }

  editItem (index, event)  {
    var newValue =  event.target.value;
    var action = {
      type: 'EDIT_ITEM',
      data: {
        index: index, // Index is the list item row index
        value: newValue // Send the new value after keyboard input
      }
    };
    this.props.dispatch(action);
  }


  render () {
    const items = this.props.items;
    const addItem = this.props.addItem;

    var trList = items.map( (item, index) =>{
      return (<tr key={index}>
        <td><input onChange={this.editItem.bind(null, index)} type="text" value={item} /></td>
        <td>
          <button onClick={this.removeItem.bind(null, index)}>
             Delete
          </button>
        </td>
      </tr>);
    });


    return (<div>
      <table border="0">
        <tbody>
          {trList}
        </tbody>
      </table>
      <button onClick={this.addItem}>
          Create
      </button>
    </div>);
  }
}


/* MAP STATE TO PROPS */
// Probably the most important method of the demo which handles the React/Redux integration.
// When state changes, this method is called, which then you can use to customly
// map the state into props that your React component can use
const mapStateToProps = (state) => {
  return {
    items: state.items,
  }
}

 

/* REDUCERS */
// Reducers listen for actions that are dispatched and react depending on your logic
// All state in Redux is immutable(never changes) so we always have to return a new
// state object.
// We are going to copy the current state and return a new one based off the action creators above
const appReducer = (state = {items: []}, action) => {

  let items = state.items.slice(); // Nice hack to truely clone an array without reference
  // This is quite a common way of deciding which event to process
  // Note: ALL events will be coming through this reducer
  console.log('Actions', action); // Open your console to see what actions look like
  // Even better, install Redux DevTools and your mind will be blown
  switch (action.type) {
    case 'ADD_ITEM':
      items.push('') // Add an extra element to items
      break;
    case 'REMOVE_ITEM':
      items.splice(action.index, 1); // Removes element at `index`
      break;
    case 'EDIT_ITEM':
      items[action.data.index] = action.data.value; // Change value of `index` to new value
      break;
  }
  // As above, we have to return a new state object each time (Redux store is immutable)
  // It makes sure we know our data can only be modified in one visible way
  // Also lets us time travel through our application state!
  const newState = {
    items: items,
  }
  console.log('Current State', newState);
  return newState;
}

/* REDUX STORE */
// Create store initializes our Redux store and only has to be called once
// The first argument is our `appReducer` defined above, it is almost like a listener
// The second is just our initial state which is just a Javascript object
// The third is usually where enhancers/middleware goes
// In this example it just loads Redux DevTools so everyone can play around
let store = Redux.createStore(appReducer, {
  items: [
    'React',
    'Redux',
    '?????',
    'Profit'
  ]
}, window.devToolsExtension ? window.devToolsExtension() : undefined)

// We want to use Redux connect to attach our mapStateToProps to our ListTable (React Component)
const ListApp = ReactRedux.connect(
  mapStateToProps
)(ListTable)

// ReactDOM simply renders our component to the page
// Though we've wrapped our component with something called `Providor`
// `Providor` is a magic react-redux component which lets our store be
// accessible by our mapStateToProps methods. Otherwise we would have
// to pass it manually every time
ReactDOM.render(
  <ReactRedux.Provider store={store}>
    <ListApp />
  </ReactRedux.Provider>,
  document.getElementById('app')
);


if (window.devToolsExtension) {
  window.devToolsExtension.open();
}
