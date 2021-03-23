// source: src/app/protos/weather.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
goog.object.extend(proto, google_protobuf_timestamp_pb);
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');
goog.object.extend(proto, google_protobuf_empty_pb);
goog.exportSymbol('proto.weather.GetWeatherForecastsResponse', null, global);
goog.exportSymbol('proto.weather.WeatherForecast', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.weather.GetWeatherForecastsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.weather.GetWeatherForecastsResponse.repeatedFields_, null);
};
goog.inherits(proto.weather.GetWeatherForecastsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.weather.GetWeatherForecastsResponse.displayName = 'proto.weather.GetWeatherForecastsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.weather.WeatherForecast = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.weather.WeatherForecast, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.weather.WeatherForecast.displayName = 'proto.weather.WeatherForecast';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.weather.GetWeatherForecastsResponse.repeatedFields_ = [1];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.weather.GetWeatherForecastsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.weather.GetWeatherForecastsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.weather.GetWeatherForecastsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weather.GetWeatherForecastsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    forecastsList: jspb.Message.toObjectList(msg.getForecastsList(),
    proto.weather.WeatherForecast.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.weather.GetWeatherForecastsResponse}
 */
proto.weather.GetWeatherForecastsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.weather.GetWeatherForecastsResponse;
  return proto.weather.GetWeatherForecastsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.weather.GetWeatherForecastsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.weather.GetWeatherForecastsResponse}
 */
proto.weather.GetWeatherForecastsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.weather.WeatherForecast;
      reader.readMessage(value,proto.weather.WeatherForecast.deserializeBinaryFromReader);
      msg.addForecasts(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.weather.GetWeatherForecastsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.weather.GetWeatherForecastsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.weather.GetWeatherForecastsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weather.GetWeatherForecastsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getForecastsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.weather.WeatherForecast.serializeBinaryToWriter
    );
  }
};


/**
 * repeated WeatherForecast forecasts = 1;
 * @return {!Array<!proto.weather.WeatherForecast>}
 */
proto.weather.GetWeatherForecastsResponse.prototype.getForecastsList = function() {
  return /** @type{!Array<!proto.weather.WeatherForecast>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.weather.WeatherForecast, 1));
};


/**
 * @param {!Array<!proto.weather.WeatherForecast>} value
 * @return {!proto.weather.GetWeatherForecastsResponse} returns this
*/
proto.weather.GetWeatherForecastsResponse.prototype.setForecastsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.weather.WeatherForecast=} opt_value
 * @param {number=} opt_index
 * @return {!proto.weather.WeatherForecast}
 */
proto.weather.GetWeatherForecastsResponse.prototype.addForecasts = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.weather.WeatherForecast, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.weather.GetWeatherForecastsResponse} returns this
 */
proto.weather.GetWeatherForecastsResponse.prototype.clearForecastsList = function() {
  return this.setForecastsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.weather.WeatherForecast.prototype.toObject = function(opt_includeInstance) {
  return proto.weather.WeatherForecast.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.weather.WeatherForecast} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weather.WeatherForecast.toObject = function(includeInstance, msg) {
  var f, obj = {
    date: (f = msg.getDate()) && google_protobuf_timestamp_pb.Timestamp.toObject(includeInstance, f),
    temperaturec: jspb.Message.getFieldWithDefault(msg, 2, 0),
    summary: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.weather.WeatherForecast}
 */
proto.weather.WeatherForecast.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.weather.WeatherForecast;
  return proto.weather.WeatherForecast.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.weather.WeatherForecast} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.weather.WeatherForecast}
 */
proto.weather.WeatherForecast.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new google_protobuf_timestamp_pb.Timestamp;
      reader.readMessage(value,google_protobuf_timestamp_pb.Timestamp.deserializeBinaryFromReader);
      msg.setDate(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTemperaturec(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setSummary(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.weather.WeatherForecast.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.weather.WeatherForecast.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.weather.WeatherForecast} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.weather.WeatherForecast.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDate();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      google_protobuf_timestamp_pb.Timestamp.serializeBinaryToWriter
    );
  }
  f = message.getTemperaturec();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getSummary();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional google.protobuf.Timestamp date = 1;
 * @return {?proto.google.protobuf.Timestamp}
 */
proto.weather.WeatherForecast.prototype.getDate = function() {
  return /** @type{?proto.google.protobuf.Timestamp} */ (
    jspb.Message.getWrapperField(this, google_protobuf_timestamp_pb.Timestamp, 1));
};


/**
 * @param {?proto.google.protobuf.Timestamp|undefined} value
 * @return {!proto.weather.WeatherForecast} returns this
*/
proto.weather.WeatherForecast.prototype.setDate = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.weather.WeatherForecast} returns this
 */
proto.weather.WeatherForecast.prototype.clearDate = function() {
  return this.setDate(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.weather.WeatherForecast.prototype.hasDate = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 temperatureC = 2;
 * @return {number}
 */
proto.weather.WeatherForecast.prototype.getTemperaturec = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.weather.WeatherForecast} returns this
 */
proto.weather.WeatherForecast.prototype.setTemperaturec = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string summary = 3;
 * @return {string}
 */
proto.weather.WeatherForecast.prototype.getSummary = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.weather.WeatherForecast} returns this
 */
proto.weather.WeatherForecast.prototype.setSummary = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


goog.object.extend(exports, proto.weather);