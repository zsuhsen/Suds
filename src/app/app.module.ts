import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FirebaseService} from './services/firebase.service';
import {
  MatButtonModule,
  MatInputModule,
  MatSliderModule,
  MatDialogModule,
  MatTableModule,
  MatDividerModule,
  MatRadioModule
} from '@angular/material';
import { NewsLetterComponent } from './news-letter/news-letter.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { WasherFormComponent } from './washer-form/washer-form.component';
import { HelpComponent } from './help/help.component';
import { UserFormComponent } from './user-form/user-form.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ClothingQuantitiesComponent } from './clothing-quantities/clothing-quantities.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    FooterComponent,
    LoginComponent,
    UserRegistrationComponent,
    PlaceOrderComponent,
    NewsLetterComponent,
    WasherFormComponent,
    HelpComponent,
    UserFormComponent,
    AboutUsComponent,
    ClothingQuantitiesComponent
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
    MatDialogModule,
    MatTableModule,
    MatDividerModule,
    MatRadioModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
