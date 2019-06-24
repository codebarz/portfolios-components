import React, { useState } from 'react';

import './Contact.css';

const Contact = props => {
  const [fullnameState, changeFullnameState] = useState('');

  const changeFullnameStateHandler = event => {
    const fullnamePreview = document.querySelector('.blog-aside .fullname');
    fullnamePreview.innerHTML = event.target.value;
    changeFullnameState(event.target.value);
  };
  return (
    <main className="hire-main">
      <article>
        <span role="img" aria-label="Imgae">
          Let's get that great idea or project of yours done. No delays 😉
          <b />
          <br /> Fill out this form and ill get back to you shortly
        </span>
        <form method="" action="">
          <input
            type="text"
            name="fullname"
            id="fullname"
            value={fullnameState}
            placeholder="Full Name"
            onChange={changeFullnameStateHandler}
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            // value={inputState.inputsValue[1].email}
            placeholder="Email Address"
            required
          />
          <input
            type="number"
            name="phonenumber"
            id="phonenumber"
            // value={inputState.inputsValue[2].phoneNumber}
            placeholder="Phone Number"
          />
          <textarea
            name="project"
            id="project"
            placeholder="What's your project about"
            rows="10"
            // value={inputState.inputsValue[3].project}
            required
          />
          <br />
          <br />
          <label htmlFor="submit">
            <i className="mdi mdi-send" />
            Send
          </label>
          <input type="submit" name="submit" id="submit" value="Send" />
        </form>
      </article>
      <aside className="blog-aside">
        <div className="contact-preview">
          <p className="fullname" />
          <p className="email" />
          <p className="phoneNumber" />
          <p className="project" />
        </div>
      </aside>
    </main>
  );
};

export default Contact;
