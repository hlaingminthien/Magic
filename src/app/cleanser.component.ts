import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'cleanser',
  templateUrl: './cleanser.component.html',
})
export class CleanserComponent {
  constructor(private ngZone: NgZone ) { }

  ngOnInit() {
    
  }
}
