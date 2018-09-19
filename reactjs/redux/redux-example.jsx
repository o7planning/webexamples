
// REACT COMPONENT
// Generally you would spilt this up into logical components
// and pass props around correctly etc but we are keeping it as simply as possible
class ListTable extends React.Component {
  constructor (props, context) {
    // We use the constructor to make sure our eventHandlers know of `this`
    // Otherwise they will inherit the normal event arguments
    super(props, context);
    this.addProduct = this.addProduct.bind(this);
    this.removeProduct = this.removeProduct.bind(this);
    this.editProduct = this.editProduct.bind(this);
  }

  /* EVENT HANDLERS */
  // They are responsible for calling `dispatch` which will send events to redux
  addProduct () {
    var action = {
        type: 'ADD_PRODUCT'
    };
    this.props.dispatch(action);
  }

  removeProduct (productId) {
    var action = {
      type: 'REMOVE_PRODUCT',
      productId: productId
    };
    this.props.dispatch(action);
  }

  editProduct (productId, event)  {
    var newValue =  event.target.value;
    var action = {
      type: 'EDIT_PRODUCT',
      data: {
        productId: productId,
        productName: newValue
      }
    };
    this.props.dispatch(action);
  }


  render () {
    const items = this.props.items;

    // Example item: { productId : 4 , productName :'Profit' }
    var trList = items.map( (item, index) => {
      return (<tr key={item.productId}>
        <td>{item.productId}</td>
        <td><input type="text" onChange={this.editProduct.bind(null, item.productId)} value={item.productName} /></td>
        <td>
          <button onClick={this.removeProduct.bind(null, item.productId)}>
             Delete
          </button>
        </td>
      </tr>);
    });


    return (<div>
      <table border="1">
        <thead>
           <th>ID</th>
           <th>Product Name</th>
           <th>Remove</th>
        </thead>
        <tbody>
          {trList}
        </tbody>
      </table>
      <br/>
      <button onClick={this.addProduct}>
          Create
      </button>
    </div>);
  }
}

var nextProductId = 5;

// MAP STATE TO PROPS
// Probably the most important method of the demo which handles the React/Redux integration.
// When state changes, this method is called, which then you can use to customly
// map the state into props that your React component can use
const mapStateToProps = (state) => {
  return {
    items: state.items,
  }
}

// Example item: { productId : 4 , productName :'Profit' }
const getIndexById = (items, productId)  => {
    for(var i = 0; i < items.length; i++) {
       var item = items[i];
       if(item.productId === productId) {
         return i;
       }
    }
    return -1;
};



// REDUCERS
// Reducers listen for actions that are dispatched and react depending on your logic
// All state in Redux is immutable(never changes) so we always have to return a new
// state object.
// We are going to copy the current state and return a new one based off the action creators above
const appReducer = (state = {items: []}, action) => {

  // Clone Array.
  let items = state.items.slice();
  // This is quite a common way of deciding which event to process
  // Note: ALL events will be coming through this reducer
  console.log('Actions', action); // Open your console to see what actions look like

  // Even better, install Redux DevTools and your mind will be blown
  switch (action.type) {
    case 'ADD_PRODUCT':
      nextProductId++;
      var item = {productId : nextProductId, productName: "" };
      items.push(item) // Add an extra element to items
      break;
    case 'REMOVE_PRODUCT':
      var idx = getIndexById(items, action.productId);
      if(idx != -1)  {
        items.splice(idx, 1); // Removes element at `idx`
      }
      break;
    case 'EDIT_PRODUCT':
      var idx = getIndexById(items, action.data.productId);
      if(idx != -1)  {
          items[idx].productName = action.data.productName;
      }
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

// REDUX STORE
// Create store initializes our Redux store and only has to be called once
// The first argument is our `appReducer` defined above, it is almost like a listener
// The second is just our initial state which is just a Javascript object
// The third is usually where enhancers/middleware goes
// In this example it just loads Redux DevTools so everyone can play around
let store = Redux.createStore(appReducer, {
  items: [
    { productId : 1 , productName :'React' },
    { productId : 2 , productName :'Redux' },
    { productId : 3 , productName :'?????' },
    { productId : 4 , productName :'Profit' }
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
