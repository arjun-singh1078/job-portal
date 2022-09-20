import React from "react";
import classes from "./SubmitPage.module.css";
import { FaCheckCircle } from "react-icons/fa";

const SubmitPage = () => {
  return (
    <section className={classes.submitting}>
      <FaCheckCircle className="check" />
      <h1>Submitted Successfully!</h1>
    </section>
  );
};

export default SubmitPage;
