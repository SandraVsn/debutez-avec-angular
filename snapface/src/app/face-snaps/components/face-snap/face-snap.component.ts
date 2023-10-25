import { Component, Input } from '@angular/core';
import { FaceSnap } from '../../../core/models/face-snap.model';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent {
  @Input() faceSnap!: FaceSnap;

  buttonText!: string;

  constructor(private route: Router) {}

  ngOnInit() {
    this.buttonText = 'Oh Snap!';
  }

  onViewFaceSnap() {
    this.route.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
