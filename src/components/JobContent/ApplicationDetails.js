import React from "react";
import { Table } from "react-bootstrap";
import classesMain from "../Pages/JobApplication.module.css";
import Loader from "../UI/Loader";

const fetchDate = (date) => {
  return new Date(date);
};

export default function JobApplicationTable(props) {
  console.log("JobDetails", props.JobsDetails);
  console.log("isLoading", props.isLoading);
  return (
    <React.Fragment>
      <Table striped bordered hover responsive="md">
        <thead>
          <tr>
            <th className={classesMain.th}>Name</th>
            <th className={classesMain.th}>Applied Date</th>
            <th className={classesMain.th}>Available From</th>
            <th className={classesMain.th}>Available Till</th>
            <th className={classesMain.th}>Education</th>
            <th className={classesMain.th}>Experience</th>
            <th className={classesMain.th}>See Full Profile</th>
          </tr>
        </thead>
        <tbody>
          {props.isLoading && (
            <tr className={classesMain.spinner}>
              <td colSpan={7}>
                <div className={classesMain.loading}>
                  <Loader />
                </div>
              </td>
            </tr>
          )}
          {props.JobsDetails && props.JobsDetails.length > 0 ? (
            props.JobsDetails.map((row) => (
              <tr>
                <td
                  className={classesMain.td}
                >{`${row.first_name} ${row.last_name}`}</td>
                <td className={classesMain.td}>
                  {fetchDate(row.applied_on).toDateString()}
                </td>
                <td className={classesMain.td}>
                  {fetchDate(row.available_from).toDateString()}
                </td>
                <td className={classesMain.td}>
                  {fetchDate(row.available_till).toDateString()}
                </td>
                <td className={classesMain.td}>{row.education}</td>
                <td className={classesMain.td}>{row.experience}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={7}>
                <h3 className={classesMain.textData}>No data available</h3>
              </td>
            </tr>
          )}
        </tbody>
      </Table>
    </React.Fragment>
  );
}
