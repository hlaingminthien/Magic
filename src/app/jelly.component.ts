import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'jelly',
  templateUrl: './jelly.component.html',
})
export class JellyComponent {
  constructor(private ngZone: NgZone ) { }

  ngOnInit() {
    
  }
}
