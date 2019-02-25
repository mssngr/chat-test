import React from 'react'
import PropTypes from 'prop-types'
import gql from 'graphql-tag'
import { Query, Mutation } from 'react-apollo'
import { get } from 'lodash'
import { Redirect } from 'react-router-dom'

/* GRAPHQL */
const GET_CHAT_BY_USER_NAMES = gql`
  query getChat($userNames: [String]!) {
    Chat(userNames: $userNames) {
      id
    }
  }
`

const CREATE_CHAT_WITH_USER_NAMES = gql`
  query createChat($userNames: [String]!) {
    createChat(userNames: $userNames) {
      id
    }
  }
`

/* PRESENTATION */
export default class NewChat extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
  }

  render() {
    const { match } = this.props
    const userNames = match.params.userNames.split('+')
    return (
      <Query query={GET_CHAT_BY_USER_NAMES} variables={{ userNames }}>
        {({ loading, error, data }) => {
          if (loading) return 'Loading...'
          if (error) {
            console.log(error)
            return 'Error!'
          }
          const chatId = get(data, ['chat', 'id'])
          if (chatId) return <Redirect to={`/chat/${chatId}`} />
          return (
            <Mutation
              mutation={CREATE_CHAT_WITH_USER_NAMES}
              variables={{ userNames }}
            >
              {({ createChat, error, data }) => {
                createChat()
                const newChatId = get(data, ['createChat', 'id'])
                if (newChatId) return <Redirect to={`/chat/${newChatId}`} />
                return 'Loading...'
              }}
            </Mutation>
          )
        }}
      </Query>
    )
  }
}
