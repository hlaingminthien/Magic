import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'shampoo',
  templateUrl: './shampoo.component.html',
})
export class ShampooComponent {
  constructor(private ngZone: NgZone ) { }

  ngOnInit() {
    
  }
}
