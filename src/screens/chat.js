import React from 'react'
import PropTypes from 'prop-types'
import { get } from 'lodash'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

import Input from 'components/Input'
import { ScreenContainer } from 'screens'

/* GRAPHQL */
const GET_CHAT_BY_ID = gql`
  query getChat($id: String!) {
    Chat(id: $id) {
      users
      messages
    }
  }
`

/* PRESENTATION */
export default class ChatScreen extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
  }

  render() {
    const { match } = this.props
    return (
      <ScreenContainer>
        <h1>Users</h1>
        <Query query={GET_CHAT_BY_ID} variables={{ id: match.params.chatId }}>
          {({ loading, error, data }) => {
            const chat = get(data, 'chat')
            if (loading) return 'Loading...'
            if (error || !chat) return 'Error.'
            return (
              <div>
                {chat.messages.map(message => (
                  <div key={message.id}>{message.text}</div>
                ))}
                <Input
                  label="Type a message..."
                  inputId={`${match.params.chatId}:input`}
                />
              </div>
            )
          }}
        </Query>
      </ScreenContainer>
    )
  }
}
