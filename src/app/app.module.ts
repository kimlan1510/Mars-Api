import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { masterFirebaseConfig } from './firebase-api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppComponent } from './app.component';
import { RoverFormComponent } from './rover-form/rover-form.component';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { UserPhotosListComponent } from './user-photos-list/user-photos-list.component';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { PublicComponent } from './public/public.component';
import { PrivateComponent } from './private/private.component';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    RoverFormComponent,
    PhotosListComponent,
    UserPhotosListComponent,
    PublicComponent,
    PrivateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
