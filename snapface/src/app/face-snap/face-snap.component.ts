import { Component } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent {
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  snaped!: boolean;

  ngOnInit() {
    this.title = 'Etienne';
    this.description = "L'amour de ma vie";
    this.createdDate = new Date();
    this.snaps = 8;
    this.imageUrl =
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg';
    this.snaped = false;
  }

  onSnap() {
    if (this.snaped) {
      this.snaps--;
      this.snaped = false;
    } else {
      this.snaps++;
      this.snaped = true;
    }
  }
}
