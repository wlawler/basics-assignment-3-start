import { Component, OnInit } from '@angular/core' ;

@Component({
    selector: 'app-ddbutt',
    templateUrl: './ddbutt.component.html', 


}) 

export class ddbuttComponent implements OnInit {
    allowNewParagraph = false;
     paragraphCreated = false; 

     ngOnInit(){

     }
     onCreateParagraph() {
         this.paragraphCreated = true;
     }

}