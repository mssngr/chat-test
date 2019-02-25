import React from 'react'
import PropTypes from 'prop-types'
import { gql } from 'apollo-boost'
import { Query } from 'react-apollo'

/* GRAPHQL */
const GET_ALL_USER_NAMES = gql`
  {
    allUsers {
      userName
    }
  }
`

/* PRESENTATION */
export default class LoginScreen extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  render() {
    const { children } = this.props
    return <Query query={GET_ALL_USER_NAMES}>{props => children(props)}</Query>
  }
}
