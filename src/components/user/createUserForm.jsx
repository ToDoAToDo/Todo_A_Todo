import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { Button, Col, Container, Row } from 'react-bootstrap'

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
      <Container>
        <Row>
          <Col className="col-3">
            <form id="create-user" onSubmit={handleSubmit} noValidate>
              <label htmlFor="name" className="me-2">
                Name
              </label>
              <input type="text" name="name" onChange={handleChange} />
            </form>
          </Col>

          <Row className="mt-2">
            <Col className="col-5">
              <Row>
                <Col className="col-3">
                  <Button
                    form="create-user"
                    type="submit"
                    className="btn-secondary"
                  >
                    Create user
                  </Button>
                </Col>
                <Col className="col-1">
                  <Link to="/user">
                    <Button className="btn-secondary">Back</Button>
                  </Link>
                </Col>
              </Row>
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  )
}
