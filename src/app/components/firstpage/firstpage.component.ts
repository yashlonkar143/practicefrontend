import { Component } from '@angular/core';

@Component({
  selector: 'app-f',
  templateUrl: './firstpage.component.html',
  // template:`<h2>change template</h2>`,
  styleUrl: './firstpage.component.css'
  // styles: `h2{color:red}`
})
export class FirstpageComponent {
     title="Aniket Gadekar"

     name="kartik";
     age=22;
     email="kartik@gmail.com";

     User={
      name:"Santosh Biradar",
      age:23,
      email:"santhosh@gmail.com"

     }
}
