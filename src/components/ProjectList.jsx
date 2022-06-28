import React, {useEffect, useState} from "react"

import {Card, Col, Container, Form, Row, Stack} from "react-bootstrap";
import Rater from 'react-rater'

import PROJECT_DATA from "../../private/projects.data.json"
import Button from "react-bootstrap/Button";
import holaspirit_logo from '../assets/holaspirit-logo.svg'
import WFModal from "./WFModal";
import Project from "./Project";


const HOLASPIRIT_ORGANIZATION_ID = "57e19aa3ab2882a17a8b4571"

const ProjectList = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState()

  const openProject = (project) => {
    setSelectedProject(project)
    setIsOpen(true)
  }

  const getProjects = (state) => {
    return (
      PROJECT_DATA.filter((project) => project.column.trim().toLowerCase() === state.toLowerCase()).map((project) =>
          <Card key={project.id} border="dark" className="my-3 mx-auto">
            <Card.Header>
              <Container>
                <Row>
                  <Col xs={{ span: 6, offset: 3 }} className="text-uppercase">{project.title}</Col>
                  <Col xs={{ span: 3, offset: 0 }} className="align-self-center text-end">
                    <a target="_blank" href={`https://app.holaspirit.com/o/${HOLASPIRIT_ORGANIZATION_ID}/projects/circle/${project.circleId}?projectId=${project.id}`}>
                      <img style={{width: 24}} src={holaspirit_logo} className="holaspirit-svg-blue" />
                    </a>
                  </Col>
                </Row>
              </Container>
            </Card.Header>
            <Card.Body>
              {/*<Card.Title>{project.title}</Card.Title>*/}
              <Card.Text>
                <div className="mb-2 text-muted">{project.circle}{project.role ? `: ${project.role}` : ''}</div>
                {/*<div className="wf-ellipsis" dangerouslySetInnerHTML={{ __html: project.body }} />*/}
              </Card.Text>
              <Button variant="outline-primary" size="sm" onClick={() => openProject(project)}>View</Button>
            </Card.Body>
            <Card.Footer className="text-muted">
              <Stack direction="horizontal" gap={3}>
                <div className="ml-0">FTEs: {project.ftes}</div>
                {/*<Form className="wf-fte-input">*/}
                {/*  <Row className="align-items-start">*/}
                {/*    <Form.Label column="xs" xs="auto" htmlFor="inlineFormFTEs">FTE:</Form.Label>*/}
                {/*    <Col xs={5} className="p-0">*/}
                {/*      <Form.Control type="text" id="inlineFormFTEs" placeholder="?" />*/}
                {/*    </Col>*/}
                {/*  </Row>*/}
                {/*</Form>*/}
                <div className="ms-auto"><Rater interactive={false} isDisabled={true} total={5} rating={2} /></div>
              </Stack>
            </Card.Footer>
          </Card>
        )
    )
  }

  return (
    <>
      <Container className="wf-kanban my-3" fluid>
        <Row className="flex-nowrap">
          {/*{['Future', 'Waiting', 'Current', 'Done'].map((state) => {*/}
          {/*  return (*/}
          {/*    <div className="wf-kanban-column mx-2 rounded">*/}
          {/*      <div className="wf-card-header h3 mt-3">{state}</div>*/}
          {/*      <div className="wf-card-list">*/}
          {/*        {getProjects(state)}*/}
          {/*      </div>*/}
          {/*    </div>*/}
          {/*  )})}*/}
          <Col xs={12} md={9} lg={6} className="align-items-center mx-auto">
            <div className="wf-card-header h3 mt-3">Current</div>
            <div className="wf-card-list">
              {getProjects("Current")}
            </div>
          </Col>
        </Row>
      </Container>
      <WFModal
        title={selectedProject ? selectedProject.title : ""}
        isOpen={isOpen}
        onHide={setIsOpen}
        component={<Project project={selectedProject} />} />
    </>
  )
}

export default ProjectList