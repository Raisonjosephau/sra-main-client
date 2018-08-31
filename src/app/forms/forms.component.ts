import { Component, OnInit } from '@angular/core';

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
  constructor() { }

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

    // this.formatPhoneNumber('1234567890');
  }

  fileChange(event) {
    // let fileList: File = event.target.files;
    const file: File = event.target.files[0]
    this.file = file
    this.file_status = file.name
  }
  batchSubmit(form) {

    const formData: FormData = new FormData();
    formData.append('year', form.get('year').value);
    formData.append('studno', form.get('studNo ').value);
    formData.append('currentSem', form.get('semester').value[0].id);
    formData.append('department', form.get('depBatch ').value[0].id);

    Object.keys(form.controls).forEach(key => {
      console.log(key, form.get(key).value)
    });
  }
  staffSubmit(form) {
    const object = form.value;
    const formData: FormData = new FormData();
    Object.keys(object).forEach(key => {
      console.log(typeof(object[key]));
      if (Array.isArray(object[key])) {
        formData.append(key.toLowerCase(), object[key][0].id);
      } else if (typeof(object[key]) === 'object') {
        const d = new Date(object[key].year, object[key].month, object[key].day);
        formData.append(key, d);
      } else {
          formData.append(key, object[key]);
      }
    });
    formData.forEach(element => {
      console.log(element)
    });

  }
  studSubmit(form) {
    // console.log('Name', form.controls.studName.value);
    // console.log('Regno', form.controls.studRegNo.value);
    // console.log('dob', form.controls.studDob.value);
    // console.log('email', form.controls.studEmail.valid);
    // console.log('phone', form.controls.studPhone.value);
    // console.log('Department', form.controls.depStud.value[0]);
    // console.log('Semester', form.controls.semStud.value[0]);
    console.log(form)
  }
  fastForm(form) {

    console.log('Department', form.controls.depStudUp.value[0]);
    console.log('Semester', form.controls.semStudUp.value[0]);
    console.log('File', form.controls.file_upload.value);
  }
}
