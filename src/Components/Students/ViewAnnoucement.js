import React from "react";
import { Div, StudentLeft } from "../components/Helper";
import "./student.css";

const ViewAnnoucement = () => {
  return (
    <Div>
      <div className="student-dashboard">
        <StudentLeft style={{ width: "100%" }}>
          <div className="added-class downloadable">
            <h3>ANNOUCEMENTS</h3>
            <div>
              <h4>Mr John Okafor</h4>
              <i>
                We will be having a fixed class on friday by 2, come with your
                calculator
              </i>
            </div>
            <div>
              <h4>Mrs Philomina Akachukwu</h4>
              <i>Test on Automata will now be of tuesday 27th</i>
            </div>
            <div>
              <h4>Mrs Stella Micheal</h4>
              <i>
                Dont forget to purchase the textbook for COS 402 before the next
                class
              </i>
            </div>
            <div>
              <h4>Mr Uwakwe Samson</h4>
              <i>Friday is test for carry-over students</i>
            </div>
          </div>
        </StudentLeft>
      </div>
    </Div>
  );
};

export default ViewAnnoucement;
