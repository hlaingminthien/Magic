import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { HomeComponent } from './home.component';
import { AboutusComponent } from './aboutus.component';
import { ContactusComponent } from './contactus.component';
import { SkincareProductComponent } from './skincareproduct.component';
import { HaircareProductComponent } from './haircareproduct.component';
import { HealthcareProductComponent } from './healthcateproduct.component';
import { CleanserComponent } from './cleanser.component';
import { BBcreamComponent } from './bbcream.component';
import { SleepingmaskComponent } from './sleepingmask.component';
import { PowderComponent } from './powder.component';
import { EmulsionComponent } from './emulsion.component';
import { FacialMaskComponent } from './facialmask.component';
import { EssenceComponent } from './essence.component';
import { TonerComponent } from './toner.component';
import { LoseweightsetComponent } from './loseweightset.component';
import { JellyComponent } from './jelly.component';
import { CollagenComponent } from './collagen.component';
import { ConditionerComponent } from './conditioner.component';
import { GelComponent } from './gel.component';
import { ShampooComponent } from './shampoo.component';
import { SoapComponent } from './soap.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,   
    HomeComponent, 
    AboutusComponent, 
    ContactusComponent,
    SkincareProductComponent,
    HealthcareProductComponent,
    HaircareProductComponent,
    CleanserComponent,
    BBcreamComponent,
    SleepingmaskComponent,
    PowderComponent,
    EmulsionComponent,
    FacialMaskComponent,
    EssenceComponent,
    TonerComponent,
    LoseweightsetComponent,
    JellyComponent,
    CollagenComponent,
    ConditionerComponent,
    GelComponent,
    ShampooComponent,
    SoapComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
