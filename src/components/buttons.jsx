import React from 'react'
import { Col, Row } from 'react-bootstrap'

const _buttons = ({handelDel,handelShow}) => {
  return (
    <div className='btn-style'>
      <Row className='d-flex justify-content-between'>
        <Col ms='8' className='d-flex justify-content-between'>
        <button className='p-3 my-2' onClick={handelDel}> Delete All</button>
        <button className='p-3 my-2' onClick={handelShow}>Show Dates</button>
        </Col>
      </Row>
    </div>
  )
}

export default _buttons
