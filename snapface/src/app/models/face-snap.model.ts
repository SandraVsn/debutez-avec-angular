export class FaceSnap {
  constructor(
    public title: string,
    public description: string,
    public snaps: number,
    public imageUrl: string,
    public createdDate: Date
  ) {
    this.title = title;
    this.description = description;
    this.createdDate = createdDate;
    this.snaps = snaps;
    this.imageUrl = imageUrl;
  }
}
