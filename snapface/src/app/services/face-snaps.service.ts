import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap.model";

@Injectable({
    providedIn: 'root'
})
export class FaceSnapsService{
    faceSnaps: FaceSnap[] = [
        {
         title: 'Etienne',
         description: `L'amour de ma vie`,
         snaps: 60,
         imageUrl:
           'https://images.pexels.com/photos/18536009/pexels-photo-18536009/free-photo-of-noir-et-blanc-mode-homme-hiver.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
         createdDate: new Date(),
         location: 'Bordeaux',
       },
        {
         title: 'Elise',
         description: `La meilleure amie de l'univers`,
         snaps: 40,
         imageUrl:
           'https://images.pexels.com/photos/10456227/pexels-photo-10456227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
         createdDate: new Date(),
       },
       {
         title: 'Guillaume',
         description: 'Le meilleur des amis',
         snaps: 6,
         imageUrl:
           'https://images.pexels.com/photos/18360787/pexels-photo-18360787/free-photo-of-homme-fleurs-blond-debout.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
         createdDate: new Date(),
         location: 'Hambourg',
       }
     ]

     getAllFaceSnaps(): FaceSnap[]{
        return this.faceSnaps
     }
}