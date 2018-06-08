import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { IonicAudioModule, defaultAudioProviderFactory } from 'ionic-audio';
import { AudioModal } from '../modals/audio/audio';
import { SelectInterestPage } from '../pages/select-interest/select-interest';
import { DataProvider } from '../providers/data/data';
import { LearningTopicsPage } from '../pages/learning-topics/learning-topics';
import { ConfirmPage } from '../pages/confirm/confirm';
import { TourPage } from '../pages/tour/tour';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAh-txccyTcMD_Q2B2rVDGs-e3qPCXKW4I",
  authDomain: "artsee-yael.firebaseapp.com",
  databaseURL: "https://artsee-yael.firebaseio.com",
  projectId: "artsee-yael",
  storageBucket: "artsee-yael.appspot.com",
  messagingSenderId: "554480614486"
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SelectInterestPage,
    LearningTopicsPage,
    ConfirmPage,
    TourPage,
    AudioModal
  ],
  imports: [
    IonicAudioModule.forRoot(defaultAudioProviderFactory), 
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SelectInterestPage,
    ConfirmPage,
    LearningTopicsPage,
    TourPage,
    HomePage,
    AudioModal
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}
