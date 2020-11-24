import { Component } from '@angular/core';
import {UsersService} from './users.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  title = 'firstAngular';
  obj={
    name:"kassu",
    age:"23"
  }
  currval="";
  arr=["kassu","chhotu"]
   //obj={};
   constructor(private user:UsersService){}

   
}
