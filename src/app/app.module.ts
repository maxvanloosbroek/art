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

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SelectInterestPage,
    LearningTopicsPage,
    ConfirmPage,
    AudioModal
  ],
  imports: [
    IonicAudioModule.forRoot(defaultAudioProviderFactory), 
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SelectInterestPage,
    ConfirmPage,
    LearningTopicsPage,
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
