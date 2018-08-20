import { Component, OnInit } from '@angular/core';
import {UserService} from '../_services/user.service'

@Component({
  selector: 'app-student-result',
  templateUrl: './student-result.component.html',
  styleUrls: ['./student-result.component.css']
})
export class StudentResultComponent implements OnInit {
  cols: any[];
  results: any[];

  constructor(private userService: UserService) { }


  ngOnInit() {

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
    ]
  }

  ngAfterViewInit() {
    jQuery('select').selectpicker();
  }


}
