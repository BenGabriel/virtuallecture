import React, { useState, useEffect } from "react";
import "./component.css";
import { AiFillDashboard } from "react-icons/ai";
import { FaBars, FaBook, FaVideo } from "react-icons/fa";
import {
  RiMessage2Line,
  RiDownload2Line,
  RiLogoutBoxRLine,
} from "react-icons/ri";
import { HiDocumentText, HiSpeakerphone } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import image1 from "../../images/user1.png";

const Nav = () => {
  const [details, setDetails] = useState(null);
  const [type, setType] = useState("");
  const navStyle = {
    color: "white",
    textDecoration: "none",
    fontSize: "14px",
  };

  const getDetails = async () => {
    const type = await localStorage.getItem("type");
    const token = await localStorage.getItem("token");
    setDetails(token);
    setType(type);
  };

  useEffect(() => {
    getDetails();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("type");
    setDetails(null);
  };

  console.log(details);
  console.log(type);

  return (
    <>
      <nav>
        <h2>VIRTUAL LECTURER DELIVERY MULTIMEDIA SYSTEM</h2>
        {details === null ? (
          <ul className="nav-links">
            <NavLink className="nav-item" to="/">
              Login
            </NavLink>
            <NavLink className="nav-item" to="/signup">
              Sign Up
            </NavLink>
          </ul>
        ) : null}
      </nav>
      {details !== null && type !== "" ? (
        type === "lecturer" ? (
          <div>
            <input type="checkbox" id="check" />
            <div className="sidebar">
              <label htmlFor="check">
                <span id="side-btn">
                  <FaBars size={18} />
                </span>
              </label>
              <img src={image1} alt="abou" />
              <div>
                <li>
                  <NavLink
                    style={navStyle}
                    className="nav-class"
                    to="/dashboard"
                  >
                    <AiFillDashboard size={18} />
                    <span>My Class</span>
                  </NavLink>
                </li>
                {/* <li>
          <NavLink style={navStyle} className="nav-class" to="/addpost">
            <FaPlus size={18} />
            <span>Notification</span>
          </NavLink>
              </li> */}
                <li>
                  <NavLink
                    style={navStyle}
                    className="nav-class"
                    to="/dashboard-message"
                  >
                    <RiMessage2Line size={18} />
                    <span>Message</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={navStyle}
                    className="nav-class"
                    to="/add-lecture"
                  >
                    <FaBook size={18} />
                    <span>Add Material</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={navStyle}
                    className="nav-class"
                    to="/add-video"
                  >
                    <FaVideo size={18} />
                    <span>Add Video</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={navStyle}
                    className="nav-class"
                    to="/add-assignment"
                  >
                    <HiDocumentText size={18} />
                    <span>Add Assignment</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={navStyle}
                    className="nav-class"
                    to="/add-annoucement"
                  >
                    <HiSpeakerphone size={18} />
                    <span>Add Annoucement</span>
                  </NavLink>
                </li>
                <li onClick={logout}>
                  <NavLink
                    style={navStyle}
                    className="nav-class"
                    to="/add-annoucement"
                  >
                    <RiLogoutBoxRLine size={18} />
                    <span>Log Out</span>
                  </NavLink>
                </li>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <input type="checkbox" id="check" />
            <div className="sidebar">
              <label htmlFor="check">
                <span id="side-btn">
                  <FaBars size={18} />
                </span>
              </label>
              <img src={image1} alt="about" />
              <div>
                <li>
                  <NavLink
                    style={navStyle}
                    className="nav-class"
                    to="/student-dashboard"
                  >
                    <AiFillDashboard size={18} />
                    <span>My Class</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={navStyle}
                    className="nav-class"
                    to="/student-message"
                  >
                    <RiMessage2Line size={18} />
                    <span>Message</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={navStyle}
                    className="nav-class"
                    to="/downloadables"
                  >
                    <RiDownload2Line size={18} />
                    <span>Downloadables</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={navStyle}
                    className="nav-class"
                    to="/viewassignments"
                  >
                    <HiDocumentText size={18} />
                    <span>View Assignment</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    style={navStyle}
                    className="nav-class"
                    to="/annoucements"
                  >
                    <HiSpeakerphone size={18} />
                    <span>View Annoucement</span>
                  </NavLink>
                </li>
              </div>
              <li onClick={logout}>
                <NavLink
                  style={navStyle}
                  className="nav-class"
                  to="/add-annoucement"
                >
                  <RiLogoutBoxRLine size={18} />
                  <span>Log Out</span>
                </NavLink>
              </li>
            </div>
          </div>
        )
      ) : null}
    </>
  );
};

export default Nav;
