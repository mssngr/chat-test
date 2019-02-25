import React from 'react'
import { get } from 'lodash'

import Link from 'components/Link'
import GetAllUsers from 'utils/GetAllUsers'
import { ScreenContainer } from 'screens'

export default class DashboardScreen extends React.Component {
  render() {
    return (
      <ScreenContainer>
        <h1>Users</h1>
        <GetAllUsers>
          {({ loading, error, data }) => {
            const users = get(data, 'allUsers')
            if (loading) return 'Loading...'
            if (error || !users) return 'Error.'
            return users.map(user => (
              <div key={user.userName}>
                <Link to={`new-chat/${user.userName}`}>{user.userName}</Link>
              </div>
            ))
          }}
        </GetAllUsers>
      </ScreenContainer>
    )
  }
}
