import React, { useState } from "react";
import { Container, Toast } from "../components/Helper";
import "./Auth.css";
import { Link } from "react-router-dom";

const Login = (props) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
    type: "student",
  });

  const { username, password, type } = user;

  const handleChange = (e) => {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.type === "student") {
      logStudent();
    } else {
      logLecturer();
    }
  };

  const logStudent = () => {
    const student = JSON.parse(localStorage.getItem("student"));
    const { username, password } = student;

    if (user.username !== username) {
      return Toast.error("Invalid Credentials");
    }
    if (user.password !== password) {
      return Toast.error("Invalid Password");
    }
    localStorage.setItem("token", "hdkdiikdkkdookdlo");

    // props.history.push("/");
  };

  const logLecturer = () => {
    const lecturer = JSON.parse(localStorage.getItem("lecturer"));
    const { username, password } = lecturer;

    if (user.username !== username) {
      return Toast.error("Invalid Credentials");
    }
    if (user.password !== password) {
      return Toast.error("Invalid Password");
    }
    localStorage.setItem("token", "hdkdiikdkkdookdlo");

    // props.history.push("/");
  };

  return (
    <Container>
      <div className="adbackground" />
      <div className="form-container">
        <form>
          <h3>Sign In</h3>
          <input
            type="text"
            name="username"
            value={username}
            onChange={handleChange}
            placeholder="Please Enter Username"
          />
          <input
            type="text"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Please Enter Password"
          />
          <select name="type" value={type} onChange={handleChange}>
            <option value="student">Student</option>
            <option value="lecturer">Lecturer</option>
          </select>
          <button onClick={handleSubmit}>Sign in</button>
        </form>
        <div className="newUser">
          <p>New user ENROLL to start</p>
          <h3>Sign Up</h3>
          <div className="newUser-button">
            <button>
              <Link to="/signup" className="links">
                Student-Enroll
              </Link>
            </button>
            <button>
              <Link to="/lecturer" className="links">
                Lecturer-Enroll
              </Link>
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Login;
