import React from 'react'
import { get } from 'lodash'
import { Redirect } from 'react-router-dom'

import Button from 'components/Button'
import Input from 'components/Input'
import Login from 'utils/Login'
import { ScreenContainer } from 'screens'
import { ButtonContainer } from 'screens/sign-up'

/* PRESENTATION */
export default class LoginScreen extends React.Component {
  state = {
    existingUserName: null,
  }

  handleLogin = e => {
    e.preventDefault()
    this.setState({
      existingUserName: document.getElementById('existingUserName').value,
    })
  }

  render() {
    const { existingUserName } = this.state
    return (
      <ScreenContainer>
        <h1>Existing User</h1>
        <form id="login" onSubmit={this.handleLogin}>
          <Input label="Enter your username" inputId="existingUserName" />
          {existingUserName ? (
            <Login userName={existingUserName}>
              {({ loading, error, data }) => {
                const existingUserId = get(data, ['User', 'id'])
                if (loading) {
                  return (
                    <ButtonContainer>
                      <Button>Loading...</Button>
                    </ButtonContainer>
                  )
                }
                if (error) {
                  console.log(error)
                  return (
                    <ButtonContainer>
                      <Button type="submit">Error!</Button>
                    </ButtonContainer>
                  )
                }
                if (!existingUserId) {
                  return (
                    <ButtonContainer>
                      <Button type="submit">Cannot Find User</Button>
                    </ButtonContainer>
                  )
                }
                return <Redirect to="/dashboard" />
              }}
            </Login>
          ) : (
            <ButtonContainer>
              <Button type="submit">Log In</Button>
            </ButtonContainer>
          )}
        </form>
      </ScreenContainer>
    )
  }
}
