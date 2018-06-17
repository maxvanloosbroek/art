import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NavController, NavParams, ModalController, Modal, AlertController } from 'ionic-angular';
import { AudioModal } from '../../modals/audio/audio';
import { SelectInterestPage } from '../select-interest/select-interest';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  modal: Modal;

  constructor(public navCtrl: NavController, public navParams: NavParams, private modalController: ModalController, public alertCtrl: AlertController) {

  }

  ionViewDidEnter(){
    const beamer = localStorage.getItem('beamer');
    if(!beamer) {
      const alert = this.alertCtrl.create({
        title:' Which beamer do you want to select',
        buttons: [
          {
              text: '1',
              handler: () => {
                  alert.dismiss(1);
                  return false;
              }
          }, {
              text: '2',
              handler: () => {
                  alert.dismiss(2);
                  return false;
              }
          }, {
            text: '3',
            handler: () => {
                alert.dismiss(3);
                return false;
            }
          }, {
            text: 'Annuleer',
            handler: () => {
                alert.dismiss();
                return false;
            }
        }]
      });
      alert.present();
      alert.onDidDismiss((value) => {
        if (value) localStorage.setItem('beamer', value.toString())
      })
    }
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

  start(){
    this.navCtrl.push(SelectInterestPage);
  }

}
