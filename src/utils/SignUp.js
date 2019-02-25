import React from 'react'
import PropTypes from 'prop-types'
import { Mutation } from 'react-apollo'
import { gql } from 'apollo-boost'

/* GRAPHQL */
const CREATE_USER = gql`
  mutation createUser($userName: String!) {
    createUser(userName: $userName) {
      id
    }
  }
`

export default class SignUp extends React.Component {
  static propTypes = {
    children: PropTypes.func,
  }

  render() {
    return (
      <Mutation mutation={CREATE_USER}>
        {(createUser, requestObj) => {
          return this.props.children(createUser, requestObj)
        }}
      </Mutation>
    )
  }
}
