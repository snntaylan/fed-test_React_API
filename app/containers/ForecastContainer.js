var React = require("react");
var Forecast = require("../components/Forecast");
var openWeatherHelpers = require("../utils/openWeatherHelpers");

var ForecastContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      isLoading: true,
      forecast: ""
    };
  },
  handleClick: function(weather) {
    this.context.router.push({
      pathname: "/detail/" + this.props.routeParams.city,
      state: {
        weather: weather
      }
    });
  },

  componentDidMount: function() {
    openWeatherHelpers.getFiveDayForecast(this.props.params.city).then(
      function(forecast) {
        console.log(JSON.stringify(forecast));
        this.setState({
          forecast: forecast,
          isLoading: false
        });
      }.bind(this)
    );
  },
  render: function() {
    return (
      <div>
        <Forecast
          isLoading={this.state.isLoading}
          forecast={this.state.forecast}
          handleClick={this.handleClick}
        />
      </div>
    );
  }
});

module.exports = ForecastContainer;
