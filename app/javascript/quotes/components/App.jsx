import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import QuotesDisplay from './QuotesDisplay'

class App extends React.Component {

  render () {
    return (
      <Router>
        <div>
          <Route
            path='/'
            component={QuotesDisplay}
          />
        </div>
      </Router>
    )
  }
}

export default App