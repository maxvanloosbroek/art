import { Component, ChangeDetectorRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ConfirmPage } from '../confirm/confirm';
import { DataProvider } from '../../providers/data/data';
import { LearningTopic } from '../../app/interfaces';

/**
 * Generated class for the LearningTopicsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-learning-topics',
  templateUrl: 'learning-topics.html',
})
export class LearningTopicsPage {
  topics: LearningTopic[];
  currentTopic: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public data: DataProvider, private cd: ChangeDetectorRef) {
    this.topics = data.learningTopics;
    console.log(data.learningTopics);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LearningTopicsPage');
  }

  selectLearningTopic(topic) {
    this.currentTopic = topic;
    localStorage.setItem('topic', topic);
    this.cd.detectChanges();
  }

  goToConfirmPage(){
    this.navCtrl.push(ConfirmPage)
  }

}
