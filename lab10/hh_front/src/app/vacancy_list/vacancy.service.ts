import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Company, Vacancy} from "../models";
import {HttpClient} from "@angular/common/http";

function onClickCompany() {

}

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  BASE_URL = 'http://127.0.0.1:8000'

  constructor(private http: HttpClient) { }

  getVacancies(id: number): Observable<Vacancy[]> {
    return this.http.get<Vacancy[]>(
      `${this.BASE_URL}/api/vacancy/${id}/companies/`
    )
  }
}
