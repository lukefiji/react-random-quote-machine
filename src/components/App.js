import React, { Component } from 'react';
import '../App.css';
import { fetchProgrammingQuote, fetchDesignQuote } from '../helpers';

import Quote from './Quote';

class App extends Component {
  constructor() {
    super();

    this.state = {
      quote: "Click on 'New Quote' to get a new quote!",
      author: '',
      mode: 'Programming'
    }
  }

  getNewQuote =  async () => {
    const currentMode = this.state.mode;
    if (currentMode === 'Programming') {
      const newQuote = await fetchProgrammingQuote();
      this.setState(newQuote);
          console.log(currentMode);
    }
    if (currentMode === 'Design') {
      const newQuote = await fetchDesignQuote();
      this.setState(newQuote);
          console.log(currentMode);
    }
  }

  tweetCurrentQuote = () => {
    // EncodeURIComponent escapes any special characters
    const quoteToTweet = encodeURIComponent(this.state.quote) + " -" + encodeURIComponent(this.state.author);
    window.open('https://twitter.com/intent/tweet?text='+quoteToTweet);
  }

  changeMode = async (mode) => {
    await this.setState({ mode });
    this.getNewQuote();
  }

  componentDidMount() {
    this.getNewQuote();
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.mode} Quote Machine</h1>
        <Quote quote={this.state.quote} author={this.state.author}/>
        <button onClick={this.getNewQuote}>New Quote</button>
        <button onClick={this.tweetCurrentQuote}>Tweet</button>
        <div>
          <button disabled={this.state.mode==='Programming'} onClick={()=>this.changeMode('Programming')}>Programming</button>
          <button disabled={this.state.mode==='Design'} onClick={()=>this.changeMode('Design')}>Design</button>
        </div>
      </div>
    );
  }
}

export default App;


