import React from 'react';
import './From.css';

const Form = props => {
  return (
    <main className="hire-main">
      <article>
        <p>
          Let's get that great idea or project of yours done. No delays
          <span role="img" arial-label="wink">
            😉
          </span>
          <br />
          <br /> Fill out this form and ill get back to you shortly
        </p>
        <form method="" action="">
          <input
            type="text"
            name="fullname"
            id="fullname"
            placeholder="Full Name"
            required
          />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email Address"
            required
          />
          <input
            type="number"
            name="phonenumber"
            id="phonenumber"
            placeholder="Phone Number"
          />
          <textarea
            name="project"
            id="project"
            placeholder="What's your project about"
            rows="10"
            required
          />
          <br />
          <br />
          <label for="submit">
            <i class="mdi mdi-send" />
            Send
          </label>
          <input type="submit" name="submit" id="submit" value="Send" />
        </form>
      </article>
    </main>
  );
};

export default Form;
