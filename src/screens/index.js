import React from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'

import Button from 'components/Button'
import Link from 'components/Link'
import SignUpScreen from 'screens/sign-up'
import LoginScreen from 'screens/login'
import DashboardScreen from 'screens/dashboard'
import NewChatScreen from 'screens/new-chat'
import ChatScreen from 'screens/chat'

/* STYLES */
export const ScreenContainer = styled.div`
  padding: 1rem;
`

/* PRESENTATION */
export default class HomeScreen extends React.Component {
  render() {
    return (
      <Switch>
        <Route exact path="/">
          <ScreenContainer>
            I am a...
            <div>
              <Link to="/sign-up">
                <Button>New User</Button>
              </Link>
            </div>
            <div>
              <Link to="/login">
                <Button>Existing User</Button>
              </Link>
            </div>
          </ScreenContainer>
        </Route>
        <Route path="/sign-up" component={SignUpScreen} />
        <Route path="/login" component={LoginScreen} />
        <Route path="/dashboard" component={DashboardScreen} />
        <Route path="/new-chat/:userNames" component={NewChatScreen} />
        <Route path="/chat" component={ChatScreen} />
      </Switch>
    )
  }
}
