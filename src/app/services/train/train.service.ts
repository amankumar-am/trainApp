import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment as env } from '../../../environments/environment';
import { constantKeys as c } from '../../constant/constantKeys';
import { APIResponseModel } from '../../model/interface/objectTypes';

@Injectable({
  providedIn: 'root'
})
export class TrainService {

  constructor(private http: HttpClient) { }

  getAllTrains(): Observable<APIResponseModel> {
    return this.http.get<APIResponseModel>(env.API_URL + c.GET_ALL_TRAINS);
  }
}
