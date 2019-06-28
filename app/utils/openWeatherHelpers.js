var axios = require("axios");

var public_key = "c58172ee6b3cb9558c6ac7060b0bf36c";

function getCurrentWeather(city) {
  var url =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&type=accurate&APPID=";
  return axios.get(url + public_key);
}

function getFiveDayForecast(city) {
  var url =
    "http://api.openweathermap.org/data/2.5/forecast/daily?q=" +
    city +
    "&type=accurate&APPID=";
  return axios.get(url + public_key + "&cnt=5");
}

var helpers = {
  getCurrentWeather: function(city) {
    return getCurrentWeather(city);
  },
  getFiveDayForecast: function(city) {
    return getFiveDayForecast(city);
  }
};

module.exports = helpers;
