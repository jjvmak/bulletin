import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
   constructor(private http: HttpClient) { }
  
  ngOnInit(): void {
    
    const body = {
      id: 'asd'
      
    }
    // this.http.post('http://localhost:8080/test', body).subscribe(); 
    
  }

}
