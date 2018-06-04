import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SelectInterestPage } from '../select-interest/select-interest';
import { HomePage } from '../home/home';

/**
 * Generated class for the ConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-confirm',
  templateUrl: 'confirm.html',
})
export class ConfirmPage {
  interest: string;
  learningTopic: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.interest = localStorage.getItem('interest');
    this.learningTopic = localStorage.getItem('topic');
    console.log(this.interest,this.learningTopic)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmPage');
  }

  startTour() {

  }

  restart() {
    this.navCtrl.setRoot(HomePage);
  }

}
