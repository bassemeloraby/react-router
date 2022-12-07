import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetails = () => {
   const {_id} = useParams()
  return (
    <div>UserDetails no {_id}</div>
  )
}

export default UserDetails