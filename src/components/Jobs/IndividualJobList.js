import React from "react";

import { FaChevronRight } from "react-icons/fa";

import "./JobListing.css";

const IndividualJobList = (props) => {
  return (
    <li key={props.id}>
      <div className="role-list">
        <h5>{props.title}</h5>
        <div className="job-count">
          <span>{props.openRoles}</span> <span>Open Role</span>
        </div>
      </div>
      <div className="job-details">
        <div className="job-list-info">
          <div className="job-title">{props.jobTitle}</div>
          <div className="job-desc">{props.jobRole}</div>
        </div>
        <div className="job-location">
          <div className="location-info">
            {props.location} <br /> {props.workType}
          </div>
          <div className="location-icon pt-1">
            <FaChevronRight />
          </div>
        </div>
      </div>
    </li>
  );
};

export default IndividualJobList;
