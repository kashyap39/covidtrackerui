import { Component,OnInit,Input } from '@angular/core';
import {UsersService} from '../users.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {
  @Input() val:any;
  @Input() x:any;
  constructor(private us:UsersService) {
    //  this.covidData={
    //   "confirmed": {
    //     "value": 9177840,
    //     "detail": "https://covid19.mathdro.id/api/countries/India/confirmed"
    //   },
    //   "recovered": {
    //     "value": 8604955,
    //     "detail": "https://covid19.mathdro.id/api/countries/India/recovered"
    //   },
    //   "deaths": {
    //     "value": 134218,
    //     "detail": "https://covid19.mathdro.id/api/countries/India/deaths"
    //   },
    //   "lastUpdate": "2020-11-24T09:27:05.000Z"
    // } 
  }
  ngOnInit(): void{}  
 

}
