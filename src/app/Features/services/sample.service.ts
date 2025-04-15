import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { category } from '../../models/category.model';
import { environment } from '../../../environments/environment.development';
import { constant } from '../../Constant/constant';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  constructor(private http: HttpClient) { }

    getbnlist():Observable<category> {
     //return this.http.get<category>(environment.API_URL + constant.API_METHOD.GET_ALL_CLIENT)

     return this.http.get<category>("https://localhost:7258/api/Categories")
    }
  

    getnglist()
    {
      return this.http.get("https://localhost:7258/api/Categories")

    }
}
