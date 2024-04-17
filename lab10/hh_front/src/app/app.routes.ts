import { Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {VacancyListComponent} from "./vacancy_list/vacancy-list.component";

export const routes: Routes = [
  { path: 'companies', component: AppComponent },
  { path: 'vacancy/:id/companies', component: VacancyListComponent },
];
