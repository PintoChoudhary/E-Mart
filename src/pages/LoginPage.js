import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Navbar from '../components/Navbar';

function LoginPage() {
  const navigate = useNavigate();
  const [requestResponse, setRequestResponse] = useState({
    textMessage: '',
    alertClass: '',
  });
  const initialValues = {
    username: '',
    password: '',
  };
  const onSubmit = (values) => {
    axios
      .post('https://fakestoreapi.com/auth/login', values)
      .then(
        (response) => {
          setRequestResponse({
            textMessage: 'login successful',
            alertClass: 'alert alert-success',
          });
          localStorage.setItem('token', response.data.token);
          navigate('/');
        },
        (error) => {
          setRequestResponse({
            textMessage: 'login unsuccessful',
            alertClass: 'alert alert-danger',
          });
          console.log(error);
        }
      )
      .catch((error) => {
        console.log(error);
      });
  };
  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required').min(6, 'Must be at least 6 characters'),
  });
  return (
    <>
    <Navbar/>
    <div className="container mt-5 d-flex justify-content-center align-items-center">
      <div className="col-md-8 col-lg-7">
        <div className="card shadow">
          <div className="card-body">
            <div className={requestResponse.alertClass} role="alert">
              {requestResponse.textMessage}
            </div>
            <h2 className="text-center mb-4">Login</h2>
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema} validateOnMount>
              {(formik) => {
                return (
                  <Form>
                    <div className={`form-group mt-3 ${formik.touched.username && formik.errors.username ? 'has-danger' : ''}`}>
                      <label htmlFor="username">Username</label>
                      <Field
                        type="text"
                        name="username"
                        id="username"
                        className={`form-control ${formik.touched.username && formik.errors.username ? 'is-invalid' : ''}`}
                      />
                      <ErrorMessage name="username">
                        {(errorMessage) => <small className="text-danger">{errorMessage}</small>}
                      </ErrorMessage>
                    </div>
                    <div className={`form-group mt-3 ${formik.touched.password && formik.errors.password ? 'has-danger' : ''}`}>
                      <label htmlFor="password">Password</label>
                      <Field
                        type="password"
                        name="password"
                        id="password"
                        className={`form-control ${formik.touched.password && formik.errors.password ? 'is-invalid' : ''}`}
                      />
                      <ErrorMessage name="password">
                        {(errorMessage) => <small className="text-danger">{errorMessage}</small>}
                      </ErrorMessage>
                    </div>
                    <div className="d-flex justify-content-center mt-3">
                      <button type="submit" name="login" id="login" className="btn btn-outline-dark btn-block mt-4" disabled={!formik.isValid}>
                        {formik.isSubmitting ? 'Submitting...' : 'Login'}
                      </button>
                    </div>
                  </Form>
                );
              }}
            </Formik>
            <br />
            <p className="text-center">
              New User? <Link to="/register">Click Here</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default LoginPage;
