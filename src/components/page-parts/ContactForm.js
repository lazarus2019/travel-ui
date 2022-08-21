import React, { useState } from "react";

function ContactForm() {
  const formInitial = Object.freeze({
    name: "",
    email: "",
    message: "",
  });

  const [state, setState] = useState(formInitial);

  const changeHandler = (e) => {
    setState({
      ...state,

      // Trimming white space
      [e.target.name]: e.target.value.trim(),
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(state);
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="group">
        <h3 className="page__contact__heading">Contact Form</h3>
      </div>
      <div className="group">
        <input
          type="text"
          name="name"
          className="group__control"
          placeholder="Your name eg.smith"
          onChange={changeHandler}
        />
      </div>
      <div className="group">
        <input
          type="email"
          name="email"
          className="group__control"
          placeholder="Your email eg.smith@gmail.com"
          onChange={changeHandler}
        />
      </div>
      <div className="group">
        <textarea
          cols="12"
          rows="8"
          name="message"
          className="group__textarea"
          placeholder="Write your message eg. I have troubles"
          onChange={changeHandler}
        />
      </div>
      <div className="group">
        <input type="submit" value="send email &rarr;" className="btn-dark" />
      </div>
    </form>
  );
}

export default ContactForm;
