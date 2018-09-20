import { Component, OnInit, AfterViewInit } from '@angular/core';
import {ServerService} from '../_services/server.service';
import {Observable} from 'rxjs';
import {of} from 'rxjs';
import {catchError, debounceTime, distinctUntilChanged, map, tap, switchMap} from 'rxjs/operators';
import { trigger, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-student-result',
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(100%)', opacity: 0}),
          animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('500ms', style({transform: 'translateX(100%)', opacity: 0}))
        ])
      ]
    )
  ],
  templateUrl: './student-result.component.html',
  styleUrls: ['./student-result.component.css']
})
export class StudentResultComponent implements OnInit, AfterViewInit {
  cols: any[];
  results: any[];

  students = [
    {
      'id': 0,
      'reg': 'SGICS3',
      'name': 'Sreelaksmi Sudeer'
    },
    {
      'id': 1,
      'reg': 'SGICS27',
      'name': 'Savid Joe Sunny'
    },
    {
      'id': 2,
      'reg': 'SGICS28',
      'name': 'Joel Jose Parekattil'
    },
    {
      'id': 3,
      'reg': 'SGICS13',
      'name': 'Jimenez Cote'
    },
    {
      'id': 4,
      'reg': 'SGICS3',
      'name': 'Gonzales Griffith'
    },
    {
      'id': 5,
      'reg': 'SGICS31',
      'name': 'Kirby Woods'
    },
    {
      'id': 6,
      'reg': 'SGICS2',
      'name': 'Barry Hinton'
    },
    {
      'id': 7,
      'reg': 'SGICS31',
      'name': 'Leila Mcfarland'
    },
    {
      'id': 8,
      'reg': 'SGICS15',
      'name': 'Liliana Stein'
    },
    {
      'id': 9,
      'reg': 'SGICS29',
      'name': 'Perez Stone'
    },
    {
      'id': 10,
      'reg': 'SGICS3',
      'name': 'Marie Noel'
    },
    {
      'id': 11,
      'reg': 'SGICS21',
      'name': 'Daniel Sanders'
    },
    {
      'id': 12,
      'reg': 'SGICS6',
      'name': 'Booker Roach'
    },
    {
      'id': 13,
      'reg': 'SGICS18',
      'name': 'Marietta Sykes'
    },
    {
      'id': 14,
      'reg': 'SGICS12',
      'name': 'Gabriela Lindsey'
    },
    {
      'id': 15,
      'reg': 'SGICS24',
      'name': 'Lloyd Robinson'
    }
  ];
  dropdownList = [
    {'id': 1, 'name': 'Semester 1'},
    {'id': 2, 'name': 'Semester 2'},
    {'id': 3, 'name': 'Semester 3'},
    {'id': 4, 'name': 'Semester 4'},
    {'id': 5, 'name': 'Semester 5'},
    {'id': 6, 'name': 'Semester 6'},
    {'id': 7, 'name': 'Semester 7'},
    {'id': 8, 'name': 'Semester 8'}
  ];

  dropdownSettings = {};
  model: any;
  searching = false;
  searchFailed = false;
  constructor(private serverService: ServerService) { }


  ngOnInit() {

    this.dropdownSettings = {
      singleSelection: true,
      text: 'Select Semester',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: 'input-group-alternative',
      labelKey: 'name'
    };
    this.results =  [
      {
        'id': 0,
        'code': 'CS031',
        'name': 'Sreelaksmi Sudeer',
        'grade': 'B'
      },
      {
        'id': 1,
        'code': 'CS031',
        'name': 'Savid Joe Sunny',
        'grade': 'A+'
      },
      {
        'id': 2,
        'code': 'CS038',
        'name': 'Joel Jose Parekattil',
        'grade': 'F'
      },
      {
        'id': 3,
        'code': 'CS038',
        'name': 'Jimenez Cote',
        'grade': 'B+'
      },
      {
        'id': 4,
        'code': 'CS034',
        'name': 'Gonzales Griffith',
        'grade': 'B'
      },
      {
        'id': 5,
        'code': 'CS033',
        'name': 'Kirby Woods',
        'grade': 'O'
      },
      {
        'id': 6,
        'code': 'HS031',
        'name': 'Barry Hinton',
        'grade': 'O'
      },
      {
        'id': 7,
        'code': 'CS033',
        'name': 'Leila Mcfarland',
        'grade': 'O'
      }
    ];
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(term => term.length < 3 ? []
        : this.serverService.serachStudent(term).pipe(
          tap(() => this.searchFailed = false),
          map(res => {
            if (res.length) {
              return res;
            } else {
              this.searchFailed = true;
              return [];
            }
          }),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
    )
  formatter = (x: {name: string,  regno: string}) => x.name + ' - ' + x.regno;
  private selectSearch(e: any): void {
    console.log(e);
  }

  ngAfterViewInit() {
  }



}
