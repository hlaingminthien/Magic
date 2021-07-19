import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'contactus',
  templateUrl: './contactus.component.html',
})
export class ContactusComponent {
  constructor(private ngZone: NgZone ) { }

  ngOnInit() {
    
  }
}
