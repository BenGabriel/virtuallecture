import React from "react";
import { Div, LecturerLeft } from "../components/Helper";
import "./lecturer.css";

const LecturerClass = () => {
  return (
    <Div>
      <div className="lecturer-dashboard">
        <LecturerLeft>
          <div className="added-class">
            <div>
              <p>Data Structure (10:00 - 12:00)</p>
              <hr />
              <b>Venue: Final Year class</b>
              <br />
              <i>Wednesday</i>
            </div>
            <div>
              <p>Switching Algebra (10:00 - 12:00)</p>
              <hr />
              <b>Venue: Final Year class</b>
              <br />
              <i>Thursday</i>
            </div>
            <div>
              <p>Computer Architechture (10:00 - 12:00)</p>
              <hr />
              <b>Venue: Final Year class</b>
              <br />
              <i>Friday</i>
            </div>
          </div>
        </LecturerLeft>
        <div className="rightside">
          <div>
            <form>
              <h3>ADD CLASS</h3>
              <label>Programme</label>
              <select>
                <option>Morning</option>
                <option>Afternoon</option>
              </select>
              <label>Course</label>
              <input type="text" name="course" />
              <label>Time</label>
              <div className="time">
                <input type="text" name="time" />
                <input type="text" name="time2" />
              </div>
              <label>Day of The Week</label>
              <select>
                <option>Monday</option>
                <option>Tuesday</option>
                <option>Wednesday</option>
                <option>Thursday</option>
                <option>Friday</option>
              </select>
              <button>Add</button>
            </form>
          </div>
        </div>
      </div>
    </Div>
  );
};

export default LecturerClass;
