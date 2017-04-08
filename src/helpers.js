import fetchJsonp from 'fetch-jsonp';

// Fetches random programming quote then returns it in { quote, author }
export const fetchProgrammingQuote = async () => {
  try {
  const allQuotes = await fetch('http://quotes.stormconsultancy.co.uk/quotes.json');
  const quotesJSON = await allQuotes.json();
  const randomQuoteIndex =  Math.floor(Math.random()*(quotesJSON.length+1));
  const singleQuote =  quotesJSON[randomQuoteIndex];
    return ({ quote: singleQuote.quote, author: singleQuote.author });
  } catch(err) {
    console.log(err);
  };
}

// Fetches random design quote then returns it in { quote, author }
export const fetchDesignQuote = async () => {
  try {
  const quote = await fetchJsonp('http://quotesondesign.com/api/3.0/api-3.0.json');
  const quoteJSON = await quote.json();
    return ({ quote: quoteJSON.quote, author: quoteJSON.author });
  } catch(err) {
    console.log(err);
  };
}