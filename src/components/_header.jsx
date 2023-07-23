import React from 'react'
import { Row } from 'react-bootstrap';
import {data} from '../_data'

const _header = () => {;
  return (
    <div>
      <Row>
      <h3 className='m-4'>
        You Have {data.length} Dates Today!
      </h3>
      </Row>
    </div>
  )
}

export default _header
