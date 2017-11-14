import React from 'react'
import { Link } from 'react-router-dom'

function QuoteFooter (props) {
  return (
    <div id='footer'>
      <Link className='btn btn-primary' to={`/?quote=${props.startingQuoteId}`}>
        Back to Beginning
      </Link>
    </div>
  )
}

export default QuoteFooter