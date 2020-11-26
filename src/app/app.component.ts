import { Component,OnInit} from '@angular/core';
import {UsersService} from './users.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  title = 'firstAngular';
  result:any={};
  obj={
    name:"kassu",
    age:"23"
  }
  Distr:any[]=["select district"];
  arr:any[]=[ "select state",
    "Andaman and Nicobar Islands",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chandigarh",
    "Chhattisgarh",
    "Dadra and Nagar Haveli",
    "Daman and Diu",
    "Delhi"];
    gt:any={
      Bihar:["select district","Muzaffarpur","Siwan","Bhagalpur"],
      Assam:["select district","Bakasa","Barpeta","Cachar"]
    };
  State:string="Bihar";
  dis:string="muzaffarpur";
  currval="";
   //obj={};
   covidData:any={};
   constructor(private user:UsersService){}
   ngOnInit(): void {
    this.user.getData().subscribe((res)=>{
      console.log('res', res);
      this.covidData = res;
    });
    this.user.getState().subscribe((dt)=>{
      console.log('dt',dt);
      this.result=dt;
    });
  }
 
  solve1(val1:string,val2:string)
  {
   // console.log(val1);
    if(val1!="")
    this.State=val1;
    if(val2!="")
    this.dis=val2;
  } 
  solve(as:string)
  {
    console.log(as);
    if(this.gt[as])
    this.Distr=(this.gt)[as];
    else
    this.Distr=["select district"];
  }
  getans():void
  {
    
  }
}
