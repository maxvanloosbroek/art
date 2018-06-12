import { Component, Input, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';
import { Tour } from '../../app/interfaces';
import { AngularFirestore } from 'angularfire2/firestore';

/**
 * Generated class for the TourPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tour',
  templateUrl: 'tour.html',
})
export class TourPage implements OnInit{
  @Input() tourSlide: any[];

  tourName: string;
  tour: Tour;
  tours: Tour[];

  constructor(
    public navCtrl: NavController,
    private navParams: NavParams,
    private data: DataProvider,
    private db: AngularFirestore
  ) {
    this.tourName = this.navParams.get('tour');
    this.tours = this.data.tours;
    console.log(this.tours);
  }

  ngOnInit(): void {
    console.log(this.data);
    this.tour = this.data.tours.find(tour => tour.name === this.tourName);
  }

  getImage(image: string){
    return `url('assets/art/${image}')`
  }

  onSlideChanged(event?: any){
    const slide = this.tour.slides[event.getActiveIndex()];

    this.db.collection("activeSlide").add({
      ...slide,
      time: new Date()
    })
    .then(res => {
      console.log(res);
    })
    .catch(err => console.log(err));
  }

}
