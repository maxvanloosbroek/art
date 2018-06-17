import { Component, OnInit, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import {MatDialog} from '@angular/material';

import { Observable } from 'rxjs/Observable';
import { BeamerDialogComponent } from '../../beamer-dialog/beamer-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  slide$: Observable<{file: string, time: any}>;
  image$: Observable<string>;
  fade = false;

  constructor(
    private db: AngularFirestore,
    private cd: ChangeDetectorRef,
    private dialog: MatDialog
  ) {
      this.slide$ = db.collection('activeSlide', collection => collection.orderBy('time', 'desc').limit(1))
        .valueChanges()
        .filter(slides => slides !== undefined)
        .filter(slide => (slide[0] as any).beamer === 1)
        .map(slides => {
          this.fade = true;
          setTimeout(() => {
            this.fade = false;
          }, 800);
          return slides[0] as {file: string; time: any};
        })
        .delay(400);
      this.image$ = this.slide$.map( slide => `url('assets/art/${slide.file}')`);
  }

  ngOnInit() {
    const beamer = localStorage.getItem('beamer');
    if (!beamer) {
      const dialogRef = this.dialog.open(BeamerDialogComponent, {
        width: '450px',
      });

      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          localStorage.setItem('beamer', result.toString());
        }
      });
    }
  }

  ngOnDestroy(): void {
  }

}
