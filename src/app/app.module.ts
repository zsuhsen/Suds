import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { WasherRegistrationComponent } from './washer-registration/washer-registration.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FirebaseService} from './services/firebase.service';
import {MatButtonModule, MatInputModule, MatSliderModule, MatDialogModule } from '@angular/material';
import { NewsLetterComponent } from './news-letter/news-letter.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { WasherFormComponent } from './washer-form/washer-form.component';
import { HelpComponent } from './help/help.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    WasherRegistrationComponent,
    FooterComponent,
    LoginComponent,
    UserRegistrationComponent,
    PlaceOrderComponent,
    NewsLetterComponent,
    WasherFormComponent,
    HelpComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase, 'suds-delivery'),
    AngularFirestoreModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSliderModule,
    MatDialogModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
