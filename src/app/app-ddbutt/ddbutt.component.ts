import { Component, OnInit } from '@angular/core' ;
import { ViewChild } from '@angular/core';


@Component({
    selector: 'app-ddbutt',
    templateUrl: './ddbutt.component.html', 
    styles:[`
    .blue {
    color: red;
    }`
    ]

}) 

export class ddbuttComponent implements OnInit {
    allowNewParagraph = false;
     paragraphCreated = false;
     buttonclicks : MouseEvent[]= [];
      @ViewChild ("cat")ccc;

      

     ngOnInit(){

     }
    
     onCreateParagraph(click:MouseEvent)  {
        this.buttonclicks.push (click) ; 
        this.paragraphCreated = true;
         console.log(this.ccc);
         
     }
     getColor() {
      return this.buttonclicks.length >= 5 ? 'blue' : 'white';
     }
     


}