import React from "react";
import { Row } from "react-bootstrap";
import _datesCard from "./_datesCard";


const _content = () => {
  return (
    <div className='boarder'>
      <Row>
      <_datesCard/>
      </Row>
    </div>
  );
};

export default _content;
