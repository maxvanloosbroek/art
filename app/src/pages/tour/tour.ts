import { Component, Input, OnInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { NavController, NavParams, Slides, Modal, ModalController } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { Tour } from '../../app/interfaces';
import { AngularFirestore } from 'angularfire2/firestore';
import { AudioModal } from '../../modals/audio/audio';
import { ThanksPage } from '../thanks/thanks';
import { ImageZoomComponent } from '../../components/image-zoom/image-zoom';

/**
 * Generated class for the TourPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'page-tour',
  templateUrl: 'tour.html',
})
export class TourPage implements OnInit{
  @Input() tourSlide: any[];
  @ViewChild(Slides) slides: Slides;

  tourName: string;
  tour: Tour;
  tours: Tour[];
  hideNext: boolean = false;
  modal: Modal;
  interest: string;
  learningTopic: string;
  instructions = true;

  constructor(
    public navCtrl: NavController,
    private navParams: NavParams,
    private data: DataProvider,
    private db: AngularFirestore,
    private modalController: ModalController
  ) {
    this.tourName = this.navParams.get('tour');
    this.tours = this.data.tours;
    // console.log(this.tours);
  }

  ngOnInit(): void {
    this.interest = localStorage.getItem('interest');
    this.learningTopic = localStorage.getItem('topic');
    // console.log(this.data);
    this.tour = this.data.tours.find(tour => tour.name === this.tourName);
  }

  ionViewDidEnter(){
    let beamer = parseInt(localStorage.getItem('beamer'), 10);
    if (!beamer) {
      beamer = 1;
    }
    // console.log({...this.tour.slides[0], time: new Date(), beamer});
    this.db.collection("activeSlide").add({
      ...this.tour.slides[0],
      time: new Date(),
      beamer
    })
    .then(res => {
      // console.log(res);
    })
    .catch(err => console.log(err));
  }

  getImage(image: string){
    // return `url('assets/art/${image}')`;
    return `assets/art/${image}`;
  }

  onSlideChanged(event: any){
    const slide = this.tour.slides[event.getActiveIndex()];
    if(this.slides !== undefined) {
      // console.log(this.slides.getActiveIndex() >= this.slides.length() - 1)
      if (this.slides.getActiveIndex() >= this.slides.length() - 1) {
        this.hideNext = true;
      } else {
        this.hideNext = false;
      }
    }
    let beamer = parseInt(localStorage.getItem('beamer'), 10);
    if (!beamer) {
      beamer = 1;
    }
    this.db.collection("activeSlide").add({
      ...slide,
      time: new Date(),
      beamer
    })
    .then(res => {
      console.log(res);
    })
    .catch(err => console.log(err));
  }

  audioPlayer(index: number, title: string, music?: boolean){
    let file;
    if (!music) {
      file = 'assets/audio/' + this.interest +'_' + this.learningTopic + '_' + (index + 1) + '.mp3';
    } else {
      file = 'assets/audio/' + this.interest +'_' + this.learningTopic + '_song_' +  (index + 1) + '.mp3';
    }
    // console.log(file);
    this.modal = this.modalController.create(AudioModal, {
      file,
      title
    },{
      cssClass: 'auto-height ' + this.learningTopic,
      showBackdrop: true
    });
    this.modal.present();
  }

  back(){
    if(this.slides !== undefined) {
      if ( this.slides.getActiveIndex() < 1) {
        this.navCtrl.pop();
      } else {
        this.slides.slidePrev();
      }
    } else {
      this.navCtrl.pop();
    }
  }

  forward(){
    if(this.slides !== undefined) {
      this.slides.slideNext();
    }
  }

  end(){
    this.navCtrl.push(ThanksPage);
  }

  viewMap(img: string, enabled: boolean) {
    if (enabled) {
      // console.log('view map');
      const modal = this.modalController.create(ImageZoomComponent, {img}, {
        showBackdrop: true,
        enableBackdropDismiss: false,
        cssClass: 'modal-force-backdrop modal--image-zoom'
      });
  
      modal.present();
    }
  }

}
