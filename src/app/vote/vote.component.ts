import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  @Input() quote:Quote;

  @Output() voteUp = new EventEmitter<boolean>();

  @Output() voteDown = new EventEmitter<boolean>();

  upVote(){
    this.voteUp.emit(true);
  }

  downVote(){
    this.voteDown.emit(true);
  }

  constructor() { }

  ngOnInit() {
  }

}
