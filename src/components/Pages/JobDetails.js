import { Fragment } from "react";
import classes from "./JobDetails.module.css";
import CheckIcon from "@material-ui/icons/Check";
import ClearIcon from "@material-ui/icons/Clear";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../UI/Loader";
import { Col, Container, Row, Table } from "react-bootstrap";

const JobDetails = () => {
  const [fetchedJobDetails, setFetchedJobDetails] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  const job_id = params.job_id;
  const school_id = params.school_id;
  //   console.log(job_id, school_id);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("jobDetailAPI", {
        params: { job_id: job_id, school_id: school_id },
      })
      .then(({ data }) => {
        console.log(data.details.school_picture);
        setFetchedJobDetails(data.details);
        setIsLoading(false);
      });
  }, [job_id, school_id]);
  console.log(fetchedJobDetails);
  const expectedStartDate = new Date(fetchedJobDetails.start_date);

  return (
    <Fragment>
      {isLoading && (
        <Row className={classes.spinner}>
          <div className={classes.loading}>
            <Loader />
          </div>
        </Row>
      )}
      {!isLoading && fetchedJobDetails && (
        <Container className={classes.container}>
          <Row>
            <Col xs={8} className={classes.colplacement}>
              <div className={classes.headingBar}>
                <h3 className={classes.heading}>Job Detail</h3>
              </div>
              <Row>
                <Col>
                  {fetchedJobDetails.school_picture ? (
                    <img
                      src={fetchedJobDetails.school_picture}
                      width="150px"
                      alt="school pic"
                    />
                  ) : (
                    <img
                      src="https://alllearndatabucketv2.s3.ap-south-1.amazonaws.com/defaultSchoolImage.jpg"
                      width="150px"
                      alt="school pic"
                    />
                  )}

                  <h4 className={classes.text}>
                    {fetchedJobDetails.school_name}
                  </h4>
                  <h4 className={classes.text}>{fetchedJobDetails.city}</h4>
                </Col>
                <Col>
                  <Table
                    striped
                    bordered
                    hover
                    responsive="md"
                    className={classes.classBox}
                  >
                    <tbody>
                      <tr>
                        <td className={classes.td}>Board</td>
                        <td className={classes.td}>CBSE</td>
                      </tr>
                      <tr>
                        <td className={classes.td}>Address</td>
                        <td className={classes.td}>
                          {fetchedJobDetails.address_1 &&
                            fetchedJobDetails.address_1}
                          &nbsp; , &nbsp;
                          {fetchedJobDetails.address_2
                            ? fetchedJobDetails.address_2
                            : ""}
                          {/* D-27, Sushant Lok III, Sector 57, Gurugram, Haryana
                        122001 Sector 57 Gurgaon, Haryana 122001 */}
                          <br />
                          <a href="/#" className={classes.link}>
                            See on google map
                          </a>
                        </td>
                      </tr>
                      <tr>
                        <td className={classes.tdh}>How to get there</td>
                        <td className={classes.td}>
                          {fetchedJobDetails.how_to_reach
                            ? fetchedJobDetails.how_to_reach
                            : "None"}
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              </Row>
              <hr />
              <Row className={classes.floatLeft}>
                <div className={classes.leftItems}>
                  <span className={classes.greyText}>Job Details</span>
                </div>
                <br />
                <div className={classes.leftItems}>
                  <span className={classes.td}>
                    <strong>{fetchedJobDetails.category}</strong>|
                    {fetchedJobDetails.term} | {fetchedJobDetails.job_type}
                  </span>
                </div>

                <br />
                <Table
                  striped
                  bordered
                  hover
                  responsive="md"
                  className={classes.tableData}
                >
                  <tbody>
                    <tr>
                      <td className={classes.tdData}>Subjects</td>
                      <td className={classes.tdRight}>
                        {fetchedJobDetails.subject}
                      </td>
                    </tr>
                    <tr>
                      <td className={classes.tdData}>Pay Range</td>
                      <td className={classes.tdRight}>
                        <strong>
                          &#8377;{fetchedJobDetails.min_pay}- &#8377;
                          {fetchedJobDetails.max_pay}
                        </strong>
                      </td>
                    </tr>
                    <tr>
                      <td className={classes.tdData}>Expected Start Date</td>
                      <td className={classes.tdRight}>
                        {expectedStartDate.toDateString()}
                      </td>
                    </tr>
                    <tr>
                      <td className={classes.tdData}>Classes to teach</td>
                      <td className={classes.tdRight}>
                        {fetchedJobDetails.classes}
                      </td>
                    </tr>
                    <tr>
                      <td className={classes.tdData}>Job Timings</td>
                      <td className={classes.tdRight}>
                        {fetchedJobDetails.timings}
                      </td>
                    </tr>
                    <tr>
                      <td className={classes.tdData}>Description</td>
                      <td className={classes.tdRight}>
                        {fetchedJobDetails.description}
                      </td>
                    </tr>
                    <tr>
                      <td className={classes.tdData}>
                        Peferred language for teaching
                      </td>
                      <td className={classes.tdRight}>
                        {fetchedJobDetails.language}
                      </td>
                    </tr>
                    <tr>
                      <td className={classes.tdData}>Recommendation Letter</td>
                      <td className={classes.tdRightCheck}>
                        <CheckIcon />
                      </td>
                    </tr>
                    <tr>
                      <td className={classes.tdData}>Experience Certificate</td>
                      <td className={classes.tdRightCheck}>
                        <CheckIcon />
                      </td>
                    </tr>
                    <tr>
                      <td className={classes.tdData}>Support with stay</td>
                      <td className={classes.tdRightClear}>
                        <ClearIcon />
                      </td>
                    </tr>
                    <tr>
                      <td className={classes.tdData}>Food options</td>
                      <td className={classes.tdRightClear}>
                        <ClearIcon />
                      </td>
                    </tr>
                    <tr>
                      <td className={classes.tdData}>Numer of Openings</td>
                      <td className={classes.tdRight}>
                        {fetchedJobDetails.num_of_openings}
                      </td>
                    </tr>
                    <tr>
                      <td className={classes.tdData}>Job Id</td>
                      <td className={classes.tdRight}>{job_id}</td>
                    </tr>
                  </tbody>
                </Table>
              </Row>
            </Col>
            <Col xs={2}></Col>
          </Row>
        </Container>
      )}
    </Fragment>
  );
};

export default JobDetails;
