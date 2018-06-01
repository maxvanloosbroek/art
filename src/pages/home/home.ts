import { Component, Provider } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ModalController, Modal } from 'ionic-angular';
import { AudioModal } from '../../modals/audio/audio';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  modal: Modal;

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalController: ModalController) {

  }

  audioPlayer(name: string){
    this.modal = this.modalController.create(AudioModal, {
      name
    },{
      cssClass: 'auto-height',
      showBackdrop: true
    });
    this.modal.present();
  }

}
