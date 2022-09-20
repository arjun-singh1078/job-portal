import React from "react";
import Users from "./Users";
import "./UserTable.css";

const UserTable = (props) => {
  return (
    <div className="user_table">
      <table>
        <thead>
          <tr>
            <th>SL No</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Birth Date</th>
            <th>Contact Number</th>
            <th>Address</th>
            <th>City</th>
            <th>Postal Code</th>
            <th>Job Title</th>
            <th>Experience</th>
            <th>Skills</th>
            <th>Certifications</th>
            <th>LinkedIn Link</th>
            <th>Resume Link</th>
            <th>FeedBack</th>
          </tr>
        </thead>
        <tbody>
          {props.users.map((user) => (
            <Users
              key={user.id}
              id={user.id}
              firstName={user.firstName}
              lastName={user.lastName}
              email={user.email}
              dob={user.dob}
              contactNumber={user.contactNumber}
              address={user.address}
              city={user.city}
              postalCode={user.postal}
              jobTitle={user.jobTitle}
              experience={user.experience}
              skills={user.skills}
              certifications={user.certifications}
              linkedInUrl={user.linkedInUrl}
              resumeUrl={user.resumeUrl}
              comments={user.comments}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
