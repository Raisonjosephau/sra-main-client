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
      'id': 'SGICS00',
      'name': 'Nora Goodman',
      'grade': [
        'C+',
        'B+',
        'A+',
        'O',
        'A+',
        'O',
        'A+',
        'C+',
        'B'
      ],
      'cgpa': 6.1264
    },
    {
      'id': 'SGICS01',
      'name': 'Porter Stafford',
      'grade': [
        'C',
        'A+',
        'A',
        'A',
        'F',
        'C',
        'O',
        'A',
        'A'
      ],
      'cgpa': 8.6126
    },
    {
      'id': 'SGICS02',
      'name': 'Adele Pruitt',
      'grade': [
        'D+',
        'A',
        'C+',
        'C',
        'C+',
        'O',
        'A',
        'A+',
        'C+'
      ],
      'cgpa': 7.3491
    },
    {
      'id': 'SGICS03',
      'name': 'Craft Brewer',
      'grade': [
        'F',
        'F',
        'O',
        'P',
        'O',
        'P',
        'C',
        'A+',
        'A+'
      ],
      'cgpa': 6.5967
    },
    {
      'id': 'SGICS04',
      'name': 'Hooper Kerr',
      'grade': [
        'P',
        'C',
        'F',
        'B+',
        'B+',
        'B+',
        'A+',
        'C+',
        'B+'
      ],
      'cgpa': 7.272
    },
    {
      'id': 'SGICS05',
      'name': 'Krista Yates',
      'grade': [
        'F',
        'F',
        'O',
        'A+',
        'P',
        'D+',
        'A+',
        'O',
        'C+'
      ],
      'cgpa': 7.5082
    },
    {
      'id': 'SGICS06',
      'name': 'Mayer Collins',
      'grade': [
        'A',
        'B',
        'B',
        'D+',
        'A+',
        'C',
        'B+',
        'C+',
        'D+'
      ],
      'cgpa': 9.2091
    },
    {
      'id': 'SGICS07',
      'name': 'Sexton Mason',
      'grade': [
        'F',
        'P',
        'B',
        'C+',
        'A+',
        'B+',
        'D+',
        'O',
        'F'
      ],
      'cgpa': 8.7971
    },
    {
      'id': 'SGICS08',
      'name': 'Dorothy Salinas',
      'grade': [
        'C',
        'O',
        'A',
        'C',
        'B+',
        'C+',
        'B+',
        'A+',
        'B'
      ],
      'cgpa': 8.9018
    },
    {
      'id': 'SGICS09',
      'name': 'Romero Head',
      'grade': [
        'A',
        'B+',
        'B',
        'B+',
        'B',
        'A+',
        'B+',
        'C+',
        'P'
      ],
      'cgpa': 7.6577
    },
    {
      'id': 'SGICS010',
      'name': 'Odessa Andrews',
      'grade': [
        'P',
        'C+',
        'A',
        'B+',
        'B+',
        'D+',
        'D+',
        'B+',
        'A+'
      ],
      'cgpa': 6.5401
    },
    {
      'id': 'SGICS011',
      'name': 'Gibson Reese',
      'grade': [
        'B+',
        'C+',
        'C+',
        'C+',
        'C+',
        'C+',
        'O',
        'O',
        'C'
      ],
      'cgpa': 6.6943
    },
    {
      'id': 'SGICS012',
      'name': 'Christina Browning',
      'grade': [
        'C+',
        'P',
        'B',
        'C',
        'D+',
        'P',
        'F',
        'B',
        'C+'
      ],
      'cgpa': 6.3839
    },
    {
      'id': 'SGICS013',
      'name': 'Kaitlin Marsh',
      'grade': [
        'B',
        'C+',
        'B+',
        'A+',
        'C',
        'O',
        'O',
        'D+',
        'A'
      ],
      'cgpa': 7.5293
    },
    {
      'id': 'SGICS014',
      'name': 'Riggs Harrison',
      'grade': [
        'A',
        'C',
        'D+',
        'C',
        'A',
        'F',
        'O',
        'B+',
        'B+'
      ],
      'cgpa': 7.3946
    },
    {
      'id': 'SGICS015',
      'name': 'Doreen Holder',
      'grade': [
        'F',
        'C',
        'F',
        'O',
        'A',
        'D+',
        'F',
        'F',
        'C+'
      ],
      'cgpa': 8.3123
    },
    {
      'id': 'SGICS016',
      'name': 'Wendi Roman',
      'grade': [
        'P',
        'P',
        'A',
        'D+',
        'B+',
        'D+',
        'D+',
        'O',
        'A'
      ],
      'cgpa': 8.3231
    },
    {
      'id': 'SGICS017',
      'name': 'Buckley Elliott',
      'grade': [
        'P',
        'B',
        'A',
        'D+',
        'A',
        'P',
        'P',
        'C',
        'A'
      ],
      'cgpa': 6.6668
    },
    {
      'id': 'SGICS018',
      'name': 'Schneider Mcknight',
      'grade': [
        'B+',
        'C',
        'P',
        'C+',
        'C+',
        'F',
        'A+',
        'O',
        'P'
      ],
      'cgpa': 9.238
    },
    {
      'id': 'SGICS019',
      'name': 'Hudson Pope',
      'grade': [
        'P',
        'A',
        'F',
        'A+',
        'D+',
        'D+',
        'O',
        'D+',
        'D+'
      ],
      'cgpa': 8.6055
    },
    {
      'id': 'SGICS020',
      'name': 'Myers Olson',
      'grade': [
        'C',
        'A+',
        'C',
        'D+',
        'O',
        'C',
        'F',
        'A+',
        'F'
      ],
      'cgpa': 6.7312
    },
    {
      'id': 'SGICS021',
      'name': 'Fields Trevino',
      'grade': [
        'D+',
        'C',
        'B+',
        'O',
        'F',
        'A',
        'B+',
        'B',
        'F'
      ],
      'cgpa': 8.8068
    },
    {
      'id': 'SGICS022',
      'name': 'Sharpe Gregory',
      'grade': [
        'B',
        'B',
        'B+',
        'B',
        'O',
        'O',
        'D+',
        'B',
        'C'
      ],
      'cgpa': 8.2972
    },
    {
      'id': 'SGICS023',
      'name': 'Sonja Garcia',
      'grade': [
        'B',
        'D+',
        'B+',
        'C+',
        'O',
        'F',
        'P',
        'A',
        'B+'
      ],
      'cgpa': 9.6433
    },
    {
      'id': 'SGICS024',
      'name': 'Mcmillan Mullen',
      'grade': [
        'P',
        'C+',
        'C+',
        'F',
        'P',
        'C',
        'C',
        'F',
        'D+'
      ],
      'cgpa': 9.7668
    },
    {
      'id': 'SGICS025',
      'name': 'Brewer Callahan',
      'grade': [
        'C',
        'C',
        'C',
        'F',
        'C+',
        'C+',
        'P',
        'C',
        'C+'
      ],
      'cgpa': 9.3804
    },
    {
      'id': 'SGICS026',
      'name': 'Hartman Haney',
      'grade': [
        'A+',
        'B',
        'B+',
        'O',
        'B+',
        'C+',
        'B',
        'B+',
        'O'
      ],
      'cgpa': 7.9556
    },
    {
      'id': 'SGICS027',
      'name': 'Turner Gallagher',
      'grade': [
        'C',
        'C+',
        'A',
        'C',
        'A',
        'B+',
        'A+',
        'B+',
        'P'
      ],
      'cgpa': 7.6357
    },
    {
      'id': 'SGICS028',
      'name': 'Jenny Fuller',
      'grade': [
        'A+',
        'D+',
        'P',
        'C+',
        'P',
        'D+',
        'O',
        'A+',
        'A'
      ],
      'cgpa': 9.5947
    },
    {
      'id': 'SGICS029',
      'name': 'Woodward Mcgee',
      'grade': [
        'F',
        'A',
        'A+',
        'A+',
        'A',
        'F',
        'O',
        'C+',
        'F'
      ],
      'cgpa': 8.1184
    },
    {
      'id': 'SGICS030',
      'name': 'Levine Adkins',
      'grade': [
        'B+',
        'C+',
        'D+',
        'A',
        'B',
        'A+',
        'C+',
        'B+',
        'P'
      ],
      'cgpa': 6.5973
    },
    {
      'id': 'SGICS031',
      'name': 'Christensen Powers',
      'grade': [
        'P',
        'B+',
        'A',
        'B+',
        'F',
        'C',
        'P',
        'P',
        'D+'
      ],
      'cgpa': 7.1112
    },
    {
      'id': 'SGICS032',
      'name': 'Kathleen Kennedy',
      'grade': [
        'A+',
        'O',
        'O',
        'C+',
        'A',
        'D+',
        'C+',
        'B',
        'B'
      ],
      'cgpa': 8.5148
    },
    {
      'id': 'SGICS033',
      'name': 'Freida Houston',
      'grade': [
        'O',
        'B+',
        'A+',
        'F',
        'P',
        'B',
        'O',
        'D+',
        'A'
      ],
      'cgpa': 7.5047
    },
    {
      'id': 'SGICS034',
      'name': 'Whitney Davidson',
      'grade': [
        'A+',
        'O',
        'C',
        'O',
        'A',
        'P',
        'A',
        'D+',
        'O'
      ],
      'cgpa': 7.034
    },
    {
      'id': 'SGICS035',
      'name': 'Agnes Ward',
      'grade': [
        'D+',
        'A+',
        'P',
        'B',
        'B+',
        'C+',
        'B',
        'A',
        'A+'
      ],
      'cgpa': 9.5631
    },
    {
      'id': 'SGICS036',
      'name': 'Ester Simon',
      'grade': [
        'C+',
        'B',
        'F',
        'B',
        'C',
        'F',
        'A',
        'D+',
        'D+'
      ],
      'cgpa': 8.8341
    },
    {
      'id': 'SGICS037',
      'name': 'Chasity Bush',
      'grade': [
        'B',
        'O',
        'C+',
        'P',
        'B+',
        'B',
        'C+',
        'F',
        'B'
      ],
      'cgpa': 9.7765
    },
    {
      'id': 'SGICS038',
      'name': 'Ryan Herrera',
      'grade': [
        'P',
        'C+',
        'D+',
        'D+',
        'P',
        'A',
        'P',
        'O',
        'B'
      ],
      'cgpa': 7.0699
    },
    {
      'id': 'SGICS039',
      'name': 'Cline Moreno',
      'grade': [
        'C+',
        'C+',
        'O',
        'A+',
        'A+',
        'A',
        'F',
        'D+',
        'A+'
      ],
      'cgpa': 8.6991
    },
    {
      'id': 'SGICS040',
      'name': 'Kelli Gross',
      'grade': [
        'A',
        'B+',
        'F',
        'B+',
        'P',
        'O',
        'P',
        'C+',
        'F'
      ],
      'cgpa': 8.6164
    },
    {
      'id': 'SGICS041',
      'name': 'Coffey Cabrera',
      'grade': [
        'C',
        'B',
        'P',
        'A+',
        'B+',
        'A',
        'C',
        'C',
        'C'
      ],
      'cgpa': 9.4809
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
    this.page.size = 8;
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
