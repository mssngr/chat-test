import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { BrowserRouter as Router } from 'react-router-dom'

import HomeScreen from 'screens'

const apolloClient = new ApolloClient({
  uri: 'https://api.graph.cool/simple/v1/cjllczjju3akh0197a5wiwo55',
})

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={apolloClient}>
        <Router>
          <HomeScreen />
        </Router>
      </ApolloProvider>
    )
  }
}
