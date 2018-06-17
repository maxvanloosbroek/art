import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-beamer-dialog',
  templateUrl: './beamer-dialog.component.html',
  styleUrls: ['./beamer-dialog.component.css']
})
export class BeamerDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<BeamerDialogComponent>) { }

  ngOnInit() {
  }

}
