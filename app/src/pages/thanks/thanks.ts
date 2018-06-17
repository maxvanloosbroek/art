import { Component, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AngularFirestore } from 'angularfire2/firestore';

/**
 * Generated class for the ThanksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'page-thanks',
  templateUrl: 'thanks.html',
})
export class ThanksPage {
  public contactInfo = {name: '', email: ''};
  public success: boolean;
  public error: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,    private db: AngularFirestore, private loadingCtrl: LoadingController, private cd: ChangeDetectorRef) {
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ThanksPage');
    // const info$ = this.db.collection("contactInfo").valueChanges();
    // info$.subscribe((data) => {
    //   console.log(data);
    // });
  }

  goToStart() {
    this.navCtrl.setRoot(HomePage);
  }

  sendContactInfo() {
    // console.log('sending info');
    const loading = this.loadingCtrl.create({
      content:'Sending info',
    });
    loading.present();
    this.db.collection("contactInfo").add(this.contactInfo)
    .then(res => {
      // console.log(res);
      loading.dismiss();
      this.success = true;
      this.error = null;
      this.cd.detectChanges();
    })
    .catch(() => {
      this.success = false;
      this.error = 'Oeps, er ging iets niet helemaal goed, probeer het nog eens';
      this.cd.detectChanges();
    });
  }

}
