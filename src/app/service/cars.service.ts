import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from '../domain/cars.model';

@Injectable()
export class CasrsService{
    constructor(private http:HttpClient){}

    getCasrsSmall(){
        return this.http.get('/showcase/resources/data/cars-small.json')
        .toPromise()
        .then(res => <Car[]> res.json().data)
        .then(data=>{return data;});
    }
}
