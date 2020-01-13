export class Quote {
  
  showDescription:boolean;
  upVotes:number;
  downVotes:number;

  constructor(
    public id: number,
    public name: string,
    public description: string,
    public author: string,
    public dateCreated: Date,
    ) {
      this.showDescription = false;
      this.upVotes = 0;
      this.downVotes = 0;
  }
}
