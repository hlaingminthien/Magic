import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'sleepingmask',
  templateUrl: './sleepingmask.component.html',
})
export class SleepingmaskComponent {
  constructor(private ngZone: NgZone ) { }

  ngOnInit() {
    
  }
}
