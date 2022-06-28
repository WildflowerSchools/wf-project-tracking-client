import React from "react"
import {Col, Container, Form, Row} from "react-bootstrap";
import Rater from "react-rater";

const Project = (props) => {
  const {project, ...other} = props

  return (
    <Container>
      <Row>
        <div className="fw-bold mb-2">Description</div>
      </Row>
      <Row>
        <div className="ps-4" dangerouslySetInnerHTML={{ __html: project.body }} />
      </Row>
      <Row>
        <div className="fw-bold mb-2">FTEs</div>
      </Row>
      <Row>
        {project.members.map((m, index) => {
          return (
            <Form key={index} className="ps-4">
              <Row className="align-items-center">
                <Col xs="5">{m.name}</Col>
                <Col xs="auto" className="project-fte-field">
                  <Form.Label htmlFor="inlineFormFTEs" visuallyHidden>FTE:</Form.Label>
                  <Form.Control type="text" id="inlineFormFTEs" placeholder="?" value={m.fte} />
                </Col>
              </Row>
            </Form>
          )
        })}
      </Row>
      <Row>
        <div className="fw-bold mb-2">Rating</div>
      </Row>
      <Row>
        <div className="ms-auto ps-4"><Rater total={5} rating={2} /></div>
      </Row>
    </Container>
  )
}

export default Project