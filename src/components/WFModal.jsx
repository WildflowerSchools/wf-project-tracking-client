import React, { useEffect, useState } from "react"
import {Modal} from "react-bootstrap";

const WFModal = (props) => {
  const {title, component, isOpen, onHide, ...other} = props

  const [_isOpen, setIsOpen] = useState(false)

  React.useEffect(() => {
    setIsOpen(isOpen);
  }, [isOpen]);

  return (
    <Modal
      show={_isOpen}
      onHide={onHide}
      className="wf-modal"
      dialogClassName="wf-modal"
      aria-labelledby="modal-title"
    >
      <Modal.Header closeButton>
        <Modal.Title id="modal-title">
          {title}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {component}
      </Modal.Body>
    </Modal>
  )
}

export default WFModal