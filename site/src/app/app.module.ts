import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { HomeComponent } from './pages/home/home.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatDialogModule} from '@angular/material';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/delay';
import { BeamerDialogComponent } from './beamer-dialog/beamer-dialog.component';

const firebaseConfig = {
  apiKey: 'AIzaSyAh-txccyTcMD_Q2B2rVDGs-e3qPCXKW4I',
  authDomain: 'artsee-yael.firebaseapp.com',
  databaseURL: 'https://artsee-yael.firebaseio.com',
  projectId: 'artsee-yael',
  storageBucket: 'artsee-yael.appspot.com',
  messagingSenderId: '554480614486'
};

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BeamerDialogComponent
  ],
  imports: [
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [BeamerDialogComponent]
})
export class AppModule { }
