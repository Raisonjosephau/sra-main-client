import { Component, OnInit } from '@angular/core';
import {UserService} from '../_services/user.service'

import {PaginationService} from '../_services/pagination.service'
import {Page} from '../_objects/page'
import {PagedData} from '../_objects/page-data'

@Component({
  selector: 'app-result',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultComponent implements OnInit {
  rows = [
    {
      'id': 'LSGI00',
      'name': 'Francis Vance',
      'grade': [
        'A+',
        'B',
        'B',
        'F',
        'A+',
        'O',
        'A+',
        'D+',
        'O'
      ]
    },
    {
      'id': 'LSGI01',
      'name': 'George Stuart',
      'grade': [
        'A+',
        'C',
        'O',
        'O',
        'B+',
        'D+',
        'A',
        'C+',
        'A'
      ]
    },
    {
      'id': 'LSGI02',
      'name': 'Woodard Mccarty',
      'grade': [
        'P',
        'A',
        'F',
        'C',
        'B+',
        'C',
        'C',
        'O',
        'P'
      ]
    },
    {
      'id': 'LSGI03',
      'name': 'Rodriguez Mullins',
      'grade': [
        'O',
        'F',
        'B',
        'A',
        'D+',
        'P',
        'A',
        'D+',
        'B'
      ]
    },
    {
      'id': 'LSGI04',
      'name': 'Duran Lane',
      'grade': [
        'B+',
        'B+',
        'B',
        'F',
        'B+',
        'A',
        'C',
        'P',
        'B'
      ]
    },
    {
      'id': 'LSGI05',
      'name': 'Sherry Vincent',
      'grade': [
        'F',
        'O',
        'A',
        'A',
        'F',
        'F',
        'C',
        'D+',
        'O'
      ]
    },
    {
      'id': 'LSGI06',
      'name': 'Hurst Phelps',
      'grade': [
        'O',
        'D+',
        'D+',
        'O',
        'O',
        'D+',
        'B',
        'C',
        'C'
      ]
    },
    {
      'id': 'LSGI07',
      'name': 'Valeria Ayers',
      'grade': [
        'D+',
        'F',
        'O',
        'P',
        'A',
        'C+',
        'D+',
        'B+',
        'O'
      ]
    },
    {
      'id': 'LSGI08',
      'name': 'Hansen Brennan',
      'grade': [
        'B+',
        'A',
        'A+',
        'F',
        'P',
        'P',
        'P',
        'C+',
        'A'
      ]
    },
    {
      'id': 'LSGI09',
      'name': 'Garcia Underwood',
      'grade': [
        'A+',
        'P',
        'A',
        'O',
        'B+',
        'C+',
        'F',
        'B+',
        'B+'
      ]
    },
    {
      'id': 'LSGI010',
      'name': 'Nash Norris',
      'grade': [
        'A',
        'C',
        'B',
        'A+',
        'O',
        'O',
        'O',
        'O',
        'P'
      ]
    },
    {
      'id': 'LSGI011',
      'name': 'Eugenia Barker',
      'grade': [
        'C+',
        'B',
        'P',
        'A+',
        'O',
        'D+',
        'A+',
        'C+',
        'A'
      ]
    },
    {
      'id': 'LSGI012',
      'name': 'Riggs Mitchell',
      'grade': [
        'C',
        'D+',
        'O',
        'C',
        'C+',
        'A',
        'A+',
        'P',
        'A'
      ]
    },
    {
      'id': 'LSGI013',
      'name': 'Davis Woodward',
      'grade': [
        'A',
        'B+',
        'B+',
        'A+',
        'D+',
        'C',
        'C',
        'C',
        'A+'
      ]
    },
    {
      'id': 'LSGI014',
      'name': 'Susanna Pruitt',
      'grade': [
        'F',
        'C',
        'B+',
        'B',
        'A+',
        'A+',
        'O',
        'B+',
        'F'
      ]
    },
    {
      'id': 'LSGI015',
      'name': 'Mcmillan Ray',
      'grade': [
        'B',
        'A+',
        'A+',
        'A+',
        'C',
        'F',
        'C',
        'C+',
        'D+'
      ]
    },
    {
      'id': 'LSGI016',
      'name': 'Terrell Hoover',
      'grade': [
        'O',
        'B',
        'F',
        'A',
        'B',
        'A',
        'C+',
        'F',
        'A'
      ]
    },
    {
      'id': 'LSGI017',
      'name': 'Cecile Austin',
      'grade': [
        'B',
        'A',
        'P',
        'O',
        'C+',
        'B+',
        'A+',
        'F',
        'B'
      ]
    },
    {
      'id': 'LSGI018',
      'name': 'Adela Curtis',
      'grade': [
        'D+',
        'P',
        'F',
        'F',
        'A+',
        'C',
        'C',
        'P',
        'P'
      ]
    },
    {
      'id': 'LSGI019',
      'name': 'Roy Bates',
      'grade': [
        'D+',
        'B',
        'B',
        'P',
        'O',
        'D+',
        'C+',
        'C+',
        'A'
      ]
    },
    {
      'id': 'LSGI020',
      'name': 'Holt Parks',
      'grade': [
        'F',
        'C',
        'B',
        'B',
        'O',
        'C',
        'A',
        'D+',
        'F'
      ]
    },
    {
      'id': 'LSGI021',
      'name': 'Leticia Lamb',
      'grade': [
        'B',
        'D+',
        'O',
        'O',
        'B',
        'C+',
        'D+',
        'F',
        'F'
      ]
    },
    {
      'id': 'LSGI022',
      'name': 'Marquez Moody',
      'grade': [
        'F',
        'B',
        'B',
        'D+',
        'C',
        'C+',
        'P',
        'A',
        'A'
      ]
    },
    {
      'id': 'LSGI023',
      'name': 'Kristie Carson',
      'grade': [
        'A',
        'C',
        'D+',
        'D+',
        'C+',
        'C',
        'P',
        'O',
        'F'
      ]
    },
    {
      'id': 'LSGI024',
      'name': 'Burnett Salazar',
      'grade': [
        'P',
        'A',
        'C',
        'B',
        'A',
        'F',
        'B+',
        'C+',
        'D+'
      ]
    },
    {
      'id': 'LSGI025',
      'name': 'Louisa Fernandez',
      'grade': [
        'B',
        'C+',
        'B',
        'B',
        'B',
        'B+',
        'B',
        'C',
        'B'
      ]
    },
    {
      'id': 'LSGI026',
      'name': 'Jennie Walters',
      'grade': [
        'C+',
        'B+',
        'A+',
        'C',
        'A',
        'A+',
        'C',
        'A',
        'C'
      ]
    },
    {
      'id': 'LSGI027',
      'name': 'Arnold Hoffman',
      'grade': [
        'F',
        'A',
        'O',
        'B+',
        'B+',
        'D+',
        'A+',
        'A+',
        'B+'
      ]
    },
    {
      'id': 'LSGI028',
      'name': 'Talley Davis',
      'grade': [
        'O',
        'C+',
        'A+',
        'B+',
        'D+',
        'C',
        'A',
        'A+',
        'C'
      ]
    },
    {
      'id': 'LSGI029',
      'name': 'Rene Adams',
      'grade': [
        'A+',
        'O',
        'O',
        'O',
        'A',
        'P',
        'B',
        'C',
        'A'
      ]
    },
    {
      'id': 'LSGI030',
      'name': 'Marisol Sullivan',
      'grade': [
        'C+',
        'C',
        'C',
        'B',
        'A+',
        'A+',
        'F',
        'B',
        'B+'
      ]
    },
    {
      'id': 'LSGI031',
      'name': 'Spears Wilson',
      'grade': [
        'P',
        'F',
        'P',
        'A+',
        'D+',
        'F',
        'B',
        'A',
        'A'
      ]
    },
    {
      'id': 'LSGI032',
      'name': 'Cecelia Orr',
      'grade': [
        'C',
        'B',
        'D+',
        'A+',
        'A+',
        'A+',
        'B+',
        'B',
        'D+'
      ]
    }
  ];

  currentPage = 1;
  page = new Page()
  pageData = new PagedData()
  studList: Array<any>;
  failedList: Array<any>;
  passedList: Array<any>;

  constructor(private userService: UserService,  private paginationService: PaginationService) { }


  ngOnInit() {
    // Pagination
    this.page.size = 7;
    this.page.totalElements = this.rows.length;
    this.pageData.page = this.page;
    this.pageData.data = this.rows;
    this.pagination(this.currentPage);

    // Pass or Fail
    this.passedList = this.rows.filter(item => !item.grade.includes('F'));
    this.failedList = this.rows.filter(item => item.grade.includes('F'));
  }

   // Paginatio
  public pagination(e: any): void {
    this.page.pageNumber = e - 1;
    this.studList =  [...this.paginationService.getHeroes(this.pageData).data ];
  }

  private switchToPassOrFailorAll(list: Array<any>) {
    this.pageData.data = list;
    this.currentPage = 1
    this.pagination(this.currentPage);
  }
}
