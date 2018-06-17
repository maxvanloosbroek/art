import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { SelectInterestPage } from '../select-interest/select-interest';
import { HomePage } from '../home/home';
import { AngularFirestore, DocumentChangeAction } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import { TourPage } from '../tour/tour';

/**
 * Generated class for the ConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'page-confirm',
  templateUrl: 'confirm.html',
})
export class ConfirmPage {
  interest: string;
  learningTopic: string;
  tourStarts$: any;


  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private db: AngularFirestore,
    private loadingCtrl: LoadingController,
  ) {
    this.interest = localStorage.getItem('interest');
    this.learningTopic = localStorage.getItem('topic');
    console.log(this.interest,this.learningTopic)
    this.tourStarts$ = db.collection("tourStart").valueChanges();
    this.tourStarts$.subscribe((data) => {
      console.log(data);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmPage');
  }

  startTour() {
    const loading = this.loadingCtrl.create({
      content:'Starting tour',
    });
    loading.present();
    
    const dateTime = (new Date()).toDateString();
    const name = this.interest.toLowerCase() + '-' + this.learningTopic.toLowerCase();
    this.db.collection("tourStart").add({
      name,
      time: new Date()
    })
    .then(res => {
      console.log(res);
      loading.dismiss();
      this.navCtrl.push(TourPage, {
        tour: name
      });
    })
    .catch(err => console.log(err));
  }

  restart() {
    this.navCtrl.setRoot(HomePage);
  }

}
