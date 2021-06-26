import React from "react";
import classes from "./JobApplication.module.css";
import { Container } from "@material-ui/core";
import { Tab, Tabs } from "react-bootstrap";
import ApplicationDetails from "../JobContent/ApplicationDetails";
import { useParams } from "react-router";

import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useState } from "react";

function JobApplication() {
  const params = useParams();
  const [fetchedJobDetails, setFetchedJobDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { jobApplicationData } = useSelector((state) => state.jobApplications);
  console.log("jobApplicationData", jobApplicationData);
  console.log(params);
  let jobId = "";
  if (params.job_id) {
    console.log("params available");
    jobId = params.job_id;
  } else {
    console.log("params not available");
  }

  useEffect(() => {
    setIsLoading(true);
    const jwtToken = localStorage.getItem("token");
    console.log("jobId", jobId);
    axios
      .get("jobApplicationsAPI", {
        params: {
          job_id: jobId,
        },
        headers: {
          Authorization: jwtToken,
        },
      })
      .then(({ data }) => {
        console.log(data);
        setFetchedJobDetails(data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, [jobId]);

  console.log(jobId);
  console.log("fetchedJobDetails", fetchedJobDetails);
  return (
    <div>
      <Container className={classes.container}>
        <h3 className={classes.heading}>Job Applications</h3>
        <Tabs defaultActiveKey="PENDING DECISION" id="uncontrolled-tab-example">
          <Tab eventKey="PENDING DECISION" title="PENDING DECISION">
            <ApplicationDetails
              isLoading={isLoading}
              JobsDetails={fetchedJobDetails.pendingJobs}
            />
          </Tab>
          <Tab eventKey="HIRED" title="HIRED">
            <ApplicationDetails
              isLoading={isLoading}
              JobsDetails={fetchedJobDetails.hiredJobs}
            />
          </Tab>
          <Tab eventKey="SHORTLISTED" title="SHORTLISTED">
            <ApplicationDetails
              isLoading={isLoading}
              JobsDetails={fetchedJobDetails.shortlistedJobs}
            />
          </Tab>
          <Tab eventKey="REJECTED" title="REJECTED">
            <ApplicationDetails
              isLoading={isLoading}
              JobsDetails={fetchedJobDetails.rejectedJobs}
            />
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
}

export default JobApplication;
