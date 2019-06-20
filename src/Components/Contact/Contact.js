import React from 'react';

const Contact = props => {
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
      <aside />
    </main>
  );
};

export default Contact;
