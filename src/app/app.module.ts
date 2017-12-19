import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';

import { RouterModule, Routes } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { InputComponent } from './input/input.component';
import { FormsModule} from '@angular/forms';

const appRoutes: Routes = [
  { path: 'input', component: InputComponent },
  { path: 'board', component: BoardComponent },
  { path: '', component: BoardComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot( appRoutes, { enableTracing: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
