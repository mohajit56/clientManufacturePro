import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { ManufacturerVehicleModel } from '../model/manufacturervehicle.model';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const baseURL = `${environment.apiUrl}api/v1/vehicles`;

@Injectable({
  providedIn: 'root'
})
export class ManufactureserviceService {


  constructor(private http:HttpClient) { }


   loadManufactureDetails(name:string): Observable<ManufacturerVehicleModel> {
        const url = `${baseURL}/${name}`;
        return this.http.get<ManufacturerVehicleModel>(url);
    }


}
