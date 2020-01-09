import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]=[
    new Quote(1,"Freidrich Nietzsche","That which does not kill us makes us stronger","Don Moses",new Date(1879,3,21)),
    new Quote(2,"Albert Camus","Autumn is a second spring when every leaf is a flower","Maggie Ng'ethe",new Date(1939,4,22)),
    new Quote(3,"Jean-Paul Sartre","When the rich wage war it's the poor who die.","Monica Oyugi",new Date(1955,5,23))
  ];

  constructor() { }

  ngOnInit() {
  }

}
