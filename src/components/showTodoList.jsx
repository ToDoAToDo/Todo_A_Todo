import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function TodoCard({ data }) {
  const { _id, title, status } = data

  return (
    <li key={_id}>
      <div className="title-description">
        <h3>{title}</h3>
        <h5
          style={
            status === 'Unfinished' ? { color: 'red' } : { color: 'green' }
          }
        >
          {status}
        </h5>
      </div>

      <div className="button-container">
        <button name={_id} className="button">
          edit
        </button>
        <button className="button">delete</button>
      </div>
    </li>
  )
}

export function ShowTodoList() {
  const [todo, setTodo] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/task')
      .then(res => {
        console.log(res.data)
        setTodo(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <section className="container">
      <Link to="/create-todo" className="button-new">
        <button className="button">New</button>
      </Link>
      <section className="contents">
        <h1>TASK</h1>
        <ul className="list-container">
          {todo.map(data => (
            <TodoCard data={data} key={data._id} />
          ))}
        </ul>
      </section>
    </section>
  )
}
