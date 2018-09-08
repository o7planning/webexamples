//
class App extends React.Component {


  render() {
    return (
       <div>App</div>
    );
  }
}

//
class CreateApp extends React.Component {


  render() {
    return (
       <div>CreateApp</div>
    );
  }
}

//
class CreateApp2 extends React.Component {


  render() {
    return (
       <div>CreateApp2</div>
    );
  }
}



var routes = (
   <ReactRouter.BrowserRouter>
      <ReactRouter.Route name="app" path="/" component={App}/>
      <ReactRouter.Route name="app" path="author" component={CreateApp}/>
      <ReactRouter.Route name="app" path="author2" component={CreateApp2}/>
  </ReactRouter.BrowserRouter>
);

var hashHistory = ReactRouter.hashHistory;

ReactDOM.render(
  <ReactRouter.BrowserRouter>  <ReactRouter.Router history={hashHistory}>{routes}</ReactRouter.Router></ReactRouter.BrowserRouter>,
    document.getElementById('router1')
);
