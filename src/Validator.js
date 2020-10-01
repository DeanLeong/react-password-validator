import React, { useEffect, useState } from "react";
import "./Validator.css";

function Validator() {
  const [username, setUsername] = useState("soleilyasmina");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [message, setMessage] = useState("No passwords entered.");

  // otherwise make the message passwords match

  // useEffect(cb, [whenToRun])
  // if anything in whenToRun changes, run cb
  // when password or passwordConfirm change, i want to see if they match
  useEffect(() => {
    // if either password is blank, make the message as No passwords entered.
    if (password === "" || passwordConfirm === "") {
      setMessage("No passwords entered!");
      // if the password don't match, make the message "passwords do not match"
    } else if (password !== passwordConfirm) {
      setMessage("Passwords don't match!");
    } else {
      setMessage("Hooray! Password. Nice.");
    }
  }, [password, passwordConfirm]);

  // this does the same thing as the useEffect, but only when you submit the form.
  const handleSubmit = (e) => {
    e.preventDefault();
    // if either password is blank, make the message as No passwords entered.
    if (password === "" || passwordConfirm === "") {
      setMessage("No passwords entered!");
      // if the password don't match, make the message "passwords do not match"
    } else if (password !== passwordConfirm) {
      setMessage("Passwords don't match!");
    } else {
      setMessage("Hooray! Password. Nice.");
    }
  };

  return (
    <div className="form">
      <h1>Sign Up</h1>
      <h3>{message}</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <input
          type="password"
          placeholder="password confirmation"
          value={passwordConfirm}
          onChange={(event) => setPasswordConfirm(event.target.value)}
        />
        <button onClick={() => setUsername("")}>CLEAR NAME</button>
        <button type="submit">VALIDATE</button>
      </form>
    </div>
  );
}

export default Validator;
