import { Component, OnInit } from '@angular/core';
import { GetAPIService, IgetCountries, IgetStatistics, IgetStatisticsResponse, } from 'src/app/Services/get-api.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  /// getCountries Part
  selectedDropdownValue :any;
  countriesName:IgetCountries ;
  CountriesNameList:IgetCountries [];
  ///getStatistics Part
  countriesStatistics:IgetStatistics;
  CountriesStatisticsList:IgetStatisticsResponse[];
  ContinentData:any = null;
  PopulationData:any = null;
  TestData:any = null;
  NewData:any = null;
  RecoveredData:any = null;
  CriticalData:any = null;
  DeathsData:any = null;
  TotalDeathsData:any = null;
 
  constructor(private service:GetAPIService) {
    this.getCountriesName();
   }
  ngOnInit(): void {
  }
  ///Dropdown Element Data
  getCountriesName(){
    this.service.getCountries().subscribe(data =>  {
      this.countriesName ={
      get:data.get,
      errors:data.errors,
      paramaters:data.paramaters,
      resulsts:data.resulsts,
      response:data.response}
      this.CountriesNameList = this.countriesName.response;
    });
   }
   /// Dropdowm Change Event
 getCountriesStatistic (){
  this.service.getStatistics().subscribe(data =>  {
    this.countriesStatistics ={
    get:data.get,
    errors:data.errors,
    paramaters:data.paramaters,
    resulsts:data.resulsts,
    response:data.response}
    this.CountriesStatisticsList = this.countriesStatistics.response;
    this.CountriesStatisticsList.forEach(data =>{
      switch (data.country == this.selectedDropdownValue) {
        case true:
          (this.ContinentData = data.continent )?? (this.ContinentData="-");
          (this.PopulationData = data.population)?? (this.PopulationData="-");
          (this.TestData = data.tests.M_pop )?? (this.TestData="-");
          (this.NewData = data.cases.new )?? (this.NewData="-");
          (this.RecoveredData = data.cases.recovered )?? (this.RecoveredData="-");
          (this.CriticalData = data.cases.critical)?? (this.CriticalData="-");
          (this.DeathsData = data.deaths.new )?? (this.DeathsData="-");
          (this.TotalDeathsData = data.deaths.total )?? (this.TotalDeathsData="-");
          break;
      }
    })
  });
 }
}
