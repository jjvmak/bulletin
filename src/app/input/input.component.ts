import { Component, OnInit, ViewChild } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AbstractControl, ValidatorFn, NgForm, FormGroup, Validators, FormControl, NgModel} from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @ViewChild('message') messageForm: NgForm;
  pic: string;
  reader = new FileReader();
  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  onSubmit() {
    console.log(this.messageForm.value.description);
    const body = {
      header: this.messageForm.value.header,
      description: this.messageForm.value.description,
      date: this.messageForm.value.date,
      time: this.messageForm.value.time,
      picture: this.pic

    }
    this.http.post('http://localhost:8080/test', body).subscribe();

    this.messageForm.reset();
  }

  onFileChange(event) {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      this.reader.readAsDataURL(file);
      this.reader.onload = () => {
        this.pic = this.reader.result;
        // console.log(this.pic)
      };
    }
  }
}
