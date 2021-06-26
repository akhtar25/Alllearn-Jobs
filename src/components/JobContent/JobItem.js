// import Grid from "@material-ui/core/Grid";
// import Box from "@material-ui/core/Box";
import classes from "./JobItem.module.css";
import { NavLink } from "react-router-dom";
import { Card, Col, Row } from "react-bootstrap";

// import { fetchJobDetails } from "../store/card-actions";

const JobItem = (props) => {
  const postedDate = new Date(props.date);
  const job_id = props.job_id;
  const school_id = props.school_id;
  //   const data = fetchJobDetails();
  //   console.log(data);
  const link = "/jobDetails/" + job_id + "/" + school_id;

  return (
    <li>
      <Card>
        <Row>
          <Col>
            {props.img ? (
              <img
                src={props.img}
                alt="school icon"
                width="155px"
                height="100px"
                className={classes.imgpos}
              />
            ) : (
              <img
                src="https://alllearndatabucketv2.s3.ap-south-1.amazonaws.com/defaultSchoolImage.jpg"
                alt="school icon"
                width="155px"
                height="100px"
                className={classes.imgpos}
              />
            )}
          </Col>
          <Col className={classes.padding}>
            <h3 className={classes.header}>{props.school_name}</h3>
            <h5 className={classes.item}>{props.jobTerm}</h5>
            <h5 className={classes.item}>{props.category}</h5>
            <h5 className={classes.item}>{props.subject}</h5>
          </Col>
          <Col className={classes.padding}>
            <h3 className={classes.header}>
              &#8377;{props.min_pay} - &#8377;{props.max_pay}
            </h3>
            <h5 className={classes.item}>{props.job_type}</h5>
            <h5 className={classes.item}>{props.location}</h5>
            <h5 className={classes.item}>
              Posted on:{postedDate.toDateString()}
            </h5>
          </Col>
          <Col className={classes.btn}>
            <NavLink to={link} className={classes.linkBtn}>
              See Details
            </NavLink>
          </Col>
        </Row>
      </Card>
    </li>
    // <li>
    //   <Card>
    //     <CardContent>
    //       <Box sx={{ flexGrow: 1 }}>
    //         <Grid container>
    //           <Grid item xs={3}>
    // {props.img ? (
    //   <img
    //     src={props.img}
    //     alt="school icon"
    //     width="150px"
    //     height="100px"
    //   />
    // ) : (
    //   <img
    //     src="https://alllearndatabucketv2.s3.ap-south-1.amazonaws.com/defaultSchoolImage.jpg"
    //     alt="school icon"
    //     width="150px"
    //     height="100px"
    //   />
    // )}
    //           </Grid>
    //           <Grid item xs={3} className={classes.column}>
    // <h3 className={classes.header}>{props.school_name}</h3>
    // <h5 className={classes.item}>{props.jobTerm}</h5>
    // <h5 className={classes.item}>{props.category}</h5>
    // <h5 className={classes.item}>{props.subject}</h5>
    //           </Grid>
    //           <Grid item xs={3}>
    // <h3 className={classes.header}>
    //   &#8377;{props.min_pay} - &#8377;{props.max_pay}
    // </h3>
    // <h5 className={classes.item}>{props.job_type}</h5>
    // <h5 className={classes.item}>{props.location}</h5>
    // <h5 className={classes.item}>
    //   Posted on:{postedDate.toDateString()}
    // </h5>
    //           </Grid>
    //           <Grid item xs={3} className={classes.btn}>
    //             <NavLink to={link}>See Details</NavLink>
    //           </Grid>
    //         </Grid>
    //       </Box>
    //     </CardContent>
    //   </Card>
    // </li>
  );
};

export default JobItem;
