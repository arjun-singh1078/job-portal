import React from "react";

const Users = (props) => {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.firstName}</td>
      <td>{props.lastName}</td>
      <td>{props.email}</td>
      <td>{props.dob}</td>
      <td>{props.contactNumber}</td>
      <td>{props.address}</td>
      <td>{props.city}</td>
      <td>{props.postalCode}</td>
      <td>{props.jobTitle}</td>
      <td>{props.experience}</td>
      <td>{props.skills}</td>
      <td>{props.certifications}</td>
      <td>{props.linkedInUrl}</td>
      <td>{props.resumeUrl}</td>
      <td>{props.comments}</td>
    </tr>
  );
};

export default Users;
