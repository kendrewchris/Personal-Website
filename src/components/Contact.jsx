import React, { useState } from 'react';

const Contact = () => {
  const [emailSubject, setEmailSubject] = useState(''); // Add emailSubject state
  const [message, setMessage] = useState('');
  const email = 'kchri027@ucr.edu';

  const handleInputChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubjectChange = (event) => { // Handle subject input change
    setEmailSubject(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const emailBody = `${message}`;
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
    window.open(mailtoLink);
  };

  return (
    <section id='contact'>
      <form onSubmit={handleFormSubmit}>
        <div className="background">
          <div className="container">
            <div className="screen">
              <div className="screen-header">
                <div className="screen-header-left">
                  <div className="screen-header-button close"></div>
                  <div className="screen-header-button maximize"></div>
                  <div className="screen-header-button minimize"></div>
                </div>
                <div className="screen-header-right">
                  <div className="screen-header-ellipsis"></div>
                  <div className="screen-header-ellipsis"></div>
                  <div className="screen-header-ellipsis"></div>
                </div>
              </div>
              <div className="screen-body">
                <div className="screen-body-item left">
                  <div className="app-title">
                    <span>Contact</span>
                    <span>Me</span>
                  </div>
                </div>
                <div className="screen-body-item">
                  <div className="app-form">
                    <div className="app-form-group">
                      <input
                        className="app-form-control"
                        value={emailSubject}
                        onChange={handleSubjectChange} 
                        placeholder="SUBJECT"
                        autoCapitalize="off"
                      />
                    </div>
                    <div className="app-form-group message">
                      <textarea
                        className="app-form-control"
                        value={message}
                        onChange={handleInputChange}
                        placeholder="MESSAGE"
                        rows={4}
                        cols={50}
                        autoCapitalize="off"
                      />
                    </div>
                    <div className="app-form-group buttons">
                      <button className="app-form-button">SEND</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default Contact;

