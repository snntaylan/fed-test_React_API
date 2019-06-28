var React = require("react");
var GetWeather = require("../components/GetWeather");
var PropTypes = React.PropTypes;

var GetWeatherContainer = React.createClass({
  contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getDefaultProps: function() {
    return {
      direction: "column"
    };
  },
  propTypes: {
    direction: PropTypes.string
  },
  getInitialState: function() {
    return {
      location: ""
    };
  },
  handleSubmitLocation: function() {
    this.context.router.push("/forecast/" + this.state.location);
    // openWeatherHelpers.getCurrentWeather(this.state.location)
    //   .then(function(weather){
    //     console.log(weather);
    //     debugger
    //   })
  },
  handleUpdateLocation: function(e) {
    console.log("handleUpdateLocation");
    this.setState({
      location: e.target.value
    });
  },
  render: function() {
    return (
      <GetWeather
        location={this.state.location}
        direction={this.props.direction}
        onSubmitLocation={this.handleSubmitLocation}
        onUpdateLocation={this.handleUpdateLocation}
      />
    );
  }
});

// GetWeather.propTypes = {
//   direction: PropTypes.string,
// }

module.exports = GetWeatherContainer;
