import React, { useState } from "react";
import "./Auth.css";
import { Link } from "react-router-dom";
import { Container, Toast } from "../components/Helper";

const SignUpLecturer = (props) => {
  const [lecturer, setLecturer] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    password2: "",
  });

  const {
    regnumber,
    firstname,
    lastname,
    username,
    programme,
    password,
    password2,
  } = lecturer;

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setLecturer({
      ...lecturer,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ((username, lastname, firstname) === "") {
      return Toast.error("No field should be empty");
    }
    if (password.length < 4) {
      return Toast.error("Password Must be up to 4 characters");
    }
    if (password2 !== password) {
      return Toast.error("Passwords Don't Match");
    }
    const list = JSON.stringify({
      firstname,
      lastname,
      username,
      programme,
      password,
      type: "lecturer",
    });

    localStorage.setItem("lecturer", list);
    props.history.push("/");
  };

  return (
    <Container>
      <div className="adbackground" />
      <div className="form-container">
        <form>
          <h3>SIGNUP AS A LECTURER</h3>
          <input
            type="text"
            name="firstname"
            value={firstname}
            placeholder="Firstname"
            onChange={handleChange}
          />
          <input
            type="text"
            name="lastname"
            value={lastname}
            placeholder="Lastname"
            onChange={handleChange}
          />
          <input
            type="text"
            name="username"
            value={username}
            placeholder="Username"
            onChange={handleChange}
          />
          <input
            type="password"
            value={password}
            name="password"
            placeholder="Password"
            onChange={handleChange}
          />
          <input
            type="password"
            value={password2}
            name="password2"
            placeholder="Re-type Password"
            onChange={handleChange}
          />
          <div className="clicktologin lecturer">
            <button onClick={handleSubmit}>Sign Up</button>
            <Link to="/" className="p">
              Click here to login
            </Link>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default SignUpLecturer;
