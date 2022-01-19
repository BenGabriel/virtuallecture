import React from "react";
import { Div, LecturerLeft } from "../components/Helper";

const AddAnnouncement = () => {
  return (
    <Div>
      <div className="lecturer-dashboard">
        <LecturerLeft style={{ width: "100%" }}>
          <div className="addlecture-class">
            <div className="addlecture">
              <form>
                <h3>MAKE ANNOUCEMENT</h3>

                <label></label>
                <input type="text" placeholder="Title" />
                <textarea />
                <button>Upload</button>
              </form>
            </div>
            <div className="addlecture">
              <h3>SELECT THE CLASS TO SEND THE ANNOUCEMENT</h3>
              <div className="select-materialclass">
                <button>Check All</button>
                <div>
                  <p>
                    <b>Fixed Class</b>
                  </p>
                  <i>
                    We will be having a fixed class on friday by 2, come with
                    your calculator
                  </i>
                </div>
                <div>
                  <p>
                    <b>Submission of Assignment</b>
                  </p>
                  <i>Submission of my ASSIGNMENT is 12th of july</i>
                </div>
              </div>
            </div>
          </div>
        </LecturerLeft>
      </div>
    </Div>
  );
};

export default AddAnnouncement;
