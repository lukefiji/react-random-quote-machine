import Quote from './Quote';

const ProgrammingQuotes = (props) => {
  const getProgrammingQuote = () => {
    fetch('http://quotes.stormconsultancy.co.uk/quotes.json')
      .then(response => response.json())
      .then(data => {
        const randomQuoteIndex = Math.floor(Math.random()*(data.length+1));
        const quote = data[randomQuoteIndex];
        this.setState({quote: quote.quote, author: quote.author })
      }).catch(error => console.log(error));;
    }

  return (
    <Quote quote={this.props.quote} author={this.props.author} />
  );
}

export default ProgrammingQuotes;