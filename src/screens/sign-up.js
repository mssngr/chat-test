import React from 'react'
import styled from 'styled-components'
import { get } from 'lodash'
import { Redirect } from 'react-router-dom'

import Button from 'components/Button'
import Input from 'components/Input'
import SignUp from 'utils/SignUp'
import { ScreenContainer } from 'screens'

/* STYLES */
export const ButtonContainer = styled.div`
  margin-top: 2rem;
`

/* PRESENTATION */
export default class SignUpScreen extends React.Component {
  state = {
    submitted: false,
  }

  handleCreateUser = createUserFunc => e => {
    e.preventDefault()
    this.setState({ submitted: true })
    createUserFunc({
      variables: { userName: document.getElementById('newUserName').value },
    })
  }

  render() {
    const { submitted } = this.state
    return (
      <ScreenContainer>
        <h1>New User</h1>
        <SignUp>
          {(createUser, { loading, error, data }) => {
            const newUserId = get(data, ['createUser', 'id'])
            if (submitted) {
              if (loading) {
                return (
                  <form
                    id="signUp"
                    onSubmit={this.handleCreateUser(createUser)}
                  >
                    <Input label="Enter a username" inputId="newUserName" />
                    <ButtonContainer>
                      <Button>Loading...</Button>
                    </ButtonContainer>
                  </form>
                )
              }
              if (error) {
                if (error.message.includes('unique')) {
                  return (
                    <form
                      id="signUp"
                      onSubmit={this.handleCreateUser(createUser)}
                    >
                      <Input
                        label="Enter a username"
                        inputId="newUserName"
                        helpText="The username you provided already exists."
                        helpTextId="userNameExists"
                      />
                      <ButtonContainer>
                        <Button type="submit">Create Account</Button>
                      </ButtonContainer>
                    </form>
                  )
                } else {
                  console.log(error.message)
                  return (
                    <form
                      id="signUp"
                      onSubmit={this.handleCreateUser(createUser)}
                    >
                      <Input label="Enter a username" inputId="newUserName" />
                      <ButtonContainer>
                        <Button type="submit">Error!</Button>
                      </ButtonContainer>
                    </form>
                  )
                }
              }
              if (!newUserId) {
                return (
                  <form
                    id="signUp"
                    onSubmit={this.handleCreateUser(createUser)}
                  >
                    <Input label="Enter a username" inputId="newUserName" />
                    <ButtonContainer>
                      <Button type="submit">Error!</Button>
                    </ButtonContainer>
                  </form>
                )
              }
              return <Redirect to="/dashboard" />
            } else {
              return (
                <form id="signUp" onSubmit={this.handleCreateUser(createUser)}>
                  <Input label="Enter a username" inputId="newUserName" />
                  <ButtonContainer>
                    <Button type="submit">Create Account</Button>
                  </ButtonContainer>
                </form>
              )
            }
          }}
        </SignUp>
      </ScreenContainer>
    )
  }
}
