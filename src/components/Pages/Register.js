import React, { useState, useEffect } from "react";
import classes from "./Register.module.css";
import Button from "@material-ui/core/Button";
// import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  Card,
  Col,
  Container,
  Row,
  Form,
  Alert,
  Spinner,
} from "react-bootstrap";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  // KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { newUserRegistration } from "../store/userRegAction";

const initialState = {
  first_name: "",
  last_name: "",
  phone: "",
  email: "",
  startDate: "",
  endDate: "",
  userType: "",
  schoolName: "",
  schoolImage: "",
  schoolAddress: "",
  city: "",
  board: "",
  experience: "",
  resume: "",
  role: "",
  profilePicture: "",
};

function Register() {
  const dispatch = useDispatch();
  const [user, setUser] = useState(initialState);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  // const [passwordError, setPasswordError] = useState(passVerificationError);
  const { isLoading, status, message } = useSelector(
    (state) => state.registration
  );

  const startDateHandler = (date) => {
    console.log(date);
    setStartDate(date);
    const newDate = new Date(date);
    const startDate = newDate.toDateString();
    setUser({ ...user, startDate: startDate });
  };

  const endDateHandler = (date) => {
    console.log(date);
    setEndDate(date);
    const newDate = new Date(date);
    const endDate = newDate.toDateString();
    setUser({ ...user, endDate: endDate });
  };

  console.log(startDate);
  console.log(endDate);
  useEffect(() => {}, [user]);
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("inside handler");
    console.log(user);
    // dispatch(newUserRegistration(user));
  };

  const FirstNameChangeHandler = (event) => {
    setUser({ ...user, first_name: event.target.value });
  };

  const LastNameChangeHandler = (event) => {
    setUser({ ...user, last_name: event.target.value });
  };

  const EmailChangeHandler = (event) => {
    setUser({ ...user, email: event.target.value });
  };

  const PhoneChangeHandler = (event) => {
    setUser({ ...user, phone: event.target.value });
  };

  const schoolNameChangeHandler = (event) => {
    console.log(event.target.value);
    setUser({ ...user, schoolName: event.target.value });
  };

  const schoolAddressChangeHandler = (event) => {
    console.log(event.target.value);
    setUser({ ...user, schoolAddress: event.target.value });
  };

  const CityChangeHandler = (event) => {
    console.log(event.target.value);
    setUser({ ...user, city: event.target.value });
  };

  const BoardChangeHandler = (event) => {
    console.log(event.target.value);
    setUser({ ...user, board: event.target.value });
  };

  const teacheingApplicantRadioHandler = (event) => {
    console.log(event.target.value);
    setUser({ ...user, userType: event.target.value });
    var employerDiv = document.getElementById("employerDiv");
    employerDiv.style.display = "none";
    var applicantDiv = document.getElementById("applicantDiv");
    applicantDiv.style.display = "block";
  };

  const teacherRadioHandler = (event) => {
    console.log(event.target.value);
    setUser({ ...user, userType: event.target.value });
    var employerDiv = document.getElementById("employerDiv");
    employerDiv.style.display = "block";
    var applicantDiv = document.getElementById("applicantDiv");
    applicantDiv.style.display = "none";
  };

  const SchoolImagesChangeHandler = (event) => {
    const files = event.target.files;
    console.log(files[0].name);
    setUser({ ...user, schoolImage: files[0].name });
  };

  const profileChangeHandler = (event) => {
    const files = event.target.files;
    console.log(files[0].name);
    setUser({ ...user, profilePicture: files[0].name });
  };

  const experienceChangeHandler = (event) => {
    console.log(event.target.value);
    setUser({ ...user, schoolImage: event.target.value });
  };

  const resumeChangeHandler = (event) => {
    const files = event.target.files;
    console.log(files[0].name);
    setUser({ ...user, resume: files[0].name });
  };

  const roleChangeHandler = (event) => {
    console.log(event.target.value);
    setUser({ ...user, role: event.target.value });
  };

  return (
    <Container className={classes.container}>
      <Card className={classes.paper}>
        <h2 className={classes.heading}>Register</h2>
        <br />
        {message && (
          <Alert
            className={classes.alertMessage}
            variant={status === "success" ? "success" : "danger"}
          >
            {message}
          </Alert>
        )}
        <Form className={classes.formText} onSubmit={onSubmitHandler}>
          <Row>
            <Col>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>First name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter first name"
                  name="first_name"
                  className={classes.formText}
                  onBlur={FirstNameChangeHandler}
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Last name</Form.Label>
                <Form.Control
                  type="text"
                  name="last_name"
                  placeholder="Enter last name"
                  className={classes.formText}
                  onBlur={LastNameChangeHandler}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row>
            <Col>
              <Form.Group controlId="formBasicEmail" className={classes.form}>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter email"
                  className={classes.formText}
                  onBlur={EmailChangeHandler}
                  required
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formBasicEmail" className={classes.form}>
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  placeholder="Enter phone no"
                  className={classes.formText}
                  onBlur={PhoneChangeHandler}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className={classes.checkBoxes}>
            <Col>
              <Form.Check
                type="radio"
                name="JobRegistrationRadio"
                onClick={teacheingApplicantRadioHandler}
                label="Teaching Applicant/Job Seeker"
                value="Teaching Applicant"
              />
            </Col>
            <Col>
              <Form.Check
                type="radio"
                name="JobRegistrationRadio"
                onClick={teacherRadioHandler}
                label="School/ Employer"
                value="Employer"
              />
              {/* <Form.Group controlId="formBasicEmail" className={classes.form}>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control
                  type="password"
                  name="confirm_password"
                  placeholder="Enter password"
                  className={classes.formText}
                  onChange={ConfirmPasswordChangeHandler}
                  required
                />
              </Form.Group>
              <Form.Text>
                {!passwordError.confirmPass && (
                  <div className="text-danger mb-3">
                    Password doesn't match!
                  </div>
                )}
              </Form.Text> */}
            </Col>
          </Row>
          <div id="employerDiv">
            <Row>
              <Col>
                <Form.Group
                  controlId="formBasicSchoolName"
                  className={classes.form}
                >
                  <Form.Label>School Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="school name"
                    placeholder="Enter School Name"
                    className={classes.formText}
                    onChange={schoolNameChangeHandler}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  controlId="formBasicSchoolAddress"
                  className={classes.form}
                >
                  <Form.Label>School Address</Form.Label>
                  <Form.Control
                    type="text"
                    name="school Address"
                    placeholder="Enter School Address"
                    className={classes.formText}
                    onChange={schoolAddressChangeHandler}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="formBasicCity" className={classes.form}>
                  <Form.Label>City</Form.Label>
                  <Form.Control
                    type="text"
                    name="city"
                    placeholder="Enter City"
                    className={classes.formText}
                    onChange={CityChangeHandler}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group controlId="formBasicBoard" className={classes.form}>
                  <Form.Label>Board</Form.Label>
                  <Form.Control
                    type="text"
                    name="board"
                    placeholder="Enter Board"
                    className={classes.formText}
                    onChange={BoardChangeHandler}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group
                  controlId="formBasicSchoolImages"
                  className={classes.formImage}
                >
                  <Form.Label>School Image</Form.Label>
                  <Form.Control
                    type="file"
                    name="school images"
                    className={classes.formText}
                    onChange={SchoolImagesChangeHandler}
                  />
                </Form.Group>
              </Col>
            </Row>
          </div>
          <div id="applicantDiv">
            <Row>
              <Col>
                <Form.Group
                  controlId="formBasicExperience"
                  className={classes.form}
                >
                  <Form.Label>Experience</Form.Label>
                  <Form.Control
                    type="number"
                    name="experience"
                    className={classes.formText}
                    onChange={experienceChangeHandler}
                  />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group
                  controlId="formBasicResume"
                  className={classes.form}
                >
                  <Form.Label>Upload Resume</Form.Label>
                  <Form.Control
                    type="file"
                    name="resume"
                    className={classes.formText}
                    onChange={resumeChangeHandler}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group controlId="formBasicRole" className={classes.form}>
                  <Form.Label>Role</Form.Label>
                  <Form.Control
                    type="text"
                    name="role"
                    className={classes.formText}
                    onChange={roleChangeHandler}
                  />
                </Form.Group>
              </Col>

              <Col>
                <Form.Group
                  controlId="formBasicSchool"
                  className={classes.form}
                >
                  <Form.Label>School Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="schoolName"
                    className={classes.formText}
                    onChange={schoolNameChangeHandler}
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="Start Date"
                    format="dd-MMM-yy"
                    value={startDate}
                    className={classes.fontSize}
                    onChange={startDateHandler}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </MuiPickersUtilsProvider>
              </Col>
              <Col>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="End Date"
                    format="dd-MMM-yy"
                    value={endDate}
                    className={classes.fontSize}
                    onChange={endDateHandler}
                    KeyboardButtonProps={{
                      "aria-label": "change date",
                    }}
                  />
                </MuiPickersUtilsProvider>
              </Col>
            </Row>
            <Row>
              <Col>
                <Form.Group
                  controlId="formBasicProfilePicture"
                  className={classes.form}
                >
                  <Form.Label>Profile Picture</Form.Label>
                  <Form.Control
                    type="file"
                    name="profile"
                    // onChange={}
                    className={classes.formText}
                    onChange={profileChangeHandler}
                  />
                </Form.Group>
              </Col>
            </Row>
          </div>
          <Row>
            <div className={classes.btnBox}>
              <Button
                type="submit"
                variant="contained"
                className={classes.btn}
                disableElevation
              >
                Sign Up
              </Button>
              {isLoading && (
                <span className={classes.spinner}>
                  <Spinner variant="info" animation="border" />
                </span>
              )}
            </div>
          </Row>
        </Form>
        <div className={classes.centered}>
          <h6>
            By clicking Sign Up, you agree to our &nbsp;
            <a href="/#" target="_blank">
              Terms
            </a>{" "}
            and{" "}
            <a href="/#" target="_blank">
              Privacy Policy
            </a>{" "}
            <br />
            You may receive SMS or email notifications from us and can opt out
            at any time.
          </h6>
        </div>
      </Card>
    </Container>
  );
}

export default Register;
