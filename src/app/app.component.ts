import { Component, NgZone } from '@angular/core';
import { LocalizationService } from './localization.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'magic';
  active:number = 1;
  lang:string = 'myn';  // Default language is Myanmar

  constructor(private ngZone: NgZone,private localizationService: LocalizationService ) { }

  ngOnInit() {
    if(localStorage.getItem('activmenu')){
      this.active = Number(localStorage.getItem('activmenu'));
    }
    else {
      this.active = 1;
    }
    console.log(this.active);
  }

  myFunction(data:number) {
    this.active = data;
    localStorage.setItem('activmenu', JSON.stringify(this.active));
  }

  changeLanguage(data:string){
    this.lang = data;
    localStorage.setItem('language', data);
    this.localizationService.initService();
  }
  
}
