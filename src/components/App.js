import React, { Component } from 'react';
import '../App.css';

import Quote from './Quote';

class App extends Component {
  constructor() {
    super();

    this.state = {
      quote: "Click on 'New Quote' to get a new quote!",
      author: ''
    }
  }

  getNewQuote = () => {
    const quotes = fetch('http://quotes.stormconsultancy.co.uk/quotes.json')
      .then(response => response.json())
      .then(data => {
        const randomQuoteIndex = Math.floor(Math.random()*(data.length+1));
        const quote = data[randomQuoteIndex];
        this.setState({quote: quote.quote, author: quote.author })
      }).catch(error => console.log(error));;
  }

  tweetCurrentQuote = () => {
    const quoteToTweet = this.state.quote + " -" + this.state.author;
    console.log(quoteToTweet);
    window.open('https://twitter.com/intent/tweet?text='+quoteToTweet);
  }

  componentDidMount() {
    this.getNewQuote();
  }
  

  render() {
    return (
      <div className="App">
        <h1>Programming Quotes</h1>
        <Quote quote={this.state.quote} author={this.state.author}/>
        <button onClick={this.getNewQuote}>New Quote</button>
        <button onClick={this.tweetCurrentQuote}>Tweet</button>
      </div>
    );
  }
}

export default App;


