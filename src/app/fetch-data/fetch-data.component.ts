import { Component, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {

  public tableInfo: TableInformation[] = [
    { service: 'WPF C# Project', description: 'A fully desktop application for your buisness.' },
    { service: 'Matlab', description: 'Only for Matlab license owners (includes mathematics solutions).' },
    { service: 'Angular', description: 'Web application.' },
    { service: 'Python Scripts', description: 'Scripts for all uses.' },
    { service: 'Games for children', description: 'Educational mind games.' }
  ];

  //public forecasts: WeatherForecast[];

  //constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
  //  http.get<WeatherForecast[]>(baseUrl + 'weatherforecast').subscribe(result => {
  //    this.forecasts = result;
  //  }, error => console.error(error));
  //}

}
interface TableInformation {
  service: string;
  description: string;
}
