import React from 'react'
import { UserContext } from '../App'

function ComC() {
    return (
        <div>
          This is component C.
          <UserContext.Consumer>
              {
                  user => {
                      return (
                        <div>User context value {user}</div>
                      )
                  }
              }
          </UserContext.Consumer>
        </div>
    )
}

export default ComC
