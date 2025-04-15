import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map,Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NbaService {

  constructor(private httpclient :HttpClient) { }


  getplayer():Observable<any>
  {
    //return this.httpclient.get('https://www.balldontlie.io/api/v1/players').pipe(
      return this.httpclient.get('https://localhost:7258/api/Categories').pipe(

      
      map((response: any) => {
        return response.data;
      })
    );

   
    }
    getTeams(): Observable<any> {
      //return this.httpclient.get('https://www.balldontlie.io/api/v1/teams').pipe(
        return this.httpclient.get('https://localhost:7258/api/EmployeeMaster').pipe(

        

        map((response: any) => {
          return response.data;
         // console.log(data);

        })
      );
    }
  
}
