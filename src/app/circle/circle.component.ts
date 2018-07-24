import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Circle } from './circle';
import { CircleService } from '../circle.service';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements OnInit {

 circles: Circle[];
  @Output() selectedCircle = new EventEmitter<any>();
  constructor(private Circleservice : CircleService) { }



  getCircles(){
    this.Circleservice.getCircles().subscribe(
      data => {
        this.circles = data.json();
      }
    )
  }

  selectCircle(circledata:string)
  {
   
    
   
   
       console.log('Circle name' ,circledata);
       let currentCircleName ={
         type :'circle',value:circledata
       }
       this.selectedCircle.emit(currentCircleName);

  }
 
  ngOnInit() {
 

  this.getCircles();
 
  }
}


