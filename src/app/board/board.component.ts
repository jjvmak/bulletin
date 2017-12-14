import { Component, OnInit, ViewChild } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

 @ViewChild('message') messageForm: NgForm;
  ln: number;
  messages: Message[] = [];
  tmp: Message;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://localhost:8080/messages', {observe: 'response'})
      .subscribe(resp => {
        this.ln = Object.keys(resp.body).length;

        for (let i = 0; i < this.ln; i++) { 
               
          this.tmp = new Message(resp.body[i].header, resp.body[i].description);     
          this.messages.push(this.tmp);
        }

      });
  }

}

export class Message {
  
  constructor (private header: string, private description: string) {}
  
  get getHeader(): string {
    return this.header;
  }
  
   get getDescription(): string {
    return this.description;
  }
  
}
