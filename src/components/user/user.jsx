import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

function User({ data }) {
  const { _id, name } = data

  return (
    <>
      <p>{`${name}`}</p>
    </>
  )
}

export function UserList() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/user')
      .then(response => {
        setUsers(response.data)
      })
      .catch(() => console.log('Error fetching users'))
  }, [])

  return (
    <>
      <h1>user</h1>
      <ul>
        {users.map(user => (
          <User data={user} key={user._id} />
        ))}
      </ul>
    </>
  )
}
