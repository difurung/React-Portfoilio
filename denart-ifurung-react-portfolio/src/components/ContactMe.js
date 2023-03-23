import React, { useState } from "react";
import { validateEmail } from "../utils/helpers";



function ContactMe() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (event) => setName(event.target.value);
  const handleEmailChange = (event) => setEmail(event.target.value);
  const handleMessageChange = (event) => setMessage(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    // validate email address
    if (!validateEmail(email)) {
      alert("Please enter a valid email address");
      return;
    }

    // create mailto link with form data
    const mailtoLink = `mailto:youremail@example.com?subject=New message from ${name}&body=${message}`;

    // open default email client with mailto link
    window.location.href = mailtoLink;

    // clear form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div
          style={{
            display: "flex",
            padding: "1vh 0vh 1vh 0vh",
            flexDirection: "column",
          }}
        >
          <label
            style={{
              padding: "1vh 0vh 1vh 0vh",
            }}
            className="label"
          >
            Name:
            <input type="text" value={name} onChange={handleNameChange} />
          </label>
          <label
            style={{
              padding: "1vh 0vh 1vh 0vh",
            }}
          >
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
          <label
            style={{
              padding: "1vh 0vh 1vh 0vh",
            }}
          >
            Message:
            <textarea value={message} onChange={handleMessageChange} />
          </label>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactMe;
