import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  interval$!: Observable<number>;

  ngOnInit(): void {
    this.interval$ = interval(1000);
  }
}
