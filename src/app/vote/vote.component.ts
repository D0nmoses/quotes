import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  @Input() quote:Quote;

  @Output() isComplete = new EventEmitter<boolean>();


  upVote(index){
    this.quote[index].upVotes += 1;//adds one on mouse click
  }

  downVote(index){
    this.quote[index].downVotes += 1;//adds one on mouse click
  }

  constructor() { }

  ngOnInit() {
  }

}
