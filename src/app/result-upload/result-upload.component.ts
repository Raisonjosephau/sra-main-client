import { Component, OnInit } from '@angular/core';
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
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.file_status = 'No file choosen'
  }

  ngAfterViewInit() {
    jQuery('select').selectpicker();
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
