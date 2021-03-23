// package: weather
// file: src/app/protos/weather.proto

var src_app_protos_weather_pb = require("../generated/weather_pb");
var google_protobuf_empty_pb = require("google-protobuf/google/protobuf/empty_pb");
var grpc = require("@improbable-eng/grpc-web").grpc;

var WeatherForecasts = (function() {
  function WeatherForecasts() {}
  WeatherForecasts.serviceName = "weather.WeatherForecasts";
  return WeatherForecasts;
}());

WeatherForecasts.GetWeatherForecasts = {
  methodName: "GetWeatherForecasts",
  service: WeatherForecasts,
  requestStream: false,
  responseStream: false,
  requestType: google_protobuf_empty_pb.Empty,
  responseType: src_app_protos_weather_pb.GetWeatherForecastsResponse,
};

exports.WeatherForecasts = WeatherForecasts;

function WeatherForecastsClient(serviceHost, options) {
  this.serviceHost = serviceHost;
  this.options = options || {};
}

WeatherForecastsClient.prototype.getWeatherForecasts = function getWeatherForecasts(requestMessage, metadata, callback) {
  if (arguments.length === 2) {
    callback = arguments[1];
  }
  var client = grpc.unary(WeatherForecasts.GetWeatherForecasts, {
    request: requestMessage,
    host: this.serviceHost,
    metadata: metadata,
    transport: this.options.transport,
    debug: this.options.debug,
    onEnd: function(response) {
      if (callback) {
        if (response.status !== grpc.Code.OK) {
          var err = new Error(response.statusMessage);
          err.code = response.status;
          err.metadata = response.trailers;
          callback(err, null);
        } else {
          callback(null, response.message);
        }
      }
    },
  });
  return {
    cancel: function() {
      callback = null;
      client.close();
    },
  };
};

exports.WeatherForecastsClient = WeatherForecastsClient;
