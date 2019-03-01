import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../../my-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  mydata:string = ""
  users: any = []
  
  constructor(private myFirstService: MyServiceService) { 
  }


  ngOnInit() {
  }
  
  getID(){
    this.myFirstService.clickAlert(this.mydata)
  }

}
