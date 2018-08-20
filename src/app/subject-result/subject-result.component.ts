import { Component, OnInit } from '@angular/core';
import {UserService} from '../_services/user.service'

@Component({
  selector: 'app-student-result',
  templateUrl: './subject-result.component.html',
  styleUrls: ['./subject-result.component.css']
})

export class SubjectResultComponent implements OnInit {

  constructor(private userService: UserService) { }


  ngOnInit() {
  }

}
