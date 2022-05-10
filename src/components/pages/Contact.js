import React, { useState } from 'react';
// Here we import a helper function that will check if the email is valid
import { validateEmail } from '../../utils/helpers';

export default function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // Based on the input type, we set the state of either email, username, and message
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormSubmit = (e) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    e.preventDefault();

    // First we check to see if the email is not valid or if the name is empty. If so we set an error message to be displayed on the page.
    if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the message is not valid. If so, we set an error message regarding the message.
    }

    if (!name) {
      setErrorMessage('Name is empty');
      // We want to exit out of this code block if something is wrong so that the user can correct it
      return;
      // Then we check to see if the message is not valid. If so, we set an error message regarding the message.
    }


    if (!message) {
      setErrorMessage('Message is empty');
      return;
    }
   

    // If everything goes according to plan, we want to clear out the input after a successful registration.
    setName('');
    setMessage('');
    setEmail('');
  };



  return (
    <div>

          


      <section className="container my-5">
      
          <div className="row">       
            <div className="col-12 col-md-4 col-xl-3">
              <h1> Cotact Me </h1>        
            </div>
            <div className="col-12 col-md-8 col-xl-9" id="navContactMe">
              <ul>
                <li><a href="https://api.whatsapp.com/send?phone=+5215537335843" target="_blank" rel="noreferrer">+52 1 5537335843</a></li>
                <li><a href="mailto:marco.gonzalez@criptosedena.org" rel="noreferrer">marco.gonzalez@criptosedena.org</a></li>               
              </ul>
            </div>
          </div>



          <div>
           
            <form className="form">
            <label>Name: </label>
              <input
                value={name}
                name="name"
                onChange={handleInputChange}
                type="text"
                placeholder="Name"
                required
              />
              <label>Email: </label>
              <input
                value={email}
                name="email"
                onChange={handleInputChange}
                type="email"
                placeholder="Email"
                required
              />
              <label>Message: </label>
              <textarea required
                value={message}
                name="message"
                onChange={handleInputChange}
                type="message"
                placeholder="Message"                
              />
              <button type="button" onClick={handleFormSubmit}>Submit</button>
            </form>
            {errorMessage && (
              <div>
                <p className="error-text">{errorMessage}</p>
              </div>
            )}
          </div>

          

      </section>
    
    
    </div>
  );
}
