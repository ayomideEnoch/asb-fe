import React from 'react';
// import { Link } from 'react-router-dom';
import './DashboardMetric.css';

function DashboardMetric() {
  return (
    <div className="DashboardMetric">
      <div className="d-flex justify-content-left col-12">
          <h1>Divisions <img className="img9" alt="" />Module</h1>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col card">
            <div className="row">
              <div className="col-9">
                <number>31454</number>
                <h1 className="d-flex justify-content-left">Ongoing metric</h1>
              </div>
              <div className="col-3 d-flex align-items-center">
                <img className="img8" alt="" />
              </div>
            </div>
          </div>
          <div className="col card">
          <div className="row">
            <div className="col-9">
              <number>2344</number>
              <h1 className="d-flex justify-content-left">Past metric</h1>
            </div>
            <div className="col-3 d-flex align-items-center">
              <img className="img8" alt="" />
            </div>
            </div>
          </div>
          <div className="col card">
            <div className="row">
              <div className="col-9">
                <number>14244</number>
                <h1 className="d-flex justify-content-left">Missed metric</h1>
              </div>
              <div className="col-3 d-flex align-items-center">
                <img className="img8" alt="" />
              </div>
            </div>
          </div>
          <div className="col card">
            <div className="row">
                <div className="col-9">
                  <number>635</number>
                  <h1 className="d-flex justify-content-left">Failed metric</h1>
                </div>
              <div className="col-3 d-flex align-items-center">
                <img className="img8" alt="" />
              </div>
            </div>
          </div>
          <div className="col card">
            <div className="row">
              <div className="col-9">
                <number>11334</number>
                <h1 className="d-flex justify-content-left">Pending metric</h1>
              </div>
            <div className="col-3 d-flex align-items-center">
              <img className="img8" alt="" />
            </div>
          </div>
        </div>
      </div>  
    </div>
   </div>
  );
}

export default DashboardMetric;