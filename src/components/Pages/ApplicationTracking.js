import React from "react";
import { Container } from "react-bootstrap";
import classes from "./ApplicationTracking.module.css";
import JobTrackingTable from "../UI/JobTrackingTable";
import { useSelector } from "react-redux";

function ApplicationTracking() {
  const listData = useSelector((state) => state.applications.applications);
  console.log("Data", listData);
  return (
    <div>
      <Container className={classes.container}>
        <h3 className={classes.heading}>Applications Tracking</h3>
        <JobTrackingTable listData={listData} />
      </Container>
    </div>
  );
}

export default ApplicationTracking;
