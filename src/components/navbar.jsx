import React, { Component } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'

class navbar extends React.Component {
  constructor(props) {
    super(props)
  }

  getNavBar() {
    return (
      <div>
        <Navbar variant="dark" bg="dark">
          <Container>
            <Nav className="justify-content-left">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/create-todo">New Task</Nav.Link>
              <Nav.Link href="/user">User</Nav.Link>
              <Nav.Link href="/user/new">New User</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </div>
    )
  }
}

export default navbar
