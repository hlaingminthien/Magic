import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus.component';
import { BBcreamComponent } from './bbcream.component';
import { CleanserComponent } from './cleanser.component';
import { CollagenComponent } from './collagen.component';
import { ConditionerComponent } from './conditioner.component';
import { ContactusComponent } from './contactus.component';
import { EmulsionComponent } from './emulsion.component';
import { EssenceComponent } from './essence.component';
import { FacialMaskComponent } from './facialmask.component';
import { GelComponent } from './gel.component';
import { HaircareProductComponent } from './haircareproduct.component';
import { HealthcareProductComponent } from './healthcateproduct.component';
import { HomeComponent } from './home.component';
import { JellyComponent } from './jelly.component';
import { LoseweightsetComponent } from './loseweightset.component';
import { PowderComponent } from './powder.component';
import { ProductsComponent } from './products.component';
import { ShampooComponent } from './shampoo.component';
import { SkincareProductComponent } from './skincareproduct.component';
import { SleepingmaskComponent } from './sleepingmask.component';
import { SoapComponent } from './soap.component';
import { TonerComponent } from './toner.component';


const routes: Routes = [

  // home
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  
  //products
  { path: 'products', component: ProductsComponent },

  //about us
  { path: 'aboutus', component: AboutusComponent },
  
  //contact us
  { path: 'contactus', component: ContactusComponent },

  //skincareproduct
  { path: 'skincareproduct', component: SkincareProductComponent },

  //healthcareproduct
  { path: 'healthcareproduct', component: HealthcareProductComponent },

  //haircareproduct
  { path: 'haircareproduct', component: HaircareProductComponent },

  // skincare product
  //cleanser detail
  { path: 'cleanser', component: CleanserComponent },

  //bbcream detail
  { path: 'bbcream', component: BBcreamComponent },

  //sleepingmask detail
  { path: 'sleepingmask', component: SleepingmaskComponent },

  //Powder detail
  { path: 'powder', component: PowderComponent },

  //Emulsion detail
  { path: 'emulsion', component: EmulsionComponent },

  //facial mask detail
  { path: 'facialmask', component: FacialMaskComponent },

  //Essence detail
  { path: 'essence', component: EssenceComponent },

  //Toner detail
  { path: 'toner', component: TonerComponent },

  // Healthcare product
  //lose weight set detail
  { path: 'loseweightset', component: LoseweightsetComponent },

  //Collagen detail
  { path: 'collagen', component: CollagenComponent },

  //Jelly detail
  { path: 'jelly', component: JellyComponent },

  // Healthcare product
  //Soap detail
  { path: 'soap', component: SoapComponent },

  //Conditioner detail
  { path: 'conditioner', component: ConditionerComponent },

  //gel detail
  { path: 'gel', component: GelComponent },

  //Shampoo detail
  { path: 'shampoo', component: ShampooComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
