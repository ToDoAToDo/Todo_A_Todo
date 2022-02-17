import React, { Component } from 'react'
import {
  Button,
  Card,
  Col,
  Container,
  ListGroup,
  ListGroupItem,
  Row,
} from 'react-bootstrap'

class carddesign extends React.Component {
  constructor(props) {
    super(props)
  }

  getCardDesign(name, task) {
    const randomstuff = Math.floor(Math.random() * 2)
    return (
      <div>
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
                  <ListGroupItem>
                    <Row>
                      <Col className="col-3">{name}</Col>
                      <Col className="col-3">
                        <Button
                          className={`${
                            randomstuff == 1 ? 'btn-success' : 'btn-danger'
                          }`}
                          disabled
                        >
                          {randomstuff == 1 ? 'Finished' : 'Unfinished'}
                        </Button>
                      </Col>
                      <Col className="col-2">{task}</Col>
                      <Col className="col-4">
                        <Row>
                          <Col className="col-4">
                            <Button className="btn-info">Edit</Button>
                          </Col>

                          <Col className="col-6">
                            <Button className="btn-info">Delete</Button>
                          </Col>
                        </Row>
                      </Col>
                    </Row>
                  </ListGroupItem>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default carddesign
