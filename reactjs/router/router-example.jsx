// import {BrowserRouter,NavLink} from 'react-router-dom';
// const { BrowserRouter, NavLink, Route } = ReactRouterDOM;


// Component
class ProductShortInfo extends React.Component {
  render() {
    return (
      <div className="product">
         <h3>Samsung Galaxy S9</h3>
         <p>Price: $900</p>
      </div>
    );
  }
}

// Component
class ProductFeature extends React.Component {
  render() {
    return <h3>Something about this Product!</h3>;
  }
}

// Component
class ProductImages extends React.Component {
  render() {
    return <h3>Some Images of this Product</h3>;
  }
}

// Component
class ProductComments extends React.Component {
  render() {
    return <h3>Some Customer Comments {match}</h3>;
  }
}


//
class Product extends React.Component {
  render() {
    return (
      <div id="dashboard">
        <ProductShortInfo/>
        <div className="menu">
          <ReactRouterDOM.NavLink  exact to="/" activeClassName="selected">
             Feature
          </ReactRouterDOM.NavLink>

          <ReactRouterDOM.NavLink  exact to="/automation" activeClassName="selected">
             Images
          </ReactRouterDOM.NavLink>

          <ReactRouterDOM.NavLink  exact to="/marketing" activeClassName="selected">
             Comments
          </ReactRouterDOM.NavLink>

        </div>
        <div className="router-display-area">
        
          <ReactRouterDOM.Route exact  path="/" component={ProductFeature} />
          <ReactRouterDOM.Route exact  path="/marketing" component={ProductComments} />
          <ReactRouterDOM.Route exact  path="/automation" component={ProductImages} />
        </div>
      </div>
    );
  }
}
//
class App extends React.Component {
  render() {
    return (
      <ReactRouterDOM.BrowserRouter>
        <Product />
      </ReactRouterDOM.BrowserRouter>
    );
  }
}

// Render
ReactDOM.render(<App />, document.querySelector("#app"));
