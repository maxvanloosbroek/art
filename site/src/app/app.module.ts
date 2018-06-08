import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { MusicSelfComponent } from './pages/music-self/music-self.component';
import { HomeComponent } from './pages/home/home.component';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';

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
    MusicSelfComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'music-self', component: MusicSelfComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
