import React, { Fragment } from "react";
import Card from "../../UI/Card";

import "./JobForms.css";

import useEmptyInput from "../../hooks/use-emptyInput";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

// const isNonEmpty = (value) => value !== " ";

const JobForm = () => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const {
    value: titleValue,
    valueChangeHandler: titleChangeHandler,
    reset: resetTitle,
  } = useEmptyInput();

  const {
    value: jobTitleValue,
    valueChangeHandler: jobTitleChangeHandler,
    reset: resetJobTitle,
  } = useEmptyInput();

  const {
    value: workTypeValue,
    valueChangeHandler: workTypeChangeHandler,
    reset: resetWorkType,
  } = useEmptyInput();

  const {
    value: openingsValue,
    valueChangeHandler: openingsChangeHandler,
    reset: resetOpenings,
  } = useEmptyInput();

  const {
    value: locationValue,
    valueChangeHandler: locationChangeHandler,
    reset: resetLocation,
  } = useEmptyInput();

  const {
    value: jobRoleValue,
    valueChangeHandler: jobRoleChangeHandler,
    reset: resetJobRole,
  } = useEmptyInput();

  const {
    value: responsibilitiesValue,
    valueChangeHandler: responsibilitiesChangeHandler,
    reset: resetResponsibilities,
  } = useEmptyInput();

  const {
    value: requirementsValue,
    valueChangeHandler: requirementsChangeHandler,
    reset: resetRequirements,
  } = useEmptyInput();

  const JobSubmitHandler = async (event) => {
    event.preventDefault();

    console.log("Submitted!!");

    const jobData = {
      title: titleValue,
      jobTitle: jobTitleValue,
      jobRole: jobRoleValue,
      openRoles: +openingsValue,
      location: locationValue,
      workType: workTypeValue,
      responsibilities: responsibilitiesValue,
      requirements: requirementsValue,
    };

    console.log(jobData);

    setIsLoading(true);
    // setIsError(null);

    // let url =
    //   "https://http-forms-a2607-default-rtdb.firebaseio.com/jobprofile.json";
    let url1 = "http://localhost:8080/details";

    try {
      const response = await fetch(url1, {
        method: "POST",
        body: JSON.stringify(jobData),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();
      console.log(data);

      setIsLoading(false);
      navigate("/job-submit");
    } catch (error) {
      //   setIsError(error.message);
      console.log("Error:", error.message);
      setIsLoading(false);
    }

    resetTitle();
    resetJobTitle();
    resetWorkType();
    resetOpenings();
    resetLocation();
    resetJobRole();
    resetResponsibilities();
    resetRequirements();
  };

  return (
    <Fragment>
      <Card>
        <h1>Job Application</h1>
        <form onSubmit={JobSubmitHandler}>
          <div className="mb-4">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Software Developer"
              value={titleValue}
              onChange={titleChangeHandler}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="jobTitle" className="form-label">
              Job Title
            </label>
            <input
              type="text"
              className="form-control"
              id="jobTitle"
              placeholder="SQL Developer"
              value={jobTitleValue}
              onChange={jobTitleChangeHandler}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="workType" className="form-label">
              Work Type
            </label>
            <input
              type="text"
              className="form-control"
              id="workType"
              placeholder="Full Time"
              value={workTypeValue}
              onChange={workTypeChangeHandler}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Number of Openings
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="3"
              value={openingsValue}
              onChange={openingsChangeHandler}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Location
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Bangalore"
              value={locationValue}
              onChange={locationChangeHandler}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="jobRole" className="form-label">
              Job Role
            </label>
            <textarea
              className="form-control"
              id="jobRole"
              rows="3"
              value={jobRoleValue}
              onChange={jobRoleChangeHandler}
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="responsibilities" className="form-label">
              Responsibilities
            </label>
            <textarea
              className="form-control"
              id="responsibilities"
              rows="3"
              value={responsibilitiesValue}
              onChange={responsibilitiesChangeHandler}
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="requirements" className="form-label">
              Requirements
            </label>
            <textarea
              className="form-control"
              id="requirements"
              rows="3"
              value={requirementsValue}
              onChange={requirementsChangeHandler}
            ></textarea>
          </div>
          <div className="form-actions">
            {!isLoading && <button className="btn btn-primary">Submit</button>}
            {isLoading && <p style={{ textAlign: "center" }}>Submitting...</p>}
          </div>
        </form>
      </Card>
    </Fragment>
  );
};

export default JobForm;
