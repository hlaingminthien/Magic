import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  skinpage:number = 1;
  healthpage:number = 1;
  hairpage:number = 1;

  constructor(private ngZone: NgZone ) { }

  ngOnInit() {
    
  }

  showskinpage(param:number){
    this.skinpage = param;
    console.log(this.skinpage);
  }

  showhealthpage(param:number){
    this.healthpage = param
  }

  showhairpage(param:number){
    this.hairpage = param;
  }

}
