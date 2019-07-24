import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {UserRegistrationComponent} from './user-registration/user-registration.component';
import {PlaceOrderComponent} from './place-order/place-order.component';
import {WasherFormComponent} from './washer-form/washer-form.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {ClothingQuantitiesComponent} from './clothing-quantities/clothing-quantities.component';
import {EmailComponent} from './email/email.component';
import {ProfileComponent} from './profile/profile.component';
import {RegistrationInfoComponent} from './registration-info/registration-info.component';
import {WasherInfoComponent} from './washer-info/washer-info.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'user', component: UserRegistrationComponent},
  {path: 'order', component: PlaceOrderComponent},
  {path: 'washer', component: WasherFormComponent},
  {path: 'aboutus', component: AboutUsComponent},
  {path: 'emaillog', component: EmailComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'washerinfo', component: WasherInfoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
