import React, { Fragment, useCallback, useEffect } from "react";
import { useState } from "react";
import NewJobs from "./NewJobs";

import "./JobListing.css";

const JobListing = () => {
  const [addJobs, setAddJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchJobHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    // let url =
    //   "https://http-forms-a2607-default-rtdb.firebaseio.com/jobprofile.json";
    let url1 = "http://localhost:8080/details";
    try {
      const response = await fetch(url1);
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      const loadedJobData = [];

      for (const key in data) {
        let string = data[key].jobRole;
        let length = 100;
        let trimmedString = string.substring(0, length);
        let newString;
        if (trimmedString.length >= 20) {
          newString = `${trimmedString}...`;
        } else {
          newString = trimmedString;
        }

        loadedJobData.push({
          id: key,
          title: data[key].title,
          jobTitle: data[key].jobTitle,
          jobRole: newString,
          openRoles: data[key].openRoles,
          location: data[key].location,
          workType: data[key].workType,
          responsibilities: data[key].responsibilities,
          requirements: data[key].requirements,
        });
      }
      setAddJobs(loadedJobData);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchJobHandler();
  }, [fetchJobHandler]);

  let content = <p>No Jobs Found</p>;

  if (addJobs.length > 0) {
    content = <NewJobs jobs={addJobs} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Please Wait...</p>;
  }

  return (
    <Fragment>
      <header>Open Positions</header>
      <div className="content">
        <div className="job-list">{content}</div>
      </div>
    </Fragment>
  );
};

export default JobListing;
