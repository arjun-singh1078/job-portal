import React from "react";
import "./JobListing.css";

import IndividualJobList from "./IndividualJobList";
const NewJobs = (props) => {
  return (
    <ul className="new-jobs">
      {props.jobs.map((job) => (
        <IndividualJobList
          id={job.id}
          title={job.title}
          jobTitle={job.jobTitle}
          jobRole={job.jobRole}
          openRoles={job.openRoles}
          location={job.location}
          workType={job.workType}
          responsibilities={job.responsibilities}
          requirements={job.requirements}
        />
      ))}
    </ul>
  );
};

export default NewJobs;
