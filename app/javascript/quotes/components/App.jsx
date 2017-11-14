import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import QuotesDisplay from './QuotesDisplay'

class App extends React.Component {

  render () {
    return (
      <Router startingQuoteId={this.props.startingQuoteId}>
        <div>
          <Route
            path='/'
            startingQuoteId={this.props.startingQuoteId}
            render={(routeProps) => 
              <QuotesDisplay {...this.props} {...routeProps} /> 
            }
          />
        </div>
      </Router>
    )
  }
}

export default App