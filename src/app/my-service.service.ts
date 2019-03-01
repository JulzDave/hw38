import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private http: HttpClient) { }

  public btnClicked: EventEmitter<string> = new EventEmitter


  clickAlert(amount:string){
    this.btnClicked.emit(amount)
  }

  getData2(ev:string){
    debugger;
    return this.http.get("https://jsonplaceholder.typicode.com/posts?userId=" + ev)
  }

}
