import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes:Quote[]=[
    new Quote(1,"Freidrich Nietzsche","That which does not kill us makes us stronger","Don Moses",new Date(2020,1,1)),
    new Quote(2,"Albert Camus","Autumn is a second spring when every leaf is a flower","Maggie Ng'ethe",new Date(2020,1,2)),
    new Quote(3,"Jean-Paul Sartre","When the rich wage war it's the poor who die.","Monica Oyugi",new Date(2020,1,3))
  ];

  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
    quote.id = quoteLength + 1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

    deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(`Do you want to delete this Quote? ${this.quotes[index].name}`)//alert

      if (toDelete) { this.quotes.splice(index, 1) }//removes quote
    }
  }

  toggleQuote(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  addUpvote(event,i){
    if(event){
      this.quotes[i].upVotes +=1;
    }
  }
  addDownvote(event,i){
    if(event){
      this.quotes[i].downVotes +=1;
    }
  }


  constructor() { }

  ngOnInit() {
  }

}
