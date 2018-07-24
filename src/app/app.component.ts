import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heading = 'Activity Stream';
    
    currentSelected: object;

    onSelect(data) {
      console.log(data.value);
      this.currentSelected = data;
      console.log('User in parent ' , this.currentSelected);

    }
}
