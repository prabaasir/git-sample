import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'pagination';

  collection=[];

  constructor() {
    for(let i=1;i<=50;i++){
      this.collection.push(i)
    }
  }
}
