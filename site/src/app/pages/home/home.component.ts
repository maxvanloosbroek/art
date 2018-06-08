import { Component, OnInit } from '@angular/core';
import { AngularFirestore, DocumentChangeAction } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tourStarts$: Observable<{name: string, time: any}>;

  constructor(
    private db: AngularFirestore
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
      db.collection('tourStart').valueChanges().subscribe((data) => console.log(data));
  }

  ngOnInit() {
  }

}
