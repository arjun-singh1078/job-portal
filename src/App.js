import { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import BasicForm from "./components/BasicForms/BasicForms";
import UserDetails from "./components/BasicForms/UserDetails";

import HomePage from "./components/pages/HomePage";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import JobForm from "./components/Jobs/JobForm";
import JobListing from "./components/Jobs/JobListing";
import JobSubmit from "./components/submitPage/JobSubmit";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<BasicForm />} />
        <Route path="/submit" element={<HomePage />} />
        <Route path="/users" element={<UserDetails />} />
        <Route path="/create-job" element={<JobForm />} />
        <Route path="/careers" element={<JobListing />} />
        <Route path="/job-submit" element={<JobSubmit />} />
        <Route path="*" element={<BasicForm />} />
      </Routes>
    </Fragment>
  );
}

export default App;
