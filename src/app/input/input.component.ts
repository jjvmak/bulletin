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
  ln: number;
  messages: string [] = [];
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:8080/messages', {observe: 'response'})
      .subscribe(resp => {
        this.ln = Object.keys(resp.body).length;

        for (let i = 0; i < this.ln; i++) {
          this.messages.push(resp.body[i].message);
          console.log(this.messages[i]);
        }

      });
  }

  onSubmit() {
    console.log(this.messageForm.value.description);
    const body = {
      header: this.messageForm.value.header,
      description: this.messageForm.value.description,
      date: this.messageForm.value.date,
      time: this.messageForm.value.time,

    }
    this.http.post('http://localhost:8080/test', body).subscribe();

    this.messageForm.reset();
  }
}
