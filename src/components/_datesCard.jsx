import React from "react";
import {data} from '../_data'

const _datesCard = () => {
  

  return (
    <div>
      {data.length ? (
        data.map((item) => {
          return (
            <div className="card p-1" key={Math.floor(Math.random())}>
              <div className="d-flex">
                <img src={item.profileURL} alt={item.username} />
                <div>
                  <h3 className="py-1">{item.username.toLocaleUpperCase()}</h3>
                  <h5>{item.gender}</h5>
                  <h5>{item.email}</h5>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <h3 className="text-center p-5 fs-1 fw-bold"> Dates Not Found!</h3>
      )}
    </div>
  );
};

export default _datesCard;
