// package: weather
// file: src/app/protos/weather.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class GetWeatherForecastsResponse extends jspb.Message {
  clearForecastsList(): void;
  getForecastsList(): Array<WeatherForecast>;
  setForecastsList(value: Array<WeatherForecast>): void;
  addForecasts(value?: WeatherForecast, index?: number): WeatherForecast;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GetWeatherForecastsResponse.AsObject;
  static toObject(includeInstance: boolean, msg: GetWeatherForecastsResponse): GetWeatherForecastsResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GetWeatherForecastsResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GetWeatherForecastsResponse;
  static deserializeBinaryFromReader(message: GetWeatherForecastsResponse, reader: jspb.BinaryReader): GetWeatherForecastsResponse;
}

export namespace GetWeatherForecastsResponse {
  export type AsObject = {
    forecastsList: Array<WeatherForecast.AsObject>,
  }
}

export class WeatherForecast extends jspb.Message {
  hasDate(): boolean;
  clearDate(): void;
  getDate(): google_protobuf_timestamp_pb.Timestamp | undefined;
  setDate(value?: google_protobuf_timestamp_pb.Timestamp): void;

  getTemperaturec(): number;
  setTemperaturec(value: number): void;

  getSummary(): string;
  setSummary(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WeatherForecast.AsObject;
  static toObject(includeInstance: boolean, msg: WeatherForecast): WeatherForecast.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: WeatherForecast, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WeatherForecast;
  static deserializeBinaryFromReader(message: WeatherForecast, reader: jspb.BinaryReader): WeatherForecast;
}

export namespace WeatherForecast {
  export type AsObject = {
    date?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    temperaturec: number,
    summary: string,
  }
}

