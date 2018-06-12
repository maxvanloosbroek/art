import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  tourStarts$: Observable<{name: string, time: any}>;
  slide$: Observable<{file: string, time: any}>;
  image$: Observable<string>;

  constructor(
    private db: AngularFirestore,
    private cd: ChangeDetectorRef
  ) {
    this.tourStarts$ = db.collection('tourStart')
      .valueChanges()
      .filter(data => data !== undefined)
      .map(data => data as {name: string; time: any}[])
      .map(items => items.sort((a, b) => b.time > a.time ? 1 : -1 ))
      .map((data) => {
        if (data[0] && data[0].time) {
          console.log(data[0].time);
          data[0].time = new Date(data[0].time.seconds * 1000);
        }
        return data[0];
      });
      this.slide$ = db.collection('activeSlide', collection => collection.orderBy('time', 'desc').limit(1))
        .valueChanges()
        .filter(slides => slides !== undefined)
        .map(slides => slides[0] as {file: string; time: any});
      this.image$ = this.slide$.map( slide => `url('assets/art/${slide.file}')`);
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
  }

}
