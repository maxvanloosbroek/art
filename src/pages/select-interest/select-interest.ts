import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

/**
 * Generated class for the SelectInterestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-select-interest',
  templateUrl: 'select-interest.html',
})
export class SelectInterestPage {
  interests: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public data: DataProvider) {
    this.interests = this.data.interests;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectInterestPage');
  }

}
