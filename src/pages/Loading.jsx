import React from "react"

import {Container, Row, Spinner} from "react-bootstrap"

export default () => {
  return (
    <Container fluid>
      <Row className="mx-auto justify-content-center align-items-center vh-100">
        <Spinner animation="border" role="status" variant="secondary" style={{width: '5rem', height: '5rem'}}>
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Row>
    </Container>
  )
}