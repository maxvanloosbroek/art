import { Component, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { LearningTopicsPage } from '../learning-topics/learning-topics';
import { Interest } from '../../app/interfaces';

/**
 * Generated class for the SelectInterestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'page-select-interest',
  templateUrl: 'select-interest.html',
})
export class SelectInterestPage {
  interests: Interest[];
  currentInterest: string;
  fadeOut = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public data: DataProvider,private cd: ChangeDetectorRef, private alertcontroller: AlertController) {
    this.interests = this.data.interests;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectInterestPage');
  }

  setInterest(interest: string, enabled: boolean) {
    if (enabled) {
      this.currentInterest = interest;
      localStorage.setItem('interest', interest);
      this.cd.detectChanges();
    } else {
      const alert = this.alertcontroller.create({
        title: 'Sorry',
        message: `Helaas is deze tourinteresse nog niet beschikbaar in deze conceptversie van Art&nbsp;|&nbsp;See.<br>U kunt nu alleen kiezen voor 'Rotterdam' of 'Muziek'.`,
        buttons: ['Ok']
      });
      this.fadeOut = true;
      alert.present();
    }
  }

  goToLearningTopics(){
    this.navCtrl.push(LearningTopicsPage);
  }

}
