import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useEmptyInput from "../../hooks/use-emptyInput";
import useInput from "../../hooks/use-Input";
// import { FaSpinner } from "react-icons/fa";
import Card from "../../UI/Card";
import Accordion from "../Accordion/Accordion";
import "./BasicForm.css";

const isNonEmpty = (value) => value !== "";

const emailValidation = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
const isEmail = (value) => emailValidation.test(value);

// const isFiveChars = (value) => value.trim().length === 5;

const phoneNo = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
const isPhoneNumberValid = (value) => value.match(phoneNo);

const BasicForm = (props) => {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  //   const [error, setIsError] = useState(null);

  const {
    value: firstNameValue,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChangeHandler,
    valueIsValid: firstNameIsValid,
    inputBlurHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInput(isNonEmpty);

  const {
    value: lastNameValue,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChangeHandler,
    valueIsValid: lastNameIsValid,
    inputBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInput(isNonEmpty);

  const {
    value: emailValue,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueIsValid: emailIsValid,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  const {
    value: dobValue,
    hasError: dobHasError,
    valueChangeHandler: dobChangeHandler,
    valueIsValid: dobIsValid,
    inputBlurHandler: dobBlurHandler,
    reset: resetDOB,
  } = useInput(isNonEmpty);

  const {
    value: phoneValue,
    hasError: phoneHasError,
    valueChangeHandler: phoneChangeHandler,
    valueIsValid: phoneIsValid,
    inputBlurHandler: phoneBlurHandler,
    reset: resetPhone,
  } = useInput(isPhoneNumberValid);

  const {
    value: addressValue,
    valueChangeHandler: addressChangeHandler,
    reset: resetAddress,
  } = useEmptyInput();

  const {
    value: cityValue,
    valueChangeHandler: cityChangeHandler,
    reset: resetCity,
  } = useEmptyInput();

  const {
    value: postalCodeValue,
    valueChangeHandler: postalCodeChangeHandler,
    reset: resetPostalCode,
  } = useEmptyInput();

  const {
    value: jobTitleValue,
    valueChangeHandler: jobTitleChangeHandler,
    reset: resetJobTitle,
  } = useEmptyInput();

  const {
    value: experienceValue,
    valueChangeHandler: experienceChangeHandler,
    reset: resetExperience,
  } = useEmptyInput();

  const {
    value: skillsValue,
    valueChangeHandler: skillsChangeHandler,
    reset: resetSkills,
  } = useEmptyInput();

  const {
    value: certificationValue,
    valueChangeHandler: certificationChangeHandler,
    reset: resetCertification,
  } = useEmptyInput();

  const {
    value: linkedInValue,
    valueChangeHandler: linkedInChangeHandler,
    reset: resetLinkedIn,
  } = useEmptyInput();

  const {
    value: resumeValue,
    valueChangeHandler: resumeChangeHandler,
    reset: resetResume,
  } = useEmptyInput();

  const {
    value: commentsValue,
    valueChangeHandler: commentsChangeHandler,
    reset: resetComments,
  } = useEmptyInput();

  let formIsValid = false;

  if (
    firstNameIsValid &&
    lastNameIsValid &&
    emailIsValid &&
    dobIsValid &&
    phoneIsValid
  ) {
    formIsValid = true;
  }

  async function formSubmitHandler(e) {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    const event = new Date(dobValue);

    let newDateValue = event.toISOString();

    console.log("SUBMITTED...");

    const userData = {
      firstName: firstNameValue,
      lastName: lastNameValue,
      email: emailValue,
      contactNumber: phoneValue,
      dob: newDateValue,
      address: addressValue,
      city: cityValue,
      postalCode: postalCodeValue,
      jobTitle: jobTitleValue,
      experience: experienceValue,
      skills: skillsValue,
      certifications: certificationValue,
      linkedInUrl: linkedInValue,
      resumeUrl: resumeValue,
      comments: commentsValue,
    };

    console.log(userData);

    setIsLoading(true);
    // setIsError(null);

    // let url =
    //   "https://http-forms-a2607-default-rtdb.firebaseio.com/userprofile.json";
    let url1 = "http://localhost:8080/details";

    try {
      const response = await fetch(url1, {
        method: "POST",
        body: JSON.stringify(userData),
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
      navigate("/submit");
    } catch (error) {
      //   setIsError(error.message);
      console.log("Error:", error.message);
      setIsLoading(false);
    }

    resetFirstName();
    resetLastName();
    resetEmail();
    resetPhone();
    resetDOB();
    resetAddress();
    resetCity();
    resetPostalCode();
    resetJobTitle();
    resetExperience();
    resetSkills();
    resetCertification();
    resetLinkedIn();
    resetResume();
    resetComments();
  }

  const fnameInputClasses = firstNameHasError
    ? "form-controls invalid"
    : "form-controls";
  const lnameInputClasses = lastNameHasError
    ? "form-controls invalid"
    : "form-controls";
  const emailInputClasses = emailHasError
    ? "form-controls invalid"
    : "form-controls";
  const dobInputClasses = dobHasError
    ? "form-controls invalid"
    : "form-controls";
  const phoneInputClasses = phoneHasError
    ? "form-controls invalid"
    : "form-controls";

  return (
    <Card>
      <h1>Contact Information</h1>
      <form onSubmit={formSubmitHandler} className="controls-form">
        <div className="top-header mb-4">General Details</div>
        <div className="controls-group">
          <div className={fnameInputClasses}>
            <label htmlFor="fname">First Name</label>
            <input
              type="text"
              id="fname"
              onChange={firstNameChangeHandler}
              onBlur={firstNameBlurHandler}
              value={firstNameValue}
            />

            {firstNameHasError && (
              <p className="error-text">Please enter a first name</p>
            )}
          </div>
          <div className={lnameInputClasses}>
            <label htmlFor="lname">Last Name</label>
            <input
              type="text"
              id="lname"
              onChange={lastNameChangeHandler}
              onBlur={lastNameBlurHandler}
              value={lastNameValue}
            />
            {lastNameHasError && (
              <p className="error-text">Please enter a last name</p>
            )}
          </div>
        </div>
        <div className={emailInputClasses}>
          <label htmlFor="email">E-Mail Address</label>
          <input
            type="email"
            id="email"
            className="wideInput"
            onChange={emailChangeHandler}
            onBlur={emailBlurHandler}
            value={emailValue}
          />
          {emailHasError && (
            <p className="error-text">Please enter a valid email address</p>
          )}
        </div>
        <div className="controls-group">
          <div className={phoneInputClasses}>
            <label htmlFor="phone">Contact Number</label>
            <input
              type="number"
              id="phone"
              onChange={phoneChangeHandler}
              onBlur={phoneBlurHandler}
              value={phoneValue}
            />
            {phoneHasError && (
              <p className="error-text">
                Please enter a valid phone number (atleast 10 chars)
              </p>
            )}
          </div>

          <div className={dobInputClasses}>
            <label htmlFor="dob">Date Of Birth</label>
            <input
              type="date"
              id="dob"
              onChange={dobChangeHandler}
              onBlur={dobBlurHandler}
              value={dobValue}
            />
            {dobHasError && (
              <p className="error-text">Please enter birth date</p>
            )}
          </div>
        </div>
        {/* ADDRESS  DETAILS */}
        <Accordion title="Address Details">
          <div className="form-controls">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              id="address"
              value={addressValue}
              onChange={addressChangeHandler}
            />
          </div>
          <div className="controls-group">
            <div className="form-controls">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                value={cityValue}
                onChange={cityChangeHandler}
              />
            </div>

            <div className="form-controls">
              <label htmlFor="postal">Postal Code</label>
              <input
                type="number"
                id="postal"
                value={postalCodeValue}
                onChange={postalCodeChangeHandler}
              />
            </div>
          </div>
        </Accordion>
        {/* JOB DETAILS */}
        <Accordion title="Job Details">
          <div className="form-controls">
            <label htmlFor="jobTitle">Position your applying for?</label>
            <input
              type="text"
              id="jobTitle"
              value={jobTitleValue}
              onChange={jobTitleChangeHandler}
            />
          </div>

          <div className="form-controls">
            <label htmlFor="exp">Experience</label>
            <input
              type="text"
              id="exp"
              value={experienceValue}
              onChange={experienceChangeHandler}
            />
          </div>

          <div className="form-controls">
            <label htmlFor="skills">Describe your Skills</label>
            <textarea
              id="skills"
              rows="2"
              cols="50"
              style={{ resize: "none" }}
              value={skillsValue}
              onChange={skillsChangeHandler}
            />
          </div>

          <div className="form-controls">
            <label htmlFor="certifications">Certifications</label>
            <input
              type="text"
              id="certifications"
              value={certificationValue}
              onChange={certificationChangeHandler}
            />
          </div>
        </Accordion>
        <Accordion title="URL">
          <div className="form-controls">
            <label htmlFor="linkedIn_url">LinkedIn URL</label>
            <input
              type="url"
              id="linkedIn_url"
              value={linkedInValue}
              onChange={linkedInChangeHandler}
            />
          </div>

          <div className="form-controls">
            <label htmlFor="resume">Resume URL</label>
            <input
              type="url"
              id="resume"
              value={resumeValue}
              onChange={resumeChangeHandler}
            />
          </div>
        </Accordion>
        <div className="form-controls">
          <label htmlFor="comments">References, Comments, Questions?</label>
          <textarea
            id="comments"
            rows="4"
            cols="50"
            style={{ resize: "none" }}
            value={commentsValue}
            onChange={commentsChangeHandler}
          />
        </div>
        <div className="form-actions">
          {!isLoading && (
            <button disabled={!formIsValid} className="submit" type="submit">
              Submit
            </button>
          )}
          {isLoading && <p style={{ textAlign: "center" }}>Submitting...</p>}
          {/* {!isLoading && error && <p>{error}</p>} */}
        </div>
      </form>
    </Card>
  );
};

export default BasicForm;
