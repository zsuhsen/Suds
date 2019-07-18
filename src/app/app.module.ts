import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AngularFireAuthModule} from '@angular/fire/auth';

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
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';
import { ProfileComponent } from './profile/profile.component';
import { RatingComponent } from './rating/rating.component';
import { RegistrationInfoComponent } from './registration-info/registration-info.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { WasherInfoComponent } from './washer-info/washer-info.component';
import { ImageUploadComponent } from './image-upload/image-upload.component';


export const firebaseConfig = {
  apiKey: 'AIzaSyDfxu-PSpd-h1MyTaryL1L9I2gVUcEFPYo',
  authDomain: 'suds-delivery.firebaseapp.com',
  databaseURL: 'https://suds-delivery.firebaseio.com',
  projectId: 'suds-delivery',
  storageBucket: 'suds-delivery.appspot.com',
  messagingSenderId: '1046111328730'
};





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
    ClothingQuantitiesComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent,
    ProfileComponent,
    RatingComponent,
    RegistrationInfoComponent,
    GoogleMapComponent,
    WasherInfoComponent,
    ImageUploadComponent,
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
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
    MatRadioModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAALekl-TxySBy9yfEzuTs-Y6H35dovezI'
    })

  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
