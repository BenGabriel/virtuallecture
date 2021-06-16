import React from "react";
import { Div, StudentLeft } from "../components/Helper";
import "./student.css";

const StudentClass = () => {
  return (
    <Div>
      <div className="student-dashboard">
        <StudentLeft>
          <div className="added-class">
            <h3>ALL CLASSES</h3>
            <div>
              <p>Data Structure (10:00 - 12:00)</p>
              <hr />
              <i>Wednesday</i>
            </div>
            <div>
              <p>Automata Theory (10:00 - 12:00)</p>
              <hr />
              <i>Friday</i>
            </div>
            <div>
              <p>Digital Design (1:00 - 3:00)</p>
              <hr />
              <i>Friday</i>
            </div>
            <div>
              <p>Computer Architechture (10:00 - 12:00)</p>
              <hr />
              <i>Monday</i>
            </div>
          </div>
        </StudentLeft>
        <div className="student-rightside">
          <div>
            <h3>LIST OF CLASSMATE</h3>
            <div>
              <p>Akubuiro Philip</p>
            </div>
            <div>
              <p>Ifeoma John</p>
            </div>
            <div>
              <p>Uwakwe Ibile</p>
            </div>
            <div>
              <p>Fantastic John</p>
            </div>
            <div>
              <p>Ugwu Adaeze</p>
            </div>
            <div>
              <p>Adejpr Valentine</p>
            </div>
            <div>
              <p>Anayo Utobo</p>
            </div>
            <div>
              <p>Madu kelechi</p>
            </div>
            <div>
              <p>Izunna Philemon</p>
            </div>
            <div>
              <p>Adaeze Akuku</p>
            </div>
            <div>
              <p>Chukwu Philip</p>
            </div>
            <div>
              <p>Emelda Johnson</p>
            </div>
            <div>
              <p>Anita Waters</p>
            </div>
          </div>
        </div>
      </div>
    </Div>
  );
};

export default StudentClass;
