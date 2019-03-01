import { Component, OnInit } from '@angular/core';
import { MyServiceService } from '../../my-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {


  users: any = []
  // mydata:string = ""



  constructor(private http: HttpClient, private myFirstService: MyServiceService) {
  }

  ngOnInit() {
    
      this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(data=>{
        this.users = data
      })
debugger;
      this.myFirstService.btnClicked.subscribe(data2=>{
        this.myFirstService.getData2(data2).subscribe(data2b=>{
          this.users = data2b
        })
      })
    
  }
 
  // get2(ev){
  //   debugger;
  //   this.myFirstService.getData2(ev).subscribe(data => {
  //     this.users = data
  //   })
  //   debugger;
  //   if(ev===null){
  //     this.users = this.myFirstService.getData().subscribe(data => {
  //       this.users = data
        
  //     })
  //   }
  // }
}
