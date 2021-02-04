import React from 'react';
import { Form, Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import { Paper, Button } from '@material-ui/core';
import CustomInput from './CustomInput';

export default function Login() {
  let history = useHistory();
  const initialValues = {
    userName: '',
    password: '',
  };

  const validationSchema = yup.object().shape({
    userName: yup
      .string()
      .matches('demo', 'Invalid Username')
      .required('Username is required'),
    password: yup
      .string()
      .matches('demo', 'Invalid Password')
      .required('Password is required'),
  });

  const handleSubmit = (formValues) => {
    history.push('/dashboard');
  };
  return (
    <div className="main-wrap">
      <h1 className="login-header">Log Into OpenSky</h1>
      <Paper className="login-paper" elevation={3}>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {(props) => {
            return (
              <Form>
                <CustomInput
                  id="userName"
                  value={props.values.userName}
                  fullWidth={true}
                  className="username"
                  placeholder="Username"
                />
                <p style={{ color: '#d56565cf' }}>
                  {props.errors.userName ? props.errors.userName : null}
                </p>
                <CustomInput
                  value={props.values.password}
                  id="password"
                  fullWidth={true}
                  type="password"
                  className="passwordCont"
                  placeholder="Password"
                />

                <p style={{ color: '#d56565cf' }}>
                  {props.errors.password ? props.errors.password : null}
                </p>

                <Button className="submitbtn" onClick={props.handleSubmit}>
                  Submit
                </Button>
              </Form>
            );
          }}
        </Formik>
      </Paper>
    </div>
  );
}
