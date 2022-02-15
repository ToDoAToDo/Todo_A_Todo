import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function TodoCard({ data }) {
  const { _id, title, completed } = data

  const [isCompleted, setIsCompleted] = useState(completed)

  function handleClick() {
    let newStatus = data //The data object to change status of
    newStatus.completed = !newStatus.completed //Sets the value of the status to the opposite of previous value
    axios
      .put(`http://localhost:8000/api/task/${_id}`, newStatus)
      .then(res => {
        setIsCompleted(!completed)
      })
      .catch(err => {
        console.log('Failed to update todo')
        console.log(err.message)
      })
  }

  return (
    <li key={_id}>
      <div className="title-description">
        <h3>{title}</h3>
        <h5 style={completed === false ? { color: 'red' } : { color: 'green' }}>
          {completed ? 'Finished' : 'Unfinished'}
        </h5>
      </div>

      <div className="button-container">
        <button name={_id} className="button">
          edit
        </button>
        <button className="button">delete</button>
        <button onClick={() => handleClick()}>finish</button>
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
