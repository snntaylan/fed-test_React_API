var React = require("react");
var ReactRouter = require("react-router");
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var Main = require("../containers/Main");
var HomeContainer = require("../containers/HomeContainer");
var ForecastContainer = require("../containers/ForecastContainer");
var CityDetailsContainer = require("../containers/CityDetailsContainer");

var routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <IndexRoute component={HomeContainer} />
      <Route path="/forecast/:city" component={ForecastContainer} />
      <Route path="/detail/:city" component={CityDetailsContainer} />
    </Route>
  </Router>
);

module.exports = routes;
