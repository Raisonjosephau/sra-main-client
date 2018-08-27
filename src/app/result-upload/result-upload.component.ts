import { Component, OnInit, AfterViewInit } from '@angular/core';
import {UserService} from '../_services/user.service'
@Component({
  selector: 'app-upload-result',
  templateUrl: './result-upload.component.html',
  styleUrls: ['./result-upload.component.css']
})
export class UploadResultComponent implements OnInit {
  file_status: any;
  file: File;
  loading = false;

  semList = [
    {'id': 1, 'name': 'Semester 1'},
    {'id': 2, 'name': 'Semester 2'},
    {'id': 3, 'name': 'Semester 3'},
    {'id': 4, 'name': 'Semester 4'},
    {'id': 5, 'name': 'Semester 5'},
    {'id': 6, 'name': 'Semester 6'},
    {'id': 7, 'name': 'Semester 7'},
    {'id': 8, 'name': 'Semester 8'}
  ];
  batchList = [
    {'id': 1, 'name': '2015-19'},
    {'id': 2, 'name': '2016-20'},
    {'id': 3, 'name': '2017-21'},
    {'id': 4, 'name': '2018-22'},
    {'id': 5, 'name': '2019-23'},
  ];


  semSettings = {};
  batchSettings = {};
  schemeSettings = {};
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.file_status = 'No file choosen'

    this.semSettings =  {
      singleSelection: true,
      text: 'Choose Semester',
      enableSearchFilter: true,
      classes: 'input-group-alternative',
      labelKey: 'name'
    }
    this.batchSettings =  {
      singleSelection: true,
      text: 'Choose Batch',
      enableSearchFilter: true,
      classes: 'input-group-alternative',
      labelKey: 'name'
    }
    this.schemeSettings = {
      singleSelection: true,
      text: 'Choose Scheme',
      enableSearchFilter: true,
      classes: 'input-group-alternative',
      labelKey: 'name'
    }
  }


  fileChange(event) {
    // let fileList: File = event.target.files;
    const file: File = event.target.files[0]
    this.file = file
    this.file_status = file.name
  }

  uploads(span: any) {
      const formData: FormData = new FormData();
      formData.append('span', span);
      formData.append('file', this.file, this.file.name);
      this.loading = true;

      // this.userService.uploadFile(formData).subscribe(
      //   data => {
      //     console.log(data)
      //   },
      //   error => {
      //       console.log(error.status);
      //       console.log(error.error);
      //   }
      // )
      console.log(this.file)
  }
}
