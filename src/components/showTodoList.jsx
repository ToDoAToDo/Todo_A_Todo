import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import {
  Button,
  Card,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from 'react-bootstrap'

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
    <ListGroupItem key={_id}>
      <Row>
        <Col className="col-3">Insert Name</Col>

        <Col className="col-3">
          <Button
            className={`${
              status === 'Unfinished' ? 'btn-success' : 'btn-danger'
            }`}
            onClick={() => handleClick()}
          >
            {status === 'Unfinished' ? 'Finished' : 'Unfinished'}
          </Button>
        </Col>
        <Col className="col-2">{title}</Col>
        <Col className="col-4">
          <Row>
            <Col className="col-4">
              <Button name={_id} className="btn-info">
                Edit
              </Button>
            </Col>

            <Col className="col-6">
              <Button className="btn-info">Delete</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </ListGroupItem>
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
      <section className="contents">
        <h1>TASKS</h1>
        <Container>
          <Row className="rows-cols-2">
            <Col className="col-6">
              <Card>
                <Card.Header>
                  <Row>
                    <Col className="col-3">Responsible</Col>
                    <Col className="col-3">Status</Col>
                    <Col className="col-6">Task</Col>
                  </Row>
                </Card.Header>
                <ListGroup>
                  {todo.map(data => (
                    <TodoCard data={data} key={data._id} />
                  ))}
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </section>
  )
}
