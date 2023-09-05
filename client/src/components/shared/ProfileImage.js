import React from 'react'
import md5 from 'js-md5'

export default ({ user, width = '' }) => (
  <img
    src={'http://gravatar.com/avatar/'}
    className="rounded-circle"
    width={width}
  />
)
