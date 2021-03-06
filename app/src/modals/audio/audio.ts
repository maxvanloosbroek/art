import { Component, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AudioProvider } from 'ionic-audio';
import { ITrackConstraint } from 'ionic-audio';

/**
 * Generated class for the AudioPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'modal-audio',
  templateUrl: 'audio.html',
})
export class AudioModal implements OnDestroy{
  myTracks: ITrackConstraint[];
  track: ITrackConstraint;
  playlist: ITrackConstraint[] = [];

  currentIndex: number = -1;
  currentTrack: ITrackConstraint;

  constructor(public navCtrl: NavController, public navParams: NavParams, private _audioProvider: AudioProvider, private _cdRef: ChangeDetectorRef) {
    // plugin won't preload data by default, unless preload property is defined within json object - defaults to 'none'
    this.myTracks = [{
      src: 'assets/audio/sample.mp3',
      artist: 'Artist',
      title: 'Sample',
      art: 'assets/imgs/logo.png',
      preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
    }];
    const file = this.navParams.get('file');
    const title = this.navParams.get('title');
    if (file) {
      this.myTracks = [{
        src: file,
        artist: 'Tour',
        title,
        preload: 'metadata' // tell the plugin to preload metadata such as duration for this track, set to 'none' to turn off
      }];
      this.play(this.myTracks[0], 0);
    } else {
      const name = this.navParams.get('name');
      const track = this.myTracks.findIndex(track => track.title.toLowerCase().indexOf(name) > -1);
      this.play(this.myTracks[track], track);
    }
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this._audioProvider.stop();
  }

  add(track: ITrackConstraint) {
    this.playlist.push(track);
  }

  play(track: ITrackConstraint, index: number) {
      this.currentTrack = track;
      this.currentIndex = index;
  }

  // next() {
  //   // if there is a next track on the list play it
  //   if (this.playlist.length > 0 && this.currentIndex >= 0 && this.currentIndex < this.playlist.length - 1) {
  //     let i = this.currentIndex + 1;
  //     let track = this.playlist[i];
  //     this.play(track, i);
  //     this._cdRef.detectChanges();  // needed to ensure UI update
  //   } else if (this.currentIndex == -1 && this.playlist.length > 0) {
  //     // if no track is playing then start with the first track on the list
  //     this.play(this.playlist[0], 0);
  //   }
  // }

  // onTrackFinished(track: any) {
  //   this.next();
  // }

  clear() {
    this.playlist = [];
  }

}
