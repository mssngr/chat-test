import React from 'react'
import PropTypes from 'prop-types'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

/* GRAPHQL */
const GET_USER_ID = gql`
  query getUserId($userName: String!) {
    User(userName: $userName) {
      id
    }
  }
`

/* PRESENTATION */
export default class LoginScreen extends React.Component {
  static propTypes = {
    userName: PropTypes.string,
    children: PropTypes.func,
  }

  render() {
    const { userName, children } = this.props
    if (userName) {
      return (
        <Query query={GET_USER_ID} variables={{ userName }}>
          {props => children(props)}
        </Query>
      )
    } else {
      return children({ loading: true })
    }
  }
}
