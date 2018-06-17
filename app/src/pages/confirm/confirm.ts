import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { SelectInterestPage } from '../select-interest/select-interest';
import { HomePage } from '../home/home';
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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
  ) {
    this.interest = localStorage.getItem('interest');
    this.learningTopic = localStorage.getItem('topic');
    // console.log(this.interest,this.learningTopic)
  }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ConfirmPage');
  }

  startTour() {
    const name = this.interest.toLowerCase() + '-' + this.learningTopic.toLowerCase();
    this.navCtrl.push(TourPage, {
      tour: name
    });
  }

  restart() {
    this.navCtrl.setRoot(HomePage);
  }

}
