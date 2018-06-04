import { Component, ChangeDetectorRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { LearningTopicsPage } from '../learning-topics/learning-topics';

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
  currentInterest: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public data: DataProvider,private cd: ChangeDetectorRef) {
    this.interests = this.data.interests;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelectInterestPage');
  }

  setInterest(interest: string) {
    this.currentInterest = interest;
    localStorage.setItem('interest', interest);
    this.cd.detectChanges();
  }

  goToLearningTopics(){
    this.navCtrl.push(LearningTopicsPage);
  }

}
