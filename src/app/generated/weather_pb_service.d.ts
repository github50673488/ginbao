// package: weather
// file: src/app/protos/weather.proto

import * as src_app_protos_weather_pb from '../generated/weather_pb';
import * as google_protobuf_empty_pb from 'google-protobuf/google/protobuf/empty_pb';
import {grpc} from '@improbable-eng/grpc-web';

interface WeatherForecastsGetWeatherForecasts {
  readonly methodName: string;
  readonly service: typeof WeatherForecasts;
  readonly requestStream: false;
  readonly responseStream: false;
  readonly requestType: typeof google_protobuf_empty_pb.Empty;
  readonly responseType: typeof src_app_protos_weather_pb.GetWeatherForecastsResponse;
}

export class WeatherForecasts {
  static readonly serviceName: string;
  static readonly GetWeatherForecasts: WeatherForecastsGetWeatherForecasts;
}

export interface ServiceError {
  message: string;
  code: number;
  metadata: grpc.Metadata;
}

export interface Status {
  details: string;
  code: number;
  metadata: grpc.Metadata;
}

interface UnaryResponse {
  cancel(): void;
}

interface ResponseStream<T> {
  cancel(): void;

  on(type: 'data', handler: (message: T) => void): ResponseStream<T>;

  on(type: 'end', handler: (status?: Status) => void): ResponseStream<T>;

  on(type: 'status', handler: (status: Status) => void): ResponseStream<T>;
}

interface RequestStream<T> {
  write(message: T): RequestStream<T>;

  end(): void;

  cancel(): void;

  on(type: 'end', handler: (status?: Status) => void): RequestStream<T>;

  on(type: 'status', handler: (status: Status) => void): RequestStream<T>;
}

interface BidirectionalStream<ReqT, ResT> {
  write(message: ReqT): BidirectionalStream<ReqT, ResT>;

  end(): void;

  cancel(): void;

  on(type: 'data', handler: (message: ResT) => void): BidirectionalStream<ReqT, ResT>;

  on(type: 'end', handler: (status?: Status) => void): BidirectionalStream<ReqT, ResT>;

  on(type: 'status', handler: (status: Status) => void): BidirectionalStream<ReqT, ResT>;
}

export class WeatherForecastsClient {
  readonly serviceHost: string;

  constructor(serviceHost: string, options?: grpc.RpcOptions);

  getWeatherForecasts(
    requestMessage: google_protobuf_empty_pb.Empty,
    metadata: grpc.Metadata,
    callback: (error: ServiceError | null, responseMessage: src_app_protos_weather_pb.GetWeatherForecastsResponse | null) => void
  ): UnaryResponse;
  getWeatherForecasts(
    requestMessage: google_protobuf_empty_pb.Empty,
    callback: (error: ServiceError | null, responseMessage: src_app_protos_weather_pb.GetWeatherForecastsResponse | null) => void
  ): UnaryResponse;
}

