import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrl: './eventbinding.component.css'
})
export class EventbindingComponent {

  n1:number = 5;
  n2:number = 8;
  sum:number=0;

  counter=0;




  show(){
    alert("Click on button");
    // let num1:number =5;
    // let num2:number =4;
    // let sum:number =num1+num2;
    // alert(sum);
    this.sum=this.n1+this.n2;

    
  }

  // count:number=0;
  incCounter(){

    this.counter++;
  }

  clearInterval(){
    this.counter=0;
  }

}
