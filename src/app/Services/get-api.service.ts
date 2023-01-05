import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
/// Rapidapi getCountries
export interface IgetCountries {
  get: string;
  paramaters: [];
  errors: [];
  resulsts: number;
  response: [];
}
/// Rapidapi getStatistics
export interface IgetStatistics {
  get: string;
  paramaters: [];
  errors: [];
  resulsts: number;
  response: IgetStatisticsResponse[];
}
export interface IgetStatisticsResponse {
  cases: IStatisticsCases;
  continent: string;
  country: string;
  day: Date;
  deaths: IStatisticsdeaths;
  population: number;
  tests: IStatisticsTests;
  time: Date;
}
export interface IStatisticsCases {
  M_Pop: string,
  active: number,
  critical: number,
  new: string,
  recovered: number,
  total: number;
}
export interface IStatisticsdeaths {
  M_pop: string;
  new: string;
  total: number;
}
export interface IStatisticsTests {
  M_pop: string,
  total: number;
}
@Injectable({
  providedIn: 'root'
})
export class GetAPIService {
  url: string = "https://covid-193.p.rapidapi.com";
  header: HttpHeaders = new HttpHeaders({
    "X-RapidAPI-Key": "Your rapidapi key",
    "X-RapidAPI-Host": "Your rapidapi host",
  });
  constructor (private http: HttpClient) { }
  getCountries() {
    return this.http.get<IgetCountries>(this.url + '/countries', { headers: this.header, observe: 'body', responseType: 'json' });
  }
  getStatistics() {
    return this.http.get<IgetStatistics>(this.url + '/statistics', { headers: this.header, observe: 'body', responseType: 'json' });
  }
}
