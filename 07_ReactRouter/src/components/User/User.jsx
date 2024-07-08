import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    // that take the input that we pass at the time of input route. and show them.
    const {userid} = useParams()
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>User: {userid}</div>
  )
}

export default User