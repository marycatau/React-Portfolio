import React , { useState }from 'react';
import { validateEmail } from '../utils/helpers';


export default function Contact() {

  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [Message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {

    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
        if (!validateEmail(email)) {
        setErrorMessage('Email is invalid ');
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
   
    e.preventDefault();

   
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid ');
      
      return;
      
    }

    
    setUserName('');
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

}
