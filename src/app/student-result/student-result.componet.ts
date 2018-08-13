import { Component, OnInit } from '@angular/core';
import {UserService} from '../_services/user.service'

@Component({
  selector: 'app-student-result',
  templateUrl: './student-result.component.html',
  styleUrls: ['./student-result.component.css']
})
export class StudentResultComponent implements OnInit {
  constructor(private userService: UserService) { }

  ngOnInit() {

  }


}
