import React, { useState } from "react";
import classes from "./Login.module.css";
import Button from "@material-ui/core/Button";
import { Container, Card, Form, Spinner, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { loginSliceActions } from "../store/login-slice";
import { Link, useHistory } from "react-router-dom";
import { userLogin } from "../store/login-actions";
import getUserProfile from "../store/user-actions";

function Login() {
  const [enteredEmail, setEnteredEmail] = useState();
  const [enteredPassword, setEnteredPassword] = useState();
  const dispatch = useDispatch();
  const history = useHistory();
  const { isLoading, error } = useSelector((state) => state.login);
  const onSubmitHandler = async (event) => {
    event.preventDefault();
    console.log("input");
    const enteredEmailValue = enteredEmail;
    const enteredPasswordValue = enteredPassword;
    console.log(enteredEmailValue, " ", enteredPasswordValue);
    if (!enteredEmailValue || !enteredPasswordValue) {
      return alert("please fill up form!");
    }
    const formParams = {
      email: enteredEmailValue,
      password: enteredPasswordValue,
    };
    dispatch(loginSliceActions.loginPending());

    try {
      const isAuth = await userLogin(formParams);
      if (isAuth.status === "error") {
        return dispatch(loginSliceActions.loginFail(isAuth.message));
      }
      dispatch(loginSliceActions.loginSuccess());
      dispatch(getUserProfile());
      history.push("/");
    } catch (error) {
      dispatch(loginSliceActions.loginFail(error.message));
    }
  };

  const onBlurEmailHandler = (event) => {
    console.log(event.target.value);
    setEnteredEmail(event.target.value);
  };

  const onBlurPasswordHandler = (event) => {
    console.log(event.target.value);
    setEnteredPassword(event.target.value);
  };
  console.log(isLoading);
  return (
    <Container className={classes.container}>
      <Card className={classes.paper}>
        <h2 className={classes.heading}>Sign In</h2>
        <br />
        {error && <Alert variant="danger">{error}</Alert>}
        <Form className={classes.formText} onSubmit={onSubmitHandler}>
          <Form.Group controlId="formBasicEmail" className={classes.form}>
            <Form.Label>Email / Phone no. / Student Id</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              className={classes.formText}
              onBlur={onBlurEmailHandler}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className={classes.form}>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onBlur={onBlurPasswordHandler}
              className={classes.formText}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox" className={classes.form}>
            <div className={classes.flexBox}>
              <Form.Check
                type="checkbox"
                label="Remember me"
                className={classes.formText}
              />
              <a href="/#" className={classes.forgotLink}>
                Forgor your password?
              </a>
            </div>
          </Form.Group>
          <div className={classes.signInbtnBox}>
            <Button
              type="submit"
              variant="contained"
              className={classes.btn}
              disableElevation
            >
              Sign In
            </Button>
            {isLoading && (
              <span>
                <Spinner variant="primary" animation="border" />
              </span>
            )}
            <br />
          </div>
        </Form>
        <div className={classes.btnBox}>
          <div className={classes.box}>
            <span className={classes.formText}>New User?</span>
            <br />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.signupBtn}
              disableElevation
            >
              <Link to="/register" className={classes.clickBtn}>
                Click to sign up
              </Link>
            </Button>
          </div>
        </div>
      </Card>
    </Container>
  );
}

export default Login;
