import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export function CreateTodo() {
  const [data, setData] = useState({ title: '' })

  function handleChange(e) {
    setData((data) => ({ ...data, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    const todo = { title: data.title }

    console.log({ todo })

    axios
      .post('http://localhost:8000/api/task', data)
      .then((res) => {
        setData({ title: '' })
        console.log(res.data.message)
      })
      .catch((err) => {
        console.log("Error, couldn't create todo")
        console.log(err.message)
      })
  }

  return (
    <section className="container">
      <Link to="/" className="button-back">
        <button type="button" className="button">
          back
        </button>
      </Link>
      <section className="contents">
        <form onSubmit={handleSubmit} className="form-container" noValidate>
          <label className="label" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={data.title}
            onChange={handleChange}
            className="input"
          />
          <button type="submit" className="button">
            create todo
          </button>
        </form>
      </section>
    </section>
  )
}
