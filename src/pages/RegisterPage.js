import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {NavLink , useNavigate} from 'react-router-dom'
import Navbar from '../components/Navbar';
const RegisterPage = () => {
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    password: '',
  };
  const navigate = useNavigate()
  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    phone: Yup.string().required('Phone is required'),
    password: Yup.string()
      .required('Password is required')
      .min(8, 'Password must be at least 8 characters long'),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    
    console.log(values);
    setSubmitting(false);
    navigate('/login')
  };

  return (
    <>
    <Navbar/>
    <div className="container mt-5 d-flex justify-content-center align-items-center">
      <div className="col-md-8 col-lg-7">
        <div className="card shadow">
          <div className="card-body">
            <h2 className="text-center mb-4">Register</h2>
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {({ isValid, isSubmitting, touched, errors }) => (
              <Form>
                <div className={`form-group mt-3 ${touched.name && errors.name ? 'has-danger' : ''}`}>
                  <label htmlFor="name">Name</label>
                  <Field
                    type="text"
                    className={`form-control  ${touched.name && errors.name ? 'is-invalid' : ''}`}
                    id="name"
                    name="name"
                    placeholder="Enter your name"
                  />
                  <ErrorMessage name="name" component="div" className="text-danger" />
                </div>

                <div className={`form-group mt-3 ${touched.email && errors.email ? 'has-danger' : ''}`}>
                  <label htmlFor="email">Email</label>
                  <Field
                    type="email"
                    className={`form-control  ${touched.email && errors.email ? 'is-invalid' : ''}`}
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                  />
                  <ErrorMessage name="email" component="div" className="text-danger" />
                </div>

                <div className={`form-group mt-3 ${touched.phone && errors.phone ? 'has-danger' : ''}`}>
                  <label htmlFor="phone">Phone</label>
                  <Field
                    type="text"
                    className={`form-control  ${touched.phone && errors.phone ? 'is-invalid' : ''}`}
                    id="phone"
                    name="phone"
                    placeholder="Enter your phone number"
                    />
                  <ErrorMessage name="phone" component="div" className="text-danger" />
                </div>

                <div className={`form-group mt-3 ${touched.password && errors.password ? 'has-danger' : ''}`}>
                  <label htmlFor="password">Password</label>
                  <Field
                    type="password"
                    className={`form-control  ${touched.password && errors.password ? 'is-invalid' : ''}`}
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    />
                  <ErrorMessage name="password" component="div" className="text-danger" />
                </div>
                <div className="d-flex justify-content-center mt-3">
                  <button type="submit" className="btn btn-outline-dark btn-block mt-4" disabled={!isValid || isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
              </Form>
              )}
            </Formik>
            <br />
                        <p className="text-center">
                            Already registered? <NavLink to="/login">Click Here</NavLink>
                        </p>
          </div>
        </div>
      </div>
    </div>
              </>
  );
};

export default RegisterPage;
