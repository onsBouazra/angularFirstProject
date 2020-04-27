import { Component, OnChanges, Input, Output,EventEmitter } from '@angular/core';


@Component({
    selector:'star-pm',
    templateUrl:'./star.component.html',
    styleUrls:['./star.component.css']
})
export class StarComponent implements OnChanges{
  
   
    starWidth :number;
    @Input() rating:number;
    @Output() ratingClicked:EventEmitter<string>=new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth=this.rating*75/5;
    }
    onClick(){
      this.ratingClicked.emit(`clicked ${ this.rating} `); 
       }
   
}