import { Component, OnInit } from '@angular/core';
import {ServerService} from '../_services/server.service'

@Component({
  selector: 'app-fomrs',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})

export class FormsComponent implements OnInit {
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
  depList = [
    {'id': 1, 'name': 'Computer Science & Engineering'},
    {'id': 2, 'name': 'Civil Engineering'},
    {'id': 3, 'name': 'Electronics and Communications'},
    {'id': 4, 'name': 'Electrical Engineering'},
    {'id': 5, 'name': 'Mechanical Engineering'}
  ];

  desigList = [
    {'id': 1, 'name': 'Asst. Proffoser'},
    {'id': 2, 'name': 'Jr. Proffoser'},
    {'id': 3, 'name': 'Lab Assistant'},
  ];
  semSettings = {};
  depSettings = {};
  desigSettings = {}
  difficultySelector = 3;
  file_status: any;
  studPhone: any;
  file: File;
  loading = false;
  constructor(private serverService: ServerService) { }

  ngOnInit() {
    this.file_status = 'No file choosen'

    this.semSettings =  {
      singleSelection: true,
      text: 'Choose Semester',
      enableSearchFilter: true,
      classes: 'input-group-alternative',
      labelKey: 'name'
    }
    this.depSettings = {
      singleSelection: true,
      text: 'Choose Department',
      enableSearchFilter: true,
      classes: 'input-group-alternative',
      labelKey: 'name'
    }
    this.desigSettings = {
      singleSelection: true,
      text: 'Choose Designation',
      enableSearchFilter: true,
      classes: 'input-group-alternative',
      labelKey: 'name'
    }
  }

  fileChange(event) {

    const file: File = event.target.files[0]
    this.file = file
    this.file_status = file.name
  }
  batchSubmit(form) {

    const formData: FormData = new FormData();
    formData.append('year', form.get('year').value);
    formData.append('studno', form.get('studNo').value);
    formData.append('currentSem', form.get('semester').value[0].id);
    formData.append('department', form.get('depBatch').value[0].id);

  }
  staffSubmit(form) {
    const object = form.value;
    const formData: FormData = new FormData();
    Object.keys(object).forEach(key => {
      if (Array.isArray(object[key])) {
        formData.append(key.toLowerCase(), object[key][0].id);
      } else if (typeof(object[key]) === 'object') {
        const d = new Date(object[key].year, object[key].month, object[key].day);
        formData.append(key, d.toUTCString());
      } else {
          formData.append(key, object[key]);
      }
    });
  }
  studSubmit(form) {

    const formData: FormData = new FormData();
    const dateObject = form.get('studDob').value;
    formData.append('name', form.get('studName').value);
    formData.append('regno', form.get('studRegNo').value);
    formData.append('dob', (new Date(dateObject.year, dateObject.month, dateObject.day)).toUTCString());
    formData.append('email', form.get('studEmail').value);
    formData.append('phone', form.get('studPhone').value);
    formData.append('department', form.get('depStud').value[0].id);
    formData.append('semester', form.get('semStud').value[0].id);

  }
  fastForm(form) {

    const formData: FormData = new FormData();
    formData.append('department', form.get('depStudUp').value[0].id);
    formData.append('semester', form.get('semStudUp').value[0].id);
    formData.append('file', form.get('file_upload').value);
  }
  subjectSubmit(form) {
    const formData: FormData = new FormData();
    formData.append('name', form.get('subName').value);
    formData.append('cource_code', form.get('subCode').value);
    formData.append('credit', form.get('subCredit').value);
    formData.append('semester', form.get('subSem').value[0].id);
    formData.append('difficulty', form.get('difficultySelector').value);
    this.serverService.postSubject(formData).subscribe(
      data => {
        console.log(data);
        const storedSubjects = JSON.parse(localStorage.getItem('subjects'));
        storedSubjects.push(data);
        localStorage.setItem('subjects', JSON.stringify(storedSubjects));

      },
      error => {
        console.log(error)
      }
    )
  }
}
