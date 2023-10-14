import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  myFirstSnap!: FaceSnap;
  myOtherSnap!: FaceSnap;
  myLastSnap!: FaceSnap;

  ngOnInit(): void {
    this.myFirstSnap = new FaceSnap(
      'Etienne',
      `L'amour de ma vie`,
      60,
      'https://images.pexels.com/photos/18536009/pexels-photo-18536009/free-photo-of-noir-et-blanc-mode-homme-hiver.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      new Date()
    );
    this.myOtherSnap = new FaceSnap(
      'Elise',
      `La meilleure amie de l'univers`,
      6,
      'https://images.pexels.com/photos/10456227/pexels-photo-10456227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      new Date()
    );
    this.myLastSnap = new FaceSnap(
      'Guillaume',
      'Le meilleur des amis',
      6,
      'https://images.pexels.com/photos/18360787/pexels-photo-18360787/free-photo-of-homme-fleurs-blond-debout.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      new Date()
    );
  }
}
