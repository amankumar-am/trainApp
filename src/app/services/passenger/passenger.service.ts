import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIResponseModel } from '../../model/interface/objectTypes';
import { environment as env } from '../../../environments/environment';
import { constantKeys as c } from '../../constant/constantKeys';

@Injectable({
  providedIn: 'root'
})
export class PassengerService {

  constructor(private http: HttpClient) { }

  getAllPassengers(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(env.API_URL + c.GET_ALL_PASSENGERS);
  }
}
