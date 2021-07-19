import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
})
export class HomeComponent {
  startIndex = 0;
  Imagedata = ['/assets/Carousel/1.png', '/assets/Carousel/2.png', '/assets/Carousel/3.png', '/assets/Carousel/4.png'];
  active = 1;
  skinpage:number = 1;
  healthpage:number = 1;
  hairpage:number = 1;

  constructor(private ngZone: NgZone ) { }

  ngOnInit() {
    this.Repeat();
  }

  Repeat() {
    setTimeout(() => {
      this.__FunctionSlide();
      this.Repeat();
    }, 5000);
  }

  __FunctionSlide() {
    const slides = Array.from(document.getElementsByClassName('mall-show-slide'));
    if (slides === []) {
      this.Repeat();
    }
    for (const x of slides) {
      const y = x as HTMLElement;
      y.style.display = 'none';
    }
    if (this.startIndex > slides.length - 1) {
      this.startIndex = 0;
      const slide = slides[this.startIndex] as HTMLElement;
      slide.style.display = 'block';
      this.startIndex++;
    } else {

      const slide = slides[this.startIndex] as HTMLElement;
      slide.style.display = 'block';
      this.startIndex++;
    }
  }

  myFunction(data:any) {
    this.active = data;
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
