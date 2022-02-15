import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export function CreateUserForm() {
  const [name, setName] = useState('')

  function handleSubmit(e) {
    e.preventDefault()

    const user = { name }

    axios
      .post('http://localhost:8000/api/user', user)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err.message)
      })
  }

  function handleChange(e) {
    setName(e.target.value)
  }

  return (
    <>
      <form onSubmit={handleSubmit} noValidate>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" onChange={handleChange} />
        <button type="submit">Create user</button>
      </form>
      <Link to="/user">
        <button>Back</button>
      </Link>
    </>
  )
}
