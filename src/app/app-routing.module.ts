import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {WasherRegistrationComponent} from './washer-registration/washer-registration.component';
import {LoginComponent} from './login/login.component';
import {UserRegistrationComponent} from './user-registration/user-registration.component';
import {PlaceOrderComponent} from './place-order/place-order.component';
import {WasherFormComponent} from './washer-form/washer-form.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'washer', component: WasherRegistrationComponent},
  {path: 'login', component: LoginComponent},
  {path: 'user', component: UserRegistrationComponent},
  {path: 'order', component: PlaceOrderComponent},
  {path: 'washerform', component: WasherFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
