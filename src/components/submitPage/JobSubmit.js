import React from "react";
import classes from "./SubmitPage.module.css";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const JobSubmit = () => {
  const navigate = useNavigate();
  const showJobHandler = () => {
    navigate("/careers");
  };
  return (
    <section className={classes.submitting}>
      <FaCheckCircle className="check" />
      <h1>Submitted Successfully!</h1>
      <button onClick={showJobHandler} className={classes["job-submit"]}>
        Click here to view jobs
      </button>
    </section>
  );
};

export default JobSubmit;
