import {Component, OnInit} from '@angular/core';
import {GetWeatherForecastsResponse, WeatherForecast} from '../../../generated/weather_pb';
import {grpc} from '@improbable-eng/grpc-web';
import {WeatherForecasts} from '../../../generated/weather_pb_service';

import {DataSource} from '@angular/cdk/table';
import {BehaviorSubject, Observable} from 'rxjs';

export interface UserData {
  date: string;
  temperaturec: number;
  summary: string;
}

let exampleData;

@Component({
  selector: 'app-testmodul-testpage',
  templateUrl: './testpage.component.html',
  styleUrls: ['./testpage.component.scss']
})
export class TestmodulTestpageComponent implements OnInit {
  teachers: WeatherForecast.AsObject;
  basicDataSource: BasicDataSource;
  displayedColumns = ['date', 'temperaturec', 'summary'];

  constructor() {
  }

  ngOnInit() {
  }

  testgrpc(): void {


    const getWeatherForecastsReq = new GetWeatherForecastsResponse();

    // @ts-ignore
    grpc.unary(WeatherForecasts.GetWeatherForecasts, {
      request: getWeatherForecastsReq,
      host: 'https://133.125.63.43/grpc', // https://grpcwebdemo.azurewebsites.net (Windows App Service)
      onEnd: res => {
        const {status, statusMessage, headers, message, trailers} = res;
        if (status === grpc.Code.OK && message) {
          const result = message.toObject() as WeatherForecast.AsObject;
          console.log(result);
          this.teachers = result;
          const sf = (this.teachers as any) as object;

          // console.log(sf.forecastsList);

          // @ts-ignore
          exampleData = sf.forecastsList;
          // @ts-ignore
          // for (const entry of sf.forecastsList) {
          //   // new Date(timestamp.getSeconds() * 1000)
          //   exampleData.push(entry);
          //   console.log(new Date(entry.date.second)); // 1, "string", false
          // }
          // console.log((this.teachers as any) as object[]); // 1, "string", false

          this.basicDataSource = new BasicDataSource();
          // result.date.map(country =>
          //   ({
          //     name: country.name,
          //     description: country.description
          //   }) as CountryModel);
        }
      }
    });


  }
}

export class BasicDataSource extends DataSource<UserData> {
  dataChange: BehaviorSubject<UserData[]> = new BehaviorSubject<UserData[]>([]);

  constructor() {
    super();
    this.dataChange.next(exampleData);
  }

  connect(): Observable<UserData[]> {
    return this.dataChange;
  }

  disconnect() {
  }
}
