import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'magic';
  active = 1;

  constructor(private ngZone: NgZone ) { }

  ngOnInit() {
    this.active = Number(localStorage.getItem('activmenu'));
    console.log(this.active);
  }

  myFunction(data:any) {
    this.active = data;
    localStorage.setItem('activmenu', JSON.stringify(this.active));
  }
  
}
