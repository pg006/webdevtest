import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  public APIUrl: string = environment.baseURL;
  constructor(private http: HttpClient) { }
  get(url:String,params?: any) {
    return this.http.get(this.APIUrl + url,{
      params: params

    })
  }
}