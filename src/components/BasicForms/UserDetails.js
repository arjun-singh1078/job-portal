import React, { Fragment, useCallback, useEffect, useState } from "react";
import UserTable from "./UserTable";
import classes from "./UserDetails.module.css";

// import Button from "@mui/material/Button";

const UserDetails = () => {
  const [users, setUsers] = useState([]);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getUserDataHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("http://localhost:8080/details");

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      const data = await response.json();

      console.log(data);

      const loadedData = [];

      for (const key in data) {
        let ApiDate = data[key].dob;
        let timeStamp = new Date(ApiDate).getTime();
        let Day = new Date(timeStamp).getDate();
        let Month = new Date(timeStamp).getMonth() + 1;
        let Year = new Date(timeStamp).getFullYear();
        let NewDateFormat = `${Day}-${Month}-${Year}`;
        console.log(ApiDate);
        console.log(NewDateFormat);

        loadedData.push({
          key: key,
          id: data[key].id,
          firstName: data[key].firstName,
          lastName: data[key].lastName,
          email: data[key].email,
          dob: NewDateFormat,
          contactNumber: data[key].contactNumber,
          address: data[key].address,
          city: data[key].city,
          postalCode: data[key].postal,
          jobTitle: data[key].jobTitle,
          experience: data[key].experience,
          skills: data[key].skills,
          certifications: data[key].certifications,
          linkedInUrl: data[key].linkedInUrl,
          resumeUrl: data[key].resumeUrl,
          comments: data[key].comments,
        });
      }

      setUsers(loadedData);
    } catch (error) {
      setError(error.message);
    }

    setIsLoading(false);
  }, []);

  useEffect(() => {
    getUserDataHandler();
  }, [getUserDataHandler]);

  let content = <p>Found no user data.</p>;

  if (users.length > 0) {
    content = <UserTable users={users} className={classes["table-section"]} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <Fragment>
      {/* <section className={classes["fetch-section"]}>
        <Button variant="contained" onClick={getUserDataHandler}>
          Fetch User Data
        </Button>
      </section> */}
      <section className={classes["table-section"]}>
        <div style={{ float: "right" }}>
          <button className="btn btn-primary mb-4" onClick={getUserDataHandler}>
            Refresh
          </button>
        </div>
        {content}
      </section>
    </Fragment>
  );
};

export default UserDetails;
