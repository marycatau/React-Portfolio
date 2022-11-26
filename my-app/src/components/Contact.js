import React , { useState }from 'react';
import { validateEmail } from '../utils/helpers';

/*
import { Formik, Field } from "formik";
import "bootstrap/dist/css/bootstrap.css";
import * as yup from "yup";

import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Feedback from 'react-bootstrap/Feedback';

//const { Formik } = formik;

const schema = yup.object().shape({
  Name: yup.string().required(),
  email: yup.string().required(),
  Message: yup.string().required(),
});

*/
export default function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [Message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and password
    // TODO: Add an else statement to the end that will set the password to the value of 'inputValue'

    if (inputType === 'email') {
      setEmail(inputValue);
      // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
      if (!validateEmail(email)) {
        setErrorMessage('Email is invalid ');
        // We want to exit out of this code block if something is wrong so that the user can correct it
        // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
      }
      else {
        setErrorMessage('');
      }
    } else if (inputType === 'userName') {
      setUserName(inputValue);
      if(userName==null||userName==''){
        setErrorMessage('Please input your name');
      }
      else{
        setErrorMessage('');
      }
    }else if (inputType === 'Message') {
      setMessage(inputValue);
      if(!Message){
        setErrorMessage('Please input your message');
      }
      else{
        setErrorMessage('');
      }
    }

    
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid ');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the password is not valid. If so, we set an error message regarding the password.
    }

    // If successful, we want to clear out the input after registration.
    setUserName('');
    // TODO: Set the password back to an empty string after the user clicks submit
    setEmail('');
    setMessage('');
  };

  return (

    <div>
    <p>Contact Form</p>
    <form className="form" >
      <div ClassName="mb-3">
        <label for="userName">Name</label><br/>
        <input
            value={userName}
            name="userName"
            id="userName"
            
            onBlur={handleInputChange}
            type="text"
            placeholder="Please enter your name"
            className="form-control"
          />
      </div>

      <div ClassName="mb-3">
      <label for="email">Email address</label><br/>
      <input
        value={email}
        name="email"
        id="email"
        
        onBlur={handleInputChange}
        type="email"
        placeholder="Please enter a valid email"
        className="form-control"
      />
      </div>

      <div ClassName="mb-3"> 
      <label for="Message">message</label><br/> 
      <input
        value={Message}
        name="Message"
        id="Message"
        
        onBlur={handleInputChange}
        type="text"
        placeholder="Please leave your message"
        className="form-control"
      />
      </div>
      
      <button type="button" onClick={handleFormSubmit}>
        Submit
      </button>
    </form>
    {errorMessage && (
      <div>
        <p className="error-text">{errorMessage}</p>
      </div>
    )}
  </div>
);

/*
    <Formik
    validationSchema={schema}
    onSubmit={console.log}

  >
    {({
      handleSubmit,
      handleChange,
      handleBlur,
      values,
      touched,
      isValid,
      errors,
    }) => (
      <Form noValidate onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group
            as={Col}
            md="4"
            controlId="validationFormik101"
            className="position-relative"
          >
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="Name"
              placeholder="Please enter your Name"
              onChange={handleChange}
              isValid={touched.Name && !errors.Name}
            />
            <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            as={Col}
            md="4"
            controlId="validationFormik102"
            className="position-relative"
          >
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Please enter your email address"
              name="email"
              onChange={handleChange}
              isValid={touched.email && !errors.email}
            />

            <Form.Control.Feedback tooltip>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationFormikUsername2">
            <Form.Label>Message</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Please leave your message"
                aria-describedby="inputGroupPrepend"
                name="Message"
                onChange={handleChange}
                isInvalid={!!errors.Message}
              />
              <Form.Control.Feedback type="invalid" tooltip>
                {errors.Message}
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Button type="submit">Submit form</Button>
      </Form>
    )}
  </Formik>
);
}/*
    <div>
      <p>Contact Form</p>
      <form className="form" >
        <div ClassName="mb-3">
          <label for="Name">Name</label><br/>
          <input
              value={Name}
              name="Name"
              id="Name"
              onChange={handleInputChange}
              type="text"
              placeholder="Please enter your name"
              className="form-control"
            />
        </div>

        <div ClassName="mb-3">
        <label for="email">Email address</label><br/>
        <input
          value={email}
          name="email"
          id="email"
          onChange={handleInputChange}
          type="email"
          placeholder="Please enter a valid email"
          className="form-control"
        />
        </div>

        <div ClassName="mb-3"> 
        <label for="Message">message</label><br/> 
        <input
          value={Message}
          name="Message"
          id="Message"
          onChange={handleInputChange}
          type="text"
          placeholder="Please leave your message"
          className="form-control"
        />
        </div>
        
        <button type="button" onClick={handleFormSubmit}>
          Submit
        </button>
      </form>
      {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}
    </div>
  );

*/
}
