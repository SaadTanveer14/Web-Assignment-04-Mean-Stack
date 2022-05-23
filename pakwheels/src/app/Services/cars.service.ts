import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable  } from 'rxjs';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/toPromise';

import { Vehicle } from '../vehicle';
import { VehicleNew } from '../newVehicle';

@Injectable({
  providedIn: 'root'
})
export class CarsService {
  vehicles!:Vehicle[];
  currentVehicle!:Vehicle;
  readonly URL='http://localhost:3000/car'

  constructor(private http: HttpClient) { }
  getVehiclesList()
  {
    console.log("Called");
    return this.http.get(this.URL);
  }
  deleteVehicle(_id:string)
  {
    return this.http.delete(this.URL+'/'+_id)
  }
  updateVehicles(veh:Vehicle)
  {
    return this.http.put(this.URL+'/'+veh._id,veh);
  }
  addVehicle(veh:VehicleNew)
  {
    return this.http.post(this.URL,veh)
  }
}
