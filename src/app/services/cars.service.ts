import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Cars} from "../models/Cars";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  private url ='http://92.253.239.109/api/v1/cars';
  constructor(private httpClient: HttpClient) { }
  getCars(): Observable<Cars[]> {
    return this.httpClient.get<Cars[]>(this.url);
  }
  postCar(car: Cars): Observable<Cars>{
    const headers = { 'content-type': 'application/json'}
    return this.httpClient.post<Cars>(this.url, car, {'headers': headers});
  }
}
