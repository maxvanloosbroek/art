import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { ZoomPanDirective } from '../../components/zoom-pan';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'pg-image-zoom',
  templateUrl: 'image-zoom.html',
})
export class ImageZoomComponent implements OnInit{
  @ViewChild(ZoomPanDirective) zoomPan: ZoomPanDirective;
  mapImg = 'assets/imgs/map.png';
  img: string;

  constructor(
    private viewCtrl: ViewController,
    params: NavParams
  ) {
    this.img = params.get('img');
  }

  ngOnInit() {
    console.log('viewchild',this.zoomPan);
  }

  close() {
    this.viewCtrl.dismiss()
      .catch((error) => {console.log(error)});;
  }

  zoomIn(){
    this.zoomPan.zoomIn();
  }

  zoomOut(){
    this.zoomPan.zoomOut();
  }

}
