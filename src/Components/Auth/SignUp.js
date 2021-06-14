import React, { useState } from "react";
import "./Auth.css";
import { Link } from "react-router-dom";
import { Container, Toast } from "../components/Helper";

const SignUp = (props) => {
  const [student, setStudent] = useState({
    regnumber: "",
    firstname: "",
    lastname: "",
    username: "",
    programme: "bachelors",
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
  } = student;

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setStudent({
      ...student,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ((username, regnumber, lastname, firstname) === "") {
      return Toast.error("No field should be empty");
    }
    if (password.length < 4) {
      return Toast.error("Password Must be up to 4 characters");
    }
    if (password2 !== password) {
      return Toast.error("Passwords Don't Match");
    }
    const list = JSON.stringify({
      regnumber,
      firstname,
      lastname,
      username,
      programme,
      password,
      type: "student",
    });

    localStorage.setItem("student", list);

    console.log(regnumber, firstname, lastname, username, programme, password);
    props.history.push("/");
  };

  return (
    <Container>
      <div className="adbackground" />
      <div className="form-container student">
        <form>
          <h3>SIGNUP AS A STUDENT</h3>
          <input
            type="text"
            name="regnumber"
            value={regnumber}
            placeholder="Registration Number"
            onChange={handleChange}
          />
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
          <h3>Select Programme</h3>
          <select name="programme" value={programme} onChange={handleChange}>
            <option value="bachelors">Bachelors</option>
            <option value="masters">Masters</option>
          </select>
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
          <div className="clicktologin">
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

export default SignUp;
