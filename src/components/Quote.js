import React from 'react';

const Quote = (props) => {
  return(
    <div>
      <p className="quote">{props.quote}</p>
      <p><i>{props.author}</i></p>
    </div>
  )
}

export default Quote;