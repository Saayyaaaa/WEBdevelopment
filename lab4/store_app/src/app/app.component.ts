import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{
  protected readonly onclick = onclick;
  constructor() {
  }
  gadgetsEvent({event}: { event: any }){
    console.log(event)
  }
  clothesEvent({event}: {event: any}){
    console.log(event)
  }
  toysEvent({event}: {event: any}){
    console.log(event)
  }
  dishesEvent({event}: {event: any}){
    console.log(event)
  }
}