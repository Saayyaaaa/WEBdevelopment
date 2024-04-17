import {Component, OnInit} from '@angular/core';
import {NgForOf} from "@angular/common";
import {Vacancy} from "../models";
import {ActivatedRoute} from "@angular/router";
import {VacancyService} from "./vacancy.service";

@Component({
  selector: 'app-vacancy_list',
  standalone: true,
    imports: [
        NgForOf
    ],
  templateUrl: './vacancy-list.component.html',
  // styleUrl: './vacancy_list.component.css'
})
export class VacancyListComponent implements OnInit{
  id!: number;
  vacancies: Vacancy[] = [];

  constructor(private route: ActivatedRoute, private vacancyService: VacancyService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
      this.getVacancies(this.id);
    });
  }

  getVacancies(id: number): void {
    this.vacancyService.getVacancies(id).subscribe((vacancies) => {
      this.vacancies = vacancies;
    });
  }

}
