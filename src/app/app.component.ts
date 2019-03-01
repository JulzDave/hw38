import { Component } from '@angular/core';


function log(target, name, descriptor){
  console.log(target, name, descriptor);
  const original = descriptor.value;
  original()
  descriptor.value = ()=> {
    console.log("This function has been hacked!")
  }
  return descriptor
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hwl38';
  
constructor(){
  this.aSimpleMethod()
}

  @log 
  aSimpleMethod(){
    console.log("Hey there!")
  }
}
