import React from 'react'

function ErrorAlert({error}) {
  return (
    <div>Error: {error.message}</div>
  )
}

export default ErrorAlert